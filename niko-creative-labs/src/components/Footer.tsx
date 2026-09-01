export function Footer() {
  return (
    <footer className="bg-paper border-t border-line">
      <div className="mx-auto max-w-[1160px] px-6 py-6 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] tracking-[0.08em] text-faint">
        <span className="flex items-center gap-2"><img src="/brand/niko-monogram.svg" alt="Niko" width={20} height={20} className="h-5 w-5 border border-line" />© {new Date().getFullYear()} NIKO CREATIVE LABS — LAB 001</span>
        <span className="flex gap-4">
          <a href="tel:+918035087949" className="hover:text-ink">+91 80350 87949</a><span>•</span><a href="mailto:hello@nikocreativelabs.com" className="hover:text-ink">hello@nikocreativelabs.com</a>
        </span>
      </div>
    </footer>
  );
}
