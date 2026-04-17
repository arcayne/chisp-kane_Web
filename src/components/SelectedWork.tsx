import { useReveal } from '../hooks/useReveal';

const ROWS = [
  { num: '001', year: '████', industry: 'Industry', scope: 'Scope' },
  { num: '002', year: '████', industry: 'Industry', scope: 'Scope' },
  { num: '003', year: '████', industry: 'Industry', scope: 'Scope' },
];

function WorkRow({ row, i }: { row: (typeof ROWS)[number]; i: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} border-t border-rule`}
      style={{ ['--reveal-delay' as string]: `${i * 50}ms` }}
    >
      <div className="grid-12 py-10 md:py-14 items-baseline">
        <div className="col-span-1 font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
          {row.num}
        </div>
        <div className="col-span-3 md:col-span-5 font-display text-2xl md:text-[2rem] leading-tight text-ink">
          <span className="italic text-ink-3">[ TODO — engagement title ]</span>
        </div>
        <div className="col-span-2 md:col-span-2 md:col-start-7 mt-2 md:mt-0 font-mono text-[0.75rem] tracking-mono-wide uppercase text-ink-2">
          {row.industry}
        </div>
        <div className="col-span-2 md:col-span-2 md:col-start-9 mt-2 md:mt-0 font-mono text-[0.75rem] tracking-mono-wide uppercase text-ink-2">
          {row.scope}
        </div>
        <div className="col-span-4 md:col-span-2 md:col-start-11 mt-2 md:mt-0 font-mono text-[0.75rem] tracking-mono-wide text-ink-3 md:text-right">
          {row.year}
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
          <div className="eyebrow">§ 03 — Selected work</div>
        </div>
        <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
          A few recent <span className="italic">engagements.</span>
        </h2>
        <p className="col-span-4 md:col-span-5 md:col-start-3 mt-6 text-ink-2 leading-relaxed max-w-reading">
          <span className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-accent-ink/70 mr-2">
            [ TODO ]
          </span>
          Anonymized case sketches will live here — industry, scope, outcome.
        </p>
      </div>

      <div className="border-b border-rule">
        {ROWS.map((row, i) => (
          <WorkRow key={row.num} row={row} i={i} />
        ))}
      </div>
    </section>
  );
}
