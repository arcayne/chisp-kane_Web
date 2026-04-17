import { useReveal } from '../hooks/useReveal';

const FACTS: Array<[string, string]> = [
  ['Founded', '████'],
  ['Based in', 'Madrid, ES'],
  ['Registration', '████████████'],
  ['Languages', 'EN · ES'],
  ['Team size', '████'],
];

export default function About() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="section-pad max-w-[1440px] mx-auto py-24 md:py-32 border-t border-rule"
    >
      <div
        ref={ref}
        className={`grid-12 reveal ${revealed ? 'is-revealed' : ''}`}
      >
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">§ 04 — The firm</div>
        </div>

        <div className="col-span-4 md:col-span-6 md:col-start-3">
          <p className="font-display text-2xl md:text-[2.1rem] leading-[1.2] text-ink">
            <span className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-accent-ink/70 block mb-4">
              [ TODO — firm paragraph ]
            </span>
            A short paragraph about the firm's origin, the people behind it,
            and what keeps the work deliberate. <span className="italic text-ink-3">Replace with real copy.</span>
          </p>
        </div>

        <dl className="col-span-4 md:col-span-3 md:col-start-10 mt-8 md:mt-2 space-y-4">
          {FACTS.map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between gap-4 border-b border-rule pb-2"
            >
              <dt className="font-mono text-[0.72rem] uppercase tracking-mono-wide text-ink-3">
                {k}
              </dt>
              <dd className="font-mono text-[0.8rem] tracking-mono-wide text-ink-2">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
