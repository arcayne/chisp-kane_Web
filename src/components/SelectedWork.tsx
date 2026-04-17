import { useReveal } from '../hooks/useReveal';

type Engagement = {
  num: string;
  year: string;
  industry: string;
  scope: string;
  stack: string;
  team: string;
  duration: string;
};

const ROWS: Engagement[] = [
  {
    num: '001',
    year: '████',
    industry: 'Industry',
    scope: 'Scope',
    stack: 'Stack',
    team: '██ eng',
    duration: '██ wk',
  },
  {
    num: '002',
    year: '████',
    industry: 'Industry',
    scope: 'Scope',
    stack: 'Stack',
    team: '██ eng',
    duration: '██ wk',
  },
  {
    num: '003',
    year: '████',
    industry: 'Industry',
    scope: 'Scope',
    stack: 'Stack',
    team: '██ eng',
    duration: '██ wk',
  },
];

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[0.64rem] uppercase tracking-mono-wide text-ink-3">
        {label}
      </div>
      <div className="mt-1 font-mono text-[0.8rem] tracking-mono-wide text-ink-2">
        {value}
      </div>
    </div>
  );
}

function WorkRow({ row, i }: { row: Engagement; i: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} border-t border-rule`}
      style={{ ['--reveal-delay' as string]: `${i * 50}ms` }}
    >
      <div className="grid-12 pt-10 md:pt-14 items-baseline">
        <div className="col-span-1 font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
          {row.num}
        </div>
        <div className="col-span-3 md:col-span-8 font-display text-2xl md:text-[2rem] leading-tight text-ink">
          <span className="italic text-ink-3">[ TODO — engagement title ]</span>
        </div>
        <div className="col-span-4 md:col-span-2 md:col-start-11 mt-2 md:mt-0 font-mono text-[0.75rem] tracking-mono-wide text-ink-3 md:text-right">
          {row.year}
        </div>
      </div>

      <div className="grid-12 pb-10 md:pb-14 mt-6 md:mt-8">
        <div className="hidden md:block col-span-1" />
        <div className="col-span-4 md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5">
          <MetaCell label="Industry" value={row.industry} />
          <MetaCell label="Scope" value={row.scope} />
          <MetaCell label="Stack" value={row.stack} />
          <MetaCell label="Team" value={row.team} />
          <MetaCell label="Duration" value={row.duration} />
        </div>
        <div className="col-span-4 md:col-span-4 md:col-start-8 mt-6 md:mt-0">
          <div className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
            Outcome
          </div>
          <p className="mt-2 text-ink-2 leading-relaxed max-w-reading text-[0.95rem]">
            <span className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-accent-ink/70 mr-2">
              [ TODO ]
            </span>
            <span className="text-ink-3">
              ████████████████ ████████████ ██████████ ███████████ ██████.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="section-pad max-w-[1440px] mx-auto py-24 md:py-32">
      <div className="grid-12 mb-12 md:mb-16">
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">§ 04 — Selected work</div>
        </div>
        <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
          A few recent <span className="italic">engagements.</span>
        </h2>
        <p className="col-span-4 md:col-span-6 md:col-start-3 mt-6 text-ink-2 leading-relaxed max-w-reading">
          Anonymized by default; full references are shared during
          conversations under NDA. Replace the placeholders below with real
          sketches as each engagement is cleared for publication.
        </p>
      </div>

      <div className="border-b border-rule">
        {ROWS.map((row, i) => (
          <WorkRow key={row.num} row={row} i={i} />
        ))}
      </div>

      <div className="mt-8 flex items-baseline justify-between">
        <div className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-ink-3">
          Total engagements delivered · ██
        </div>
        <a
          href="#contact"
          className="group font-mono text-[0.74rem] uppercase tracking-mono-wide text-ink hover:text-accent transition-colors"
        >
          Request references <span aria-hidden className="ml-2 group-hover:translate-x-0.5 inline-block transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}
