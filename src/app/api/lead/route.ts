import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get("email")?.toString();
    const website = formData.get("website")?.toString();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Log the lead
    const lead = {
      email,
      website: website || "",
      source: "squeeze_page",
      timestamp: new Date().toISOString(),
    };

    // Ensure data dir exists
    const dir = path.dirname(LEADS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // Read existing, append, write
    let leads: typeof lead[] = [];
    if (fs.existsSync(LEADS_FILE)) {
      leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
    }
    leads.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    console.log(`[LEAD] ${email}${website ? ` | ${website}` : ""}`);

    // Redirect to thank-you page
    return NextResponse.redirect(new URL("/thanks", req.url), 303);
  } catch (err) {
    console.error("Lead capture error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
