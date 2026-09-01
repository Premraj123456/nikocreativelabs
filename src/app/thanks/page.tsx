import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Scorecard Is Ready — Niko Creative Labs",
};

export default function Thanks() {
  return (
    <main className="min-h-screen bg-[#FCFCF9] text-[#1A1A1A] font-sans">
      <div className="max-w-[640px] mx-auto px-6 py-16 md:py-24">

        {/* ACKNOWLEDGMENT — Jared: "Thanks, your thing is on its way, and there's something you should know..." */}
        <h1 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] font-bold mb-4">
          Check your inbox.
        </h1>
        <p className="text-lg leading-relaxed mb-2">
          The DTC Commercial Scorecard is on its way. Should arrive in under a minute.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Open it, pull up your most recent product video, and answer the 8 questions. You'll know in 3 minutes whether your video is helping or hurting.
        </p>

        {/* TRIPWIRE — Jared: "And there's something you should know..." */}
        <div className="border-2 border-[#1A1A1A] p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-2">And there's something you should know...</h2>
          <p className="text-base leading-relaxed mb-4">
            That scorecard told you <strong>whether</strong> your video is the problem. But even if you scored 8 out of 8 NOs — it doesn't show you what's <strong>possible</strong>.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Most DTC founders have never seen their product treated like a real brand. They've never seen it with proper lighting, composition, a story. They don't know what they're missing — so they don't know how much money they're leaving on the table.
          </p>
          <p className="text-base leading-relaxed mb-4">
            <strong>We'll show you.</strong> Send us your product link and brand colors. Within 48 hours, we'll send back a 15-second AI-produced spec commercial of YOUR product. No stock footage. No templates. Your actual product, directed like a real shoot.
          </p>

          <div className="bg-[#F5F5F0] p-4 mb-5">
            <p className="text-3xl font-bold mb-1">₹999</p>
            <p className="text-sm text-[#555]">One-time. Your product, a 15-second spec commercial, in 48 hours.</p>
          </div>

          <p className="text-sm leading-relaxed mb-5 text-[#555]">
            <strong>Why ₹999?</strong> Two reasons. One: it's low enough that you don't have to think about it. Two: it filters out people who aren't serious. We're not going to spend 2 hours directing a spec for someone who won't even open the email. At ₹999, you're saying "I care enough to see what's possible." That's who we want to work with.
          </p>

          <a
            href="https://rzp.io/l/niko-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-[#1A1A1A] text-white font-bold text-base hover:bg-[#333] transition-colors"
          >
            Get Your 15-Second Spec →
          </a>

          <p className="text-sm text-[#999] mt-3">
            <strong>And if you don't like it?</strong> You keep it anyway. No refund hassle — if the spec doesn't make you say "damn, my product can look like that?", just tell us and we'll send your ₹999 back. We're that confident.
          </p>
        </div>

        {/* WHAT HAPPENS NEXT */}
        <div className="space-y-3 text-sm text-[#555] leading-relaxed mb-8">
          <p><strong>What happens next:</strong></p>
          <p>1. Scorecard arrives in your inbox. Go through it on your current video.</p>
          <p>2. If you scored 3+ NOs — grab the ₹999 Spec above. You'll see your product like you've never seen it.</p>
          <p>3. If you love the spec — we'll talk about a full commercial package.</p>
          <p>4. If you don't — keep the spec, take your ₹999 back. No hard feelings.</p>
        </div>

        <div className="space-y-4 text-sm text-[#555] leading-relaxed border-t border-[#ddd] pt-6">
          <p><strong>"Who are you?"</strong></p>
          <p>Niko Creative Labs, Hyderabad. We're a boutique studio that uses AI video production to make DTC brands look expensive — without the ₹2-5 lakh production house budget. We've done spec work for skincare, watches, and short films. See it at <a href="https://instagram.com/nikocreativelabs" className="underline">@nikocreativelabs</a>.</p>
          
          <p><strong>"Is this just AI slop?"</strong></p>
          <p>No. We don't type a prompt and ship whatever the AI spits out. Each spec is directed — reference images, shot composition, pacing, color, sound design. The AI is the camera. We're the directors. The difference shows.</p>
        </div>

        <p className="text-xs text-[#999] mt-16">
          Niko Creative Labs, Hyderabad. If the scorecard doesn't arrive, check spam and mark as not spam.
        </p>

      </div>
    </main>
  );
}
