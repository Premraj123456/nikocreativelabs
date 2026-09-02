import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Scorecard Is Ready — Niko Creative Labs",
};

export default function Thanks() {
  return (
    <main className="min-h-screen bg-[#FCFCF9] text-[#1A1A1A] font-sans">
      <div className="max-w-[640px] mx-auto px-6 py-16 md:py-24">

        <h1 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] font-bold mb-4">
          Check your inbox.
        </h1>
        <p className="text-lg leading-relaxed mb-2">
          The Brand Video Scorecard is on its way. Should arrive in under a minute.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Open it, pull up your most recent product video, and answer the 8 questions. You&apos;ll know in 3 minutes whether your video is helping or hurting.
        </p>

        <div className="border-2 border-[#1A1A1A] p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-2">And there&apos;s something you should know...</h2>
          <p className="text-base leading-relaxed mb-4">
            That scorecard told you <strong>whether</strong> your video is the problem. But even if you scored 8 out of 8 NOs — it doesn&apos;t show you what&apos;s <strong>possible</strong>.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Most founders have never seen their product treated like a real brand. Never seen it with proper lighting, composition, a story. They don&apos;t know what they&apos;re missing — so they don&apos;t know how much money they&apos;re leaving on the table.
          </p>
          <p className="text-base leading-relaxed mb-4">
            <strong>We&apos;ll show you.</strong> Send us your product link and brand colors. Within 48 hours, we&apos;ll send back a 15-second AI-produced spec commercial of YOUR product. No stock footage. No templates. Your actual product, directed like a real shoot.
          </p>

          <div className="bg-[#F5F5F0] p-4 mb-5">
            <p className="text-3xl font-bold mb-1">$79</p>
            <p className="text-sm text-[#555]">One-time. Your product, a 15-second spec commercial, in 48 hours.</p>
          </div>

          <p className="text-sm leading-relaxed mb-5 text-[#555]">
            <strong>Why $79?</strong> Two reasons. One: it&apos;s low enough you don&apos;t have to think about it. Two: it filters out people who aren&apos;t serious. At $79, you&apos;re saying &quot;I care enough to see what&apos;s possible.&quot; That&apos;s who we want to work with.
          </p>

          <a
            href="https://checkout.dodopayments.com/buy/pdt_0NmklXEsNQRf1M9VqOsFO"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-[#1A1A1A] text-white font-bold text-base hover:bg-[#333] transition-colors"
          >
            Get Your 15-Second Spec — $79 →
          </a>

          <p className="text-sm text-[#999] mt-3">
            <strong>And if you don&apos;t like it?</strong> Keep it anyway. If the spec doesn&apos;t make you say &quot;damn, my product can look like that?&quot;, just tell us and we&apos;ll refund you. We&apos;re that confident.
          </p>
        </div>

        <div className="space-y-3 text-sm text-[#555] leading-relaxed mb-8">
          <p><strong>What happens next:</strong></p>
          <p>1. Scorecard arrives. Go through it on your current video.</p>
          <p>2. If you scored 3+ NOs — grab the $79 Spec above. See your product like you&apos;ve never seen it.</p>
          <p>3. If you love the spec — we&apos;ll talk about the full commercial package.</p>
          <p>4. If not — keep the spec, get your $79 back. No hard feelings.</p>
        </div>

        <div className="space-y-4 text-sm text-[#555] leading-relaxed border-t border-[#ddd] pt-6">
          <p><strong>&quot;Who are you?&quot;</strong></p>
          <p>Niko Creative Labs — we make brands look expensive without the $15k–$40k production bill. See spec work at <a href="https://instagram.com/nikocreativelabs" className="underline">@nikocreativelabs</a>.</p>
          
          <p><strong>&quot;Is this just AI slop?&quot;</strong></p>
          <p>No. Each spec is directed — reference images, shot composition, pacing, color, sound design. The AI is the camera. We&apos;re the directors. The difference shows.</p>
        </div>

        <p className="text-xs text-[#999] mt-16">
          Niko Creative Labs. If the scorecard doesn&apos;t arrive, check spam and mark as not spam.
        </p>

      </div>
    </main>
  );
}
