import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, brand, email, phone, brief, needs, website } = body;

    if (website) return NextResponse.json({ ok: true }); // honeypot
    if (!name || !email || !brief) {
      return NextResponse.json({ error: "Name, email, and brief are required." }, { status: 400 });
    }

    const needsStr = Array.isArray(needs) ? needs.join(", ") : needs || "Not specified";

    // Try Resend if configured
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Niko Labs <hello@nikocreativelabs.com>",
        to: ["hello@nikocreativelabs.com"],
        replyTo: email,
        subject: `New brief — ${name} — ${brand || "No brand"} — ${needsStr}`,
        text: `New project inquiry — Niko Creative Labs

Name: ${name}
Brand/Film: ${brand || "-"}
Email: ${email}
Phone: ${phone || "-"}
Needs: ${needsStr}

Brief:
${brief}

---
Reply to: ${email} | Call: ${phone || "-"}
`,
      });
    } else {
      console.log("[NIKO CONTACT]", { name, brand, email, phone, needs: needsStr, brief });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message || "Failed" }, { status: 500 });
  }
}
