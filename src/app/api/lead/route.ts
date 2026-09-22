import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const website = formData.get("website")?.toString();
    const niche = formData.get("niche")?.toString() || "salon";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Log the lead
    const lead = {
      email,
      phone: phone || "",
      website: website || "",
      niche,
      source: `${niche}_squeeze_page`,
      timestamp: new Date().toISOString(),
    };

    // Best-effort local log (server filesystems are read-only/ephemeral — never fail the lead on this)
    try {
      const dir = path.dirname(LEADS_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      let leads: typeof lead[] = [];
      if (fs.existsSync(LEADS_FILE)) {
        leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
      }
      leads.push(lead);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
    } catch (e) {
      console.log("[LEAD-FILE-SKIPPED]", (e as Error).message);
    }

    console.log(`[LEAD] ${email}${phone ? ` | ${phone}` : ""}${website ? ` | ${website}` : ""}`);

    // Email the lead so it lands in the inbox (server filesystem is ephemeral)
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: "Niko Labs <hello@nikocreativelabs.com>",
          to: ["hello@nikocreativelabs.com"],
          replyTo: email,
          subject: `New ${niche} lead — ${email}${phone ? ` / ${phone}` : ""}`,
          text: `New ${niche} lead — Niko Creative Labs\n\nEmail: ${email}\nWhatsApp: ${phone || "-"}\nWebsite/IG: ${website || "-"}\nNiche: ${niche}\nSource: ${lead.source}\nTime: ${lead.timestamp}\n\nReply to: ${email}`,
        });
        console.log(`[LEAD-EMAILED] ${email}`);
      } catch (e) {
        console.error("[LEAD-EMAIL-FAILED]", e);
      }
    }

    // Redirect to the niche thank-you page
    return NextResponse.redirect(new URL(`/funnel/${niche}/thanks`, req.url), 303);
  } catch (err) {
    console.error("Lead capture error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
