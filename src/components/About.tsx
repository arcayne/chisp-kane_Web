import { useReveal } from '../hooks/useReveal';

const FACTS: Array<[string, string]> = [
  ['Founded', '████'],
  ['Based in', 'Madrid, ES'],
  ['Registration', '████████████'],
  ['Working languages', 'EN · ES'],
  ['Team size', '████'],
  ['Sectors', '████████ · ████████'],
  ['Availability', 'Q██ ██████'],
];

const PRINCIPLES = [
  'Write before you build.',
  'Keep scope small, artifacts specific.',
  'Say no to what you cannot do well.',
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
            and what keeps the work deliberate.{' '}
            <span className="italic text-ink-3">Replace with real copy.</span>
          </p>

          <div className="mt-12 pt-8 border-t border-rule">
            <div className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-ink-3 mb-4">
              Principles
            </div>
            <ol className="space-y-3">
              {PRINCIPLES.map((p, i) => (
                <li key={p} className="flex gap-4 items-baseline">
                  <span className="font-mono text-[0.7rem] tracking-mono-wide text-accent shrink-0 w-6">
                    0{i + 1}
                  </span>
                  <span className="font-display text-lg md:text-xl text-ink-2 leading-snug">
                    {p}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 pt-8 border-t border-rule">
            <div className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-ink-3 mb-3">
              What we decline
            </div>
            <p className="text-ink-2 leading-relaxed max-w-reading">
              <span className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-accent-ink/70 mr-2">
                [ TODO ]
              </span>
              A short paragraph listing the kinds of work the firm won't take on,
              so readers self-qualify.{' '}
              <span className="italic text-ink-3">Replace with real copy.</span>
            </p>
          </div>
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
              <dd className="font-mono text-[0.8rem] tracking-mono-wide text-ink-2 text-right">
                {v}
              </dd>
            </div>
          ))}
          <div className="pt-2">
            <div className="font-mono text-[0.72rem] uppercase tracking-mono-wide text-ink-3 mb-2">
              Direct
            </div>
            <a
              href="mailto:hello@chispkane.com"
              className="block font-mono text-[0.8rem] text-ink-2 hover:text-accent transition-colors"
            >
              hello@chispkane.com
            </a>
          </div>
        </dl>

        <div className="col-span-4 md:col-span-12 mt-16 md:mt-24 pt-8 border-t border-rule">
          <div className="flex items-baseline justify-between mb-6">
            <div className="font-mono text-[0.72rem] uppercase tracking-mono-wide text-ink-3">
              Collaborators &amp; clients
            </div>
            <div className="font-mono text-[0.68rem] uppercase tracking-mono-wide text-accent-ink/70">
              [ TODO — names ]
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="font-mono text-[0.78rem] tracking-mono-wide text-ink-3 border-b border-rule pb-3"
              >
                ████████████
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
