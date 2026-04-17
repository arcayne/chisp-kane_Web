export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad max-w-[1440px] mx-auto pt-12 pb-10 border-t border-rule">
      <div className="grid-12 gap-y-8">
        <div className="col-span-4 md:col-span-3 font-mono text-[0.78rem] tracking-mono-wide text-ink">
          CHISP<span className="text-ink-3">/</span>KANE <span className="text-ink-3">· S.L.</span>
        </div>

        <div className="col-span-2 md:col-span-3 font-mono text-[0.72rem] uppercase tracking-mono-wide text-ink-3">
          <div>Registration</div>
          <div className="mt-1 text-ink-2 normal-case tracking-normal">
            <span className="italic">████████████</span>
          </div>
        </div>

        <div className="col-span-2 md:col-span-3 font-mono text-[0.72rem] uppercase tracking-mono-wide text-ink-3">
          <div>Correspondence</div>
          <a
            href="mailto:hello@chispkane.com"
            className="mt-1 block text-ink-2 normal-case tracking-normal hover:text-accent transition-colors"
          >
            hello@chispkane.com
          </a>
        </div>

        <div className="col-span-4 md:col-span-3 font-mono text-[0.72rem] uppercase tracking-mono-wide text-ink-3 md:text-right">
          <div>© {year}</div>
          <div className="mt-1 text-ink-3 normal-case tracking-normal">
            Set in Fraunces &amp; JetBrains Mono.
          </div>
        </div>
      </div>
    </footer>
  );
}
