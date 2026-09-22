import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

const MAGNETS: Record<string, { title: string; file: string }> = {
  salon: {
    title: "7 Hooks That Filled 11 Chairs",
    file: "https://nikocreativelabs.com/salon/7-hooks.pdf",
  },
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get("email")?.toString();
    const website = formData.get("website")?.toString();
    const niche = formData.get("niche")?.toString() || "salon";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Log the lead
    const lead = {
      email,
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

    console.log(`[LEAD] ${email}${website ? ` | ${website}` : ""} | ${niche}`);

    // Email: notify us + deliver the magnet to the lead
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(apiKey);
        const magnet = MAGNETS[niche] || MAGNETS.salon;
        await resend.emails.send({
          from: "Niko Labs <hello@nikocreativelabs.com>",
          to: ["hello@nikocreativelabs.com"],
          replyTo: email,
          subject: `New ${niche} lead — ${email}`,
          text: `New ${niche} lead — Niko Creative Labs\n\nEmail: ${email}\nWebsite/IG: ${website || "-"}\nNiche: ${niche}\nSource: ${lead.source}\nTime: ${lead.timestamp}\n\nReply to: ${email}`,
        });
        console.log(`[LEAD-EMAILED] ${email}`);
        await resend.emails.send({
          from: "Prem <hello@nikocreativelabs.com>",
          to: [email],
          subject: `Your ${magnet.title} (free PDF)`,
          text: `Hey,\n\nYour free PDF is here: ${magnet.file}\n\nPick 1 hook tonight, shoot 15 seconds on your phone, post tomorrow morning.\n\nTelugu morning, Hindi evening — test what fills YOUR chairs.\n\n— Prem, Niko Creative Labs (Hyderabad)\n\nP.S. Want all 40 hooks + scripts? The Scroll-Starter Pack (Rs.149) is here: https://checkout.dodopayments.com/buy/pdt_0No9OjEaOMNJun6fxCNKx`,
        });
        console.log(`[MAGNET-DELIVERED] ${email}`);
      } catch (e) {
        console.error("[LEAD-EMAIL-FAILED]", e);
      }
    }

    // Redirect to the niche thank-you page (one route per niche, no jargon in URLs)
    return NextResponse.redirect(new URL(`/${niche}/thanks`, req.url), 303);
  } catch (err) {
    console.error("Lead capture error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
