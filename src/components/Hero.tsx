import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="top"
      className="section-pad max-w-[1440px] mx-auto pt-36 md:pt-44 pb-24 md:pb-40"
    >
      <div
        ref={ref}
        className={`grid-12 reveal ${revealed ? 'is-revealed' : ''}`}
      >
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">
            <span className="mr-2 text-accent">§</span>
            Practice
          </div>
          <div className="mt-2 font-mono text-[0.72rem] text-ink-3">
            Est. ████ — Madrid, ES
          </div>
        </div>

        <h1 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-[2.6rem] leading-[1.02] sm:text-6xl md:text-[5.2rem] md:leading-[0.98] tracking-display-tight">
          Transforming business through{' '}
          <span className="italic text-accent-ink">blockchain</span>{' '}
          <span className="italic">innovation.</span>
        </h1>

        <div className="col-span-4 md:col-span-5 md:col-start-3 mt-10 md:mt-14">
          <p className="text-ink-2 text-lg md:text-xl max-w-reading leading-relaxed">
            Expert consulting in Web3, blockchain development, and digital
            transformation — delivered by a small, deliberate team.
          </p>
        </div>

        <div className="col-span-4 md:col-span-3 md:col-start-10 mt-10 md:mt-14 flex md:justify-end items-end">
          <a
            href="#contact"
            className="group inline-flex items-baseline gap-3 font-mono text-[0.78rem] tracking-mono-wide uppercase text-ink hover:text-accent transition-colors"
          >
            <span className="relative">
              Start a conversation
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink group-hover:bg-accent transition-colors" />
            </span>
            <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="grid-12 mt-24 md:mt-36">
        <div className="col-span-4 md:col-span-12 rule" />
        <div className="col-span-4 md:col-span-3 mt-6 font-mono text-[0.72rem] uppercase tracking-mono-wide text-ink-3">
          — Index
        </div>
        <dl className="col-span-4 md:col-span-9 mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 font-mono text-[0.78rem] text-ink-2">
          <div>
            <dt className="text-ink-3">01</dt>
            <dd className="mt-1">Practice</dd>
          </div>
          <div>
            <dt className="text-ink-3">02</dt>
            <dd className="mt-1">Method</dd>
          </div>
          <div>
            <dt className="text-ink-3">03</dt>
            <dd className="mt-1">Selected work</dd>
          </div>
          <div>
            <dt className="text-ink-3">04</dt>
            <dd className="mt-1">Contact</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
