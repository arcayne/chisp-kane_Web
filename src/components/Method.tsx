import { useReveal } from '../hooks/useReveal';

const PHASES = [
  { num: '01', label: 'Discovery' },
  { num: '02', label: 'Design' },
  { num: '03', label: 'Delivery' },
  { num: '04', label: 'Stewardship' },
];

function Phase({ num, label, i }: { num: string; label: string; i: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} flex-1 min-w-[15rem] border-t border-rule pt-6`}
      style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
    >
      <div className="font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
        Phase {num}
      </div>
      <h3 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
        {label}
      </h3>
      <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-mono-wide text-accent-ink/70">
        [ TODO — copy ]
      </p>
      <p className="mt-3 text-ink-2 leading-relaxed max-w-reading text-[0.95rem]">
        <span className="text-ink-3">████████████████████████████████████ ████████████ ██████████████ ████████████████ ███████.</span>
      </p>
    </div>
  );
}

export default function Method() {
  return (
    <section id="method" className="section-pad max-w-[1440px] mx-auto py-24 md:py-32">
      <div className="grid-12 mb-14 md:mb-20">
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">§ 02 — Method</div>
        </div>
        <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
          How we work, <span className="italic text-ink-3">end to end.</span>
        </h2>
        <p className="col-span-4 md:col-span-5 md:col-start-3 mt-6 text-ink-2 leading-relaxed max-w-reading">
          <span className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-accent-ink/70 mr-2">
            [ TODO ]
          </span>
          A short paragraph describing the firm's working principles and
          engagement shape goes here.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-8">
        {PHASES.map((p, i) => (
          <Phase key={p.num} num={p.num} label={p.label} i={i} />
        ))}
      </div>
    </section>
  );
}
