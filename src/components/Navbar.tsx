import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#practice', label: 'Practice', num: '01' },
  { href: '#method', label: 'Method', num: '02' },
  { href: '#work', label: 'Work', num: '03' },
  { href: '#engagements', label: 'Engagements', num: '04' },
  { href: '#notes', label: 'Notes', num: '05' },
  { href: '#contact', label: 'Contact', num: '07' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-paper/85 backdrop-blur-[2px] transition-colors ${
        scrolled ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <div className="section-pad max-w-[1440px] mx-auto flex items-center justify-between h-14">
        <a href="#top" className="font-mono text-[0.82rem] tracking-mono-wide text-ink">
          CHISP<span className="text-ink-3">/</span>KANE
          <span className="hidden sm:inline text-ink-3 font-normal normal-case"> &nbsp;·&nbsp; S.L.</span>
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group font-mono text-[0.78rem] tracking-mono-wide uppercase text-ink-2 hover:text-ink transition-colors"
            >
              <span className="text-ink-3 mr-2">{l.num}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-[0.78rem] tracking-mono-wide uppercase text-ink"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rule bg-paper">
          <nav className="section-pad max-w-[1440px] mx-auto py-6 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-ink"
              >
                <span className="font-mono text-[0.7rem] text-ink-3 align-middle mr-3">
                  {l.num}
                </span>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
