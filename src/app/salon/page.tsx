import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyderabad Salon? Fill This Weekend's Chairs — Free 7 Hooks PDF — Niko Creative Labs",
  description: "Free 1-page PDF: 7 hooks (Telugu + Hindi + English) that filled 11 chairs last weekend. Shoot tonight, post tomorrow.",
};

export default function SalonFunnel() {
  return (
    <main className="min-h-screen bg-[#FCFCF9] text-[#1A1A1A] font-sans">
      <div className="max-w-[640px] mx-auto px-6 py-16 md:py-24">

        <h1 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] font-bold mb-4">
          Hyderabad salon? Your Saturday chairs should be full by Friday night.
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Hey.</strong>
        </p>
        <p className="text-lg leading-relaxed mb-4">
          You do great hair. Great facials. Clients who come once love you. But Tuesday is empty, Saturday has gaps, and the salon next door — worse work than yours — posts reels that get 50k views.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          It&apos;s not your work. It&apos;s the first 2 seconds of your video. People decide &quot;small shop or premium salon&quot; before you even appear on screen.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          We put the 7 hooks that filled 11 chairs last weekend on one page — Telugu + Hindi + English, as Hyderabad actually speaks. Free. Shoot one tonight, post tomorrow morning.
        </p>

        <div className="border-2 border-[#1A1A1A] p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-2">7 Hooks That Filled 11 Chairs</h2>
          <p className="text-base leading-relaxed mb-4">
            Free 1-page PDF. Weekend-slot hooks, hairfall hooks, bridal hooks — Telugu + Hindi + English with shooting notes. Instant on WhatsApp.
          </p>
          <ul className="space-y-2 mb-6 text-base">
            <li>✓ Telugu morning, Hindi evening — test what fills YOUR chairs</li>
            <li>✓ Shoot on your phone, 15 seconds each, post tomorrow</li>
            <li>✓ Instant delivery — no pitch, no webinar, no catch</li>
          </ul>

          <form
            action="/api/lead"
            method="POST"
            className="space-y-3"
          >
            <input type="hidden" name="niche" value="salon" />
            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp number (10 digits)"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full px-4 py-3 border-2 border-[#1A1A1A] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email (PDF backup)"
              required
              className="w-full px-4 py-3 border-2 border-[#1A1A1A] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#1A1A1A] text-white font-bold text-base hover:bg-[#333] transition-colors"
            >
              Send My Free PDF →
            </button>
          </form>

          <p className="text-sm text-[#666] mt-3">No spam. PDF in seconds on WhatsApp + email.</p>
        </div>

        <div className="space-y-4 text-sm text-[#555] leading-relaxed">
          <p><strong>&quot;Will this work for my salon?&quot;</strong></p>
          <p>If your chairs are empty on weekdays and your weekends have gaps — yes. These are the exact hooks running for salons in Jubilee Hills, Banjara Hills and Madhapur right now. Telugu for trust, Hindi for reach, English subs for premium.</p>

          <p><strong>&quot;What&apos;s in it for you?&quot;</strong></p>
          <p>We&apos;re betting that after you post 3 of these and the DMs start, you&apos;ll want the full pack — or want us to just make the ads for you. That&apos;s the business. But the PDF is genuinely free and genuinely usable today.</p>
        </div>

        <p className="text-xs text-[#999] mt-16">
          Niko Creative Labs — Hyderabad. Questions? <a href="https://wa.me/917036024586?text=Hi%20Niko!%20I%20want%20the%207%20hooks%20PDF%20for%20my%20salon." className="underline">WhatsApp +91 70360 24586</a>. No spam, ever.
        </p>

      </div>
    </main>
  );
}
