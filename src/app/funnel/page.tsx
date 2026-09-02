import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Brand Video Scorecard — Funnel Than Phone Footage — Niko Creative Labs",
  description: "A real commercial costs $15k+. We make AI-produced brand commercials for a fraction. See the difference. Free scorecard.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFCF9] text-[#1A1A1A] font-sans">
      <div className="max-w-[640px] mx-auto px-6 py-16 md:py-24">

        <h1 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] font-bold mb-4">
          You spent months perfecting your product.
        </h1>
        <h1 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] font-bold mb-10">
          Then you filmed it on your phone and put it on Instagram.
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Hey.</strong>
        </p>
        <p className="text-lg leading-relaxed mb-4">
          We&apos;ve all done it. The product is ready. The website is live. Someone says &quot;put up a video.&quot; So you grab your phone, shoot 20 seconds of the product on your desk, add trending audio, and hit post.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          And nothing happens.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Here&apos;s what&apos;s actually happening:</strong> when someone lands on your Instagram or product page and sees phone footage with bad lighting and no story, their brain registers one thing — <em>small brand</em>. Not premium. Not trustworthy. Not &quot;I should pay full price for this.&quot;
        </p>
        <p className="text-lg leading-relaxed mb-4">
          A real commercial shoot costs $15k–$40k. Crew, location, lighting, talent, editing, revisions. Most brands can&apos;t justify that until they&apos;re doing 7 figures. So they stay stuck with phone footage, wondering why conversion won&apos;t move.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>We built a way around it.</strong> AI-produced brand commercials — the kind that make people stop scrolling and ask &quot;who shot this?&quot; — for about one-tenth of a traditional shoot.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          But first: is your current video even the problem? Grab our free scorecard. 8 questions. 3 minutes. You&apos;ll know exactly where you stand.
        </p>

        <div className="border-2 border-[#1A1A1A] p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-2">The Brand Video Scorecard</h2>
          <p className="text-base leading-relaxed mb-4">
            Free 8-point audit. Is your product video helping you sell, or is it the reason people bounce? Answer 8 yes/no questions and see your score instantly.
          </p>
          <ul className="space-y-2 mb-6 text-base">
            <li>✓ Takes 3 minutes. Check boxes. Done.</li>
            <li>✓ You&apos;ll know <strong>exactly</strong> whether your video is costing you sales</li>
            <li>✓ Instant result — no pitch, no webinar, no catch</li>
          </ul>

          <form 
            action="/api/lead" 
            method="POST"
            className="space-y-3"
          >
            <input 
              type="email" 
              name="email" 
              placeholder="Your email — I'll send the scorecard right now" 
              required
              className="w-full px-4 py-3 border-2 border-[#1A1A1A] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
            />
            <input 
              type="url" 
              name="website" 
              placeholder="Your website or Instagram (optional — so we can see your current video)" 
              className="w-full px-4 py-3 border-2 border-[#1A1A1A] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
            />
            <button 
              type="submit"
              className="w-full py-3 bg-[#1A1A1A] text-white font-bold text-base hover:bg-[#333] transition-colors"
            >
              Send Me the Free Scorecard →
            </button>
          </form>

          <p className="text-sm text-[#666] mt-3">No spam. No pitches. Just the scorecard.</p>
        </div>

        <div className="space-y-4 text-sm text-[#555] leading-relaxed">
          <p><strong>&quot;AI-produced? Is this just cheap AI slop?&quot;</strong></p>
          <p>Fair question. It&apos;s not. We don&apos;t type a prompt and ship whatever comes out. We use Seedance — the same engine ByteDance built — but we direct it like a real shoot. Reference images. Shot composition. Color grade. We iterate until it looks like someone spent $20k on a crew. The AI is the camera. We&apos;re the directors.</p>
          <p>We&apos;ve done spec work across categories — skincare, watches, and short film concepts. See it at <a href="https://instagram.com/nikocreativelabs" className="underline">@nikocreativelabs</a> — go see for yourself.</p>
          
          <p><strong>&quot;What&apos;s in it for you?&quot;</strong></p>
          <p>We&apos;re betting that after you see the scorecard — and after you compare your current video to what&apos;s possible — you&apos;ll want us to make one for your brand. That&apos;s the business. But the scorecard is genuinely free, genuinely useful, and has no pitch inside.</p>
        </div>

        <p className="text-xs text-[#999] mt-16">
          Niko Creative Labs — AI-produced brand commercials. No spam, ever.
        </p>

      </div>
    </main>
  );
}
