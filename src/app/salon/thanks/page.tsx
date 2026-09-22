import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your 7 Hooks Are On The Way — Niko Creative Labs",
};

const PACK_LINK = "https://checkout.dodopayments.com/buy/pdt_0No9OjEaOMNJun6fxCNKx";
const WA_AUDIT =
  "https://wa.me/917036024586?text=Hi%20Niko!%20I%20just%20grabbed%20the%207%20hooks%20PDF.%20My%20salon%20IG%20is%3A%20";
const WA_BUMP =
  "https://wa.me/917036024586?text=Hi%20Niko!%20I%20bought%20the%20Rs.149%20pack.%20I%20want%20the%20Rs.999%20done-for-you%20reel.%20My%20footage%20is%20ready.";

export default function SalonThanks() {
  return (
    <main className="min-h-screen bg-[#FCFCF9] text-[#1A1A1A] font-sans">
      <div className="max-w-[640px] mx-auto px-6 py-16 md:py-24">

        <h1 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] font-bold mb-4">
          Check your inbox.
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Your 7 hooks are on the way — should arrive in under a minute. Or{" "}
          <a href="/salon/7-hooks.pdf" className="underline font-bold">
            download it right now →
          </a>
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Pick 1 hook tonight, shoot 15 seconds, post tomorrow morning. And there&apos;s something you should know...
        </p>

        <div className="border-2 border-[#1A1A1A] p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-2">Don&apos;t stop at 7. Get all 40.</h2>
          <p className="text-base leading-relaxed mb-4">
            The free PDF fixes this weekend. The <strong>Scroll-Starter Pack</strong> fixes every week: 40 Telugu + Hindi hooks, 10 ready-to-shoot 15-sec scripts with captions, 10 CapCut templates, and the 7-day Telugu-AM / Hindi-PM posting plan. Shoot tonight, get DMs this week. Instant download.
          </p>

          <div className="bg-[#F5F5F0] p-4 mb-5">
            <p className="text-3xl font-bold mb-1">Rs. 149</p>
            <p className="text-sm text-[#555]">One-time. Instant download. Closes Sunday.</p>
          </div>

          <a
            href={PACK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-[#1A1A1A] text-white font-bold text-base hover:bg-[#333] transition-colors"
          >
            Get The Pack — Rs.149 →
          </a>

          <p className="text-sm text-[#555] mt-4">
            <strong>Bump:</strong> bought the pack? We&apos;ll do one reel for you — send phone footage, back in 48hrs (Rs.999).{" "}
            <a href={WA_BUMP} className="underline">Claim on WhatsApp →</a>
          </p>
        </div>

        <div className="border border-[#ccc] p-6 mb-8">
          <p className="font-bold text-base mb-2">Want it for YOUR salon, free?</p>
          <p className="text-sm leading-relaxed text-[#555] mb-4">
            Get my free 30-sec voice audit — 3 hook ideas for your chairs. Send your Instagram link on WhatsApp.
          </p>
          <a
            href={WA_AUDIT}
            className="block w-full text-center py-3 border-2 border-[#1A1A1A] font-bold text-base hover:bg-[#eee] transition-colors"
          >
            Get Free Audit on WhatsApp →
          </a>
        </div>

        <p className="text-xs text-[#999] mt-16">
          Niko Creative Labs — Hyderabad. Questions? <a href="https://wa.me/917036024586" className="underline">WhatsApp +91 70360 24586</a>.
        </p>

      </div>
    </main>
  );
}
