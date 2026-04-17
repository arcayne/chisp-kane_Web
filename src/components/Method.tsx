import { useReveal } from '../hooks/useReveal';

type Phase = {
  num: string;
  label: string;
  summary: string;
  deliverables: string[];
  duration: string;
  cadence: string;
};

const PHASES: Phase[] = [
  {
    num: '01',
    label: 'Discovery',
    summary:
      'We read the existing material, talk to the people involved, and write down what we believe the problem actually is.',
    deliverables: ['Scoping memo', 'Open questions', 'Stakeholder map'],
    duration: '1 – 2 weeks',
    cadence: 'Weekly sync',
  },
  {
    num: '02',
    label: 'Design',
    summary:
      'We turn the memo into a concrete technical direction. Trade-offs are written out; assumptions are flagged before code is written.',
    deliverables: ['Technical brief', 'Threat model', 'Milestone plan'],
    duration: '2 – 3 weeks',
    cadence: 'Weekly review',
  },
  {
    num: '03',
    label: 'Delivery',
    summary:
      'Implementation in short iterations. Every change is reviewed internally before it leaves the room. No surprise scope.',
    deliverables: ['Code + tests', 'Interim reports', 'Release notes'],
    duration: '4 – 12 weeks',
    cadence: 'Bi-weekly demo',
  },
  {
    num: '04',
    label: 'Stewardship',
    summary:
      'After delivery we stay reachable. Either a light retainer for questions, or a scheduled review at a pre-agreed horizon.',
    deliverables: ['Handover doc', 'Runbook', 'Review cadence'],
    duration: 'Ongoing',
    cadence: 'Monthly / on-call',
  },
];

function PhaseCard({ phase, i }: { phase: Phase; i: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} flex-1 min-w-[16rem] border-t border-rule pt-6 pr-6`}
      style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
          Phase {phase.num}
        </span>
        <span className="h-px flex-1 bg-rule" />
      </div>
      <h3 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
        {phase.label}
      </h3>
      <p className="mt-3 text-ink-2 leading-relaxed text-[0.95rem] max-w-reading">
        {phase.summary}
      </p>

      <div className="mt-6 space-y-3">
        <div>
          <div className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
            Deliverables
          </div>
          <ul className="mt-1 space-y-0.5">
            {phase.deliverables.map((d) => (
              <li key={d} className="text-[0.9rem] text-ink-2 before:content-['—'] before:mr-2 before:text-ink-3">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 border-t border-rule/70">
          <div>
            <dt className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
              Duration
            </dt>
            <dd className="mt-0.5 font-mono text-[0.82rem] text-ink-2">{phase.duration}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
              Cadence
            </dt>
            <dd className="mt-0.5 font-mono text-[0.82rem] text-ink-2">{phase.cadence}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function Method() {
  return (
    <section
      id="method"
      className="section-pad max-w-[1440px] mx-auto py-24 md:py-32 border-t border-rule"
    >
      <div className="grid-12 mb-14 md:mb-20">
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">§ 02 — Method</div>
        </div>
        <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
          How we work, <span className="italic text-ink-3">end to end.</span>
        </h2>
        <p className="col-span-4 md:col-span-6 md:col-start-3 mt-6 text-ink-2 leading-relaxed max-w-reading">
          Most engagements move through four phases. The edges are porous;
          what matters is that every phase has a written artifact attached to
          it, so there is always something to read back to.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:divide-x md:divide-rule">
        {PHASES.map((p, i) => (
          <PhaseCard key={p.num} phase={p} i={i} />
        ))}
      </div>
    </section>
  );
}
