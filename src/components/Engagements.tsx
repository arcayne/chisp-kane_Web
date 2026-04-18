import { useReveal } from '../hooks/useReveal';

type Shape = {
  num: string;
  name: string;
  tagline: string;
  summary: string;
  bestFor: string;
  duration: string;
  cadence: string;
  starts: string;
};

const SHAPES: Shape[] = [
  {
    num: '01',
    name: 'Audit',
    tagline: 'A fixed-scope read of an existing system.',
    summary:
      'We read the code, the threat model, and the assumptions behind them. You receive a written report you can act on without us.',
    bestFor: 'Pre-launch review · pre-investment diligence · post-incident',
    duration: '3 – 8 weeks',
    cadence: 'Kickoff · mid-review · readout',
    starts: 'Fixed fee',
  },
  {
    num: '02',
    name: 'Sprint',
    tagline: 'A short, scoped build with a written artifact at the end.',
    summary:
      'One problem, one team, one deadline. Architecture brief up front; tested code and a handover document at the close.',
    bestFor: 'Prototype · protocol spec · first production release',
    duration: '6 – 14 weeks',
    cadence: 'Weekly sync · bi-weekly demo',
    starts: 'Fixed scope, milestone-billed',
  },
  {
    num: '03',
    name: 'Retainer',
    tagline: 'An ongoing seat at the table.',
    summary:
      'Reserved hours each month for review, advisory, and targeted implementation. Useful when decisions are frequent but the scope is not fixed.',
    bestFor: 'Ongoing protocol work · in-house team augmentation · advisory',
    duration: '3 – 12 months',
    cadence: 'Monthly review · on-call channel',
    starts: 'Monthly, capped hours',
  },
];

function ShapeCard({ shape, i }: { shape: Shape; i: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} flex-1 min-w-[16rem] border-t border-rule pt-6 pr-6`}
      style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
          Shape {shape.num}
        </span>
        <span className="h-px flex-1 bg-rule" />
      </div>
      <h3 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
        {shape.name}
      </h3>
      <p className="mt-2 font-display text-[1.05rem] italic text-ink-3 leading-snug">
        {shape.tagline}
      </p>
      <p className="mt-4 text-ink-2 leading-relaxed text-[0.95rem] max-w-reading">
        {shape.summary}
      </p>

      <div className="mt-6 space-y-3">
        <div>
          <div className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
            Best for
          </div>
          <div className="mt-1 text-[0.9rem] text-ink-2 leading-snug">
            {shape.bestFor}
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 border-t border-rule/70">
          <div>
            <dt className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
              Duration
            </dt>
            <dd className="mt-0.5 font-mono text-[0.82rem] text-ink-2">{shape.duration}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
              Cadence
            </dt>
            <dd className="mt-0.5 font-mono text-[0.82rem] text-ink-2">{shape.cadence}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
              Arrangement
            </dt>
            <dd className="mt-0.5 font-mono text-[0.82rem] text-ink-2">{shape.starts}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function Engagements() {
  return (
    <section
      id="engagements"
      className="section-pad max-w-[1440px] mx-auto py-24 md:py-32 border-t border-rule"
    >
      <div className="grid-12 mb-14 md:mb-20">
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">§ 04 — Engagements</div>
        </div>
        <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
          Three shapes of <span className="italic">collaboration.</span>
        </h2>
        <p className="col-span-4 md:col-span-6 md:col-start-3 mt-6 text-ink-2 leading-relaxed max-w-reading">
          Most briefs settle into one of these. Pricing is discussed on the
          first call; the shape is chosen together, based on what the problem
          actually needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:divide-x md:divide-rule">
        {SHAPES.map((s, i) => (
          <ShapeCard key={s.num} shape={s} i={i} />
        ))}
      </div>

      <div className="grid-12 mt-14 md:mt-20">
        <div className="hidden md:block col-span-1" />
        <div className="col-span-4 md:col-span-10 border-t border-rule pt-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
          <p className="font-mono text-[0.75rem] tracking-mono-wide uppercase text-ink-3">
            Not sure which shape fits?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-baseline gap-3 font-mono text-[0.78rem] tracking-mono-wide uppercase text-ink hover:text-accent transition-colors"
          >
            <span className="relative">
              Send a brief
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink group-hover:bg-accent transition-colors" />
            </span>
            <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
