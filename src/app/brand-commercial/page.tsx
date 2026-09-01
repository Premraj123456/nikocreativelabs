import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Brand Commercial Package — Niko Creative Labs",
  description: "3 AI-produced brand commercials + 5 short-form cuts. ₹24,999. Your product finally looks like a real brand.",
};

export default function BrandCommercial() {
  return (
    <main className="min-h-screen bg-[#FCFCF9] text-[#1A1A1A] font-sans">
      <div className="max-w-[680px] mx-auto px-6 py-16 md:py-24">

        {/* 1. HEADLINE — Jared: fear + specific outcome */}
        <h1 className="text-[1.75rem] md:text-[2.5rem] leading-[1.15] font-bold mb-6">
          <strong>Your product is good enough to sell itself.</strong>
        </h1>
        <h2 className="text-[1.3rem] md:text-[1.5rem] leading-[1.3] mb-10 text-[#333]">
          The problem is your video looks like everyone else's — and that's why they scroll past without buying.
        </h2>

        {/* 2. IDENTIFY THE PROBLEM — Jared: story IS the problem */}
        <p className="text-lg leading-relaxed mb-4">
          <strong>Hey.</strong>
        </p>
        <p className="text-lg leading-relaxed mb-4">
          You know your product is better than the competition. You've seen theirs. The packaging is worse. The formulation is watered down. The build quality isn't close to yours. And yet — their Instagram Reels get 50k views and yours gets 400.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          You tell yourself it's the algorithm. But you pull up their video and your video side by side, and something sinks in: theirs <em>looks like a brand</em>. Yours looks like someone filmed it in their living room. Which, to be fair, you did.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>A real commercial shoot costs ₹2-5 lakhs.</strong> Crew. Lighting. A DOP who knows what they're doing. Location permits. Talent. Post-production. Revisions. For most DTC founders doing ₹5-50 lakhs a month, that math doesn't work. You'd have to sell 2,000 extra units just to break even on the video. So you stay stuck with phone footage, telling yourself you'll do it "once we scale."
        </p>
        <p className="text-lg leading-relaxed mb-4">
          But here's the trap: <strong>you can't scale without the commercial.</strong> Better video → more trust → higher conversion → more revenue → now you can afford the traditional shoot. The video comes first. Not after.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          <strong>Until now, that was a real Catch-22. It's not anymore.</strong>
        </p>

        {/* 3. PROVIDE THE SOLUTION — Jared: reveal the mechanism */}
        <div className="border-2 border-[#1A1A1A] p-6 md:p-8 mb-10">
          <h3 className="text-xl font-bold mb-4">The Brand Commercial Package</h3>
          <p className="text-lg leading-relaxed mb-4">
            Three AI-produced commercials for your brand — shot, directed, and edited like a real production house would. The difference is the camera is AI (Seedance, the same engine ByteDance built), and we're the directors — so your cost is roughly <strong>one-tenth</strong> of a traditional shoot.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-[#1A1A1A] pl-4">
              <p className="font-bold text-base">1. The Product Hero (30 sec)</p>
              <p className="text-sm text-[#555]">Your product as the star. Cinematic lighting, movement, detail shots. The one you pin to your Instagram and put on your landing page. Reference: watch commercials, premium skincare B-roll.</p>
            </div>
            <div className="border-l-4 border-[#1A1A1A] pl-4">
              <p className="font-bold text-base">2. The Lifestyle Spot (30 sec)</p>
              <p className="text-sm text-[#555]">Your product in context. Someone wearing it, using it, experiencing it. This is the "I want that life" video. Runs as your primary Instagram/YouTube ad creative.</p>
            </div>
            <div className="border-l-4 border-[#1A1A1A] pl-4">
              <p className="font-bold text-base">3. The UGC Cut (30 sec)</p>
              <p className="text-sm text-[#555]">Styled like organic user-generated content — but beautifully shot. The "my friend recommended this" energy that converts on TikTok and Reels. Feels authentic, looks expensive.</p>
            </div>
          </div>

          <div className="border-t border-[#ddd] pt-4 mb-4">
            <p className="font-bold text-base">+ 5 Short-Form Cuts</p>
            <p className="text-sm text-[#555]">Each commercial chopped into 15-30 second vertical formats for Reels, Shorts, and TikTok. Ready to post. No extra editing needed.</p>
          </div>

          <div className="bg-[#F5F5F0] p-4 mb-5">
            <p className="text-3xl font-bold mb-1">₹24,999</p>
            <p className="text-sm text-[#555]">One-time. All deliverables in 7-10 business days. Unlimited revisions within scope.</p>
          </div>

          <a
            href="https://rzp.io/l/niko-core"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-[#1A1A1A] text-white font-bold text-base hover:bg-[#333] transition-colors"
          >
            Get the Brand Commercial Package →
          </a>
        </div>

        {/* 5. BENEFITS — Jared: every bullet leads with the feeling, feature rides behind */}
        <h3 className="text-xl font-bold mb-4">What changes after you get these videos</h3>
        <div className="space-y-3 mb-8">
          <div className="border-l-4 border-[#1A1A1A] pl-4">
            <p><strong>Your Instagram stops looking like a hobby and starts looking like a brand.</strong> People who land on your profile see 3 pinned videos that look expensive. First impression: "these guys are legit."</p>
          </div>
          <div className="border-l-4 border-[#1A1A1A] pl-4">
            <p><strong>Your ads actually convert.</strong> Not because you changed the targeting — because the creative doesn't look like every other DTC ad in the feed. People stop, watch, click.</p>
          </div>
          <div className="border-l-4 border-[#1A1A1A] pl-4">
            <p><strong>You can charge more.</strong> A ₹499 product with a premium commercial reads as a ₹999 product. Buyers pay for perception. Always have.</p>
          </div>
          <div className="border-l-4 border-[#1A1A1A] pl-4">
            <p><strong>Retailers and buyers take you seriously.</strong> DM a buyer with a link to your site and they see a real brand, not a side hustle. That changes the conversation before you say a word.</p>
          </div>
          <div className="border-l-4 border-[#1A1A1A] pl-4">
            <p><strong>You stop feeling embarrassed about your content.</strong> No more "should I post this?" hesitation. You're proud to put these up. That confidence shows in everything else you do.</p>
          </div>
        </div>

        {/* 6. PROOF — Jared: spec work IS the proof. Be honest about limits. */}
        <h3 className="text-xl font-bold mb-4">See what we've made</h3>
        <p className="text-base leading-relaxed mb-4">
          We've done spec work for skincare, watches, and short films — all AI-produced, all directed like real shoots. See the results at <a href="https://instagram.com/nikocreativelabs" className="underline">@nikocreativelabs</a>.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>What about your specific product?</strong> That's what the ₹999 Spec is for. Before you commit to the full package, we'll make a 15-second spec of YOUR product so you can see exactly what's possible. If you love it, we roll into the full package. If you don't, you take your ₹999 back and walk away with a free spec. No risk.
        </p>

        {/* 7. THE GUARANTEE — Jared: generous, builds trust */}
        <div className="border-2 border-[#1A1A1A] p-5 mb-8">
          <p className="font-bold text-base mb-2">The "This Better Be Good" Guarantee</p>
          <p className="text-sm leading-relaxed text-[#555]">
            If the first draft of your Product Hero commercial doesn't make you say "whoa" — we'll redo it. Twice. If after three attempts you're still not happy, you get a full refund and keep all the work we've done so far. We're not interested in taking your money if we can't deliver something you're proud to post.
          </p>
        </div>

        {/* 8. SCARCITY — Jared: real deadline, not fake */}
        <div className="bg-[#F5F5F0] p-5 mb-8">
          <p className="font-bold text-base mb-2">We take 3 clients at a time.</p>
          <p className="text-sm leading-relaxed text-[#555]">
            Each commercial package takes 7-10 days of directed work — reference gathering, shot composition, iteration, sound design. We don't batch-process 20 clients at once because the quality tanks. We're currently at capacity. If you want a spot, grab the ₹999 Spec first — that's the only way into the queue. When slots open, Spec clients get first priority.
          </p>
        </div>

        {/* 10. CALL TO ACTION — Jared: spell it out like they've never used the internet */}
        <div className="mb-8">
          <p className="text-base leading-relaxed mb-4">
            <strong>Here's what to do:</strong>
          </p>
          <p className="text-base leading-relaxed mb-2">1. Grab the ₹999 Spec — that's the first step. We'll make a 15-second commercial of your product.</p>
          <p className="text-base leading-relaxed mb-2">2. If you love it (you probably will), we'll talk about the full package and lock in your slot.</p>
          <p className="text-base leading-relaxed mb-4">3. If you don't love it, take your ₹999 back. No questions, no awkward follow-ups.</p>
          
          <a
            href="https://rzp.io/l/niko-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-[#1A1A1A] text-white font-bold text-base hover:bg-[#333] transition-colors"
          >
            Start With the ₹999 Spec →
          </a>
        </div>

        {/* 11. WARNING — Jared: cost of inaction */}
        <div className="border-t border-[#ddd] pt-6 mb-8">
          <h3 className="font-bold text-base mb-2">A note on waiting</h3>
          <p className="text-sm leading-relaxed text-[#555] mb-2">
            Every month you stay with phone footage, you're paying Instagram ads to send people to content that doesn't convert. If your CAC is ₹300 and your conversion rate could improve 30% with better creative — that's real money. More than the package costs.
          </p>
          <p className="text-sm leading-relaxed text-[#555]">
            The brands that win in DTC aren't the ones with the best products. They're the ones that <strong>look like the best products.</strong> The gap between what your product IS and what it LOOKS LIKE — that's the gap this package closes. Don't wait until your competitor closes theirs first.
          </p>
        </div>

        {/* 12. P.S. — Jared: always. Another chance at the click. */}
        <div className="border-t-2 border-[#1A1A1A] pt-6">
          <p className="text-sm leading-relaxed text-[#555] mb-2">
            <strong>P.S.</strong> The ₹999 Spec is the only way in. We don't take cold DMs for the full package — we want you to see what your product looks like first, so you're not buying blind. Grab the Spec. See your product the way customers should see it. Then decide.
          </p>
          <a
            href="https://rzp.io/l/niko-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 bg-[#1A1A1A] text-white font-bold text-sm hover:bg-[#333] transition-colors"
          >
            Grab the ₹999 Spec →
          </a>
        </div>

        <p className="text-xs text-[#999] mt-16">
          Niko Creative Labs, Hyderabad. AI-produced commercials, human-directed.
        </p>

      </div>
    </main>
  );
}
