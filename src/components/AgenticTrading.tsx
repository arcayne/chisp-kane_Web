import { useReveal } from '../hooks/useReveal';

type Block = {
  num: string;
  spec: string;
  name: string;
  role: string;
  summary: string;
};

const BLOCKS: Block[] = [
  {
    num: '01',
    spec: 'x402',
    name: 'Payments',
    role: 'HTTP 402 · stablecoin settlement',
    summary:
      'Per-call, sub-cent payments over plain HTTP. Agents pay for data, inference, and tools the way browsers pay for content — no accounts, no keys shared downstream.',
  },
  {
    num: '02',
    spec: 'ERC-8004',
    name: 'Identity & trust',
    role: 'On-chain agent registry',
    summary:
      'Portable identity, reputation and validation for autonomous agents. Who ran the job, under whose authority, and what can be checked after the fact.',
  },
  {
    num: '03',
    spec: 'ERC-4337',
    name: 'Accounts',
    role: 'Smart-account abstraction',
    summary:
      'Spend limits, session keys, and policy logic enforced at the account layer. An agent holds a wallet the way a service holds an API key — bounded, revocable, auditable.',
  },
  {
    num: '04',
    spec: 'MCP',
    name: 'Tool surface',
    role: 'Model Context Protocol',
    summary:
      'A common interface between models and the outside world. We write MCP servers that expose on-chain state, settlement rails, and custody primitives as typed tools.',
  },
];

function BuildingBlock({ block, i }: { block: Block; i: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} flex-1 min-w-[15rem] border-t border-rule pt-6 pr-6`}
      style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
          Block {block.num}
        </span>
        <span className="h-px flex-1 bg-rule" />
      </div>

      <div className="mt-3 flex items-baseline gap-3">
        <span className="font-mono text-[0.82rem] tracking-mono-wide text-accent-ink">
          {block.spec}
        </span>
        <span className="font-mono text-[0.68rem] uppercase tracking-mono-wide text-ink-3">
          {block.role}
        </span>
      </div>

      <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink leading-tight">
        {block.name}
      </h3>

      <p className="mt-3 text-ink-2 leading-relaxed text-[0.95rem] max-w-reading">
        {block.summary}
      </p>
    </article>
  );
}

export default function AgenticTrading() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="agents"
      className="section-pad max-w-[1440px] mx-auto py-24 md:py-32 border-t border-rule"
    >
      <div
        ref={ref}
        className={`grid-12 reveal ${revealed ? 'is-revealed' : ''} mb-14 md:mb-20`}
      >
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">§ 02 — Agentic trading</div>
          <div className="mt-2 font-mono text-[0.72rem] text-ink-3">
            Thesis area · 2026 —
          </div>
        </div>

        <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
          Agents are becoming{' '}
          <span className="italic text-accent-ink">economic actors.</span>{' '}
          <span className="italic text-ink-3">
            We build the rails they settle on.
          </span>
        </h2>

        <div className="col-span-4 md:col-span-6 md:col-start-3 mt-8 text-ink-2 leading-relaxed max-w-reading space-y-4">
          <p>
            A narrow slice of what used to be called "trading infrastructure" is
            being rebuilt for software that acts on its own behalf. Models call
            APIs, sign transactions, and settle balances without a human in the
            loop for each step — and the assumptions baked into card networks,
            OAuth, and broker APIs do not quite fit.
          </p>
          <p>
            We work on the thin layer where an agent's intent becomes an
            on-chain instruction: identity, authorization, payment, and the
            tool surface that sits between the model and the chain. The four
            specifications below are the load-bearing pieces.
          </p>
        </div>

        <div className="col-span-4 md:col-span-3 md:col-start-10 mt-8 md:mt-2 space-y-3">
          <div className="border-t border-rule pt-3">
            <div className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
              Engagements
            </div>
            <div className="mt-1 font-mono text-[0.82rem] text-ink-2">
              Research · prototype · production
            </div>
          </div>
          <div className="border-t border-rule pt-3">
            <div className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
              Typical cadence
            </div>
            <div className="mt-1 font-mono text-[0.82rem] text-ink-2">
              4 – 16 weeks · milestones
            </div>
          </div>
          <div className="border-t border-rule pt-3">
            <div className="font-mono text-[0.66rem] uppercase tracking-mono-wide text-ink-3">
              Depth
            </div>
            <div className="mt-1 font-mono text-[0.82rem] text-ink-2">
              Spec &rarr; implementation
            </div>
          </div>
        </div>
      </div>

      <div className="grid-12">
        <div className="col-span-4 md:col-span-12">
          <div className="flex items-baseline justify-between mb-8">
            <div className="font-mono text-[0.72rem] uppercase tracking-mono-wide text-ink-3">
              Building blocks
            </div>
            <div className="font-mono text-[0.68rem] uppercase tracking-mono-wide text-ink-3">
              Four specs we build against
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:divide-x md:divide-rule">
            {BLOCKS.map((b, i) => (
              <BuildingBlock key={b.spec} block={b} i={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid-12 mt-16 md:mt-20 pt-8 border-t border-rule">
        <div className="col-span-4 md:col-span-8 md:col-start-3">
          <p className="font-display text-xl md:text-2xl text-ink-2 leading-snug max-w-reading">
            <span className="text-ink-3 italic">Where this meets the rest —</span>{' '}
            most briefs here cross into custody, smart-contract review, and the
            cryptography we already cover in{' '}
            <a href="#practice" className="underline decoration-rule hover:decoration-accent text-ink">
              Practice
            </a>
            . The method below applies unchanged.
          </p>
        </div>
        <div className="col-span-4 md:col-span-2 md:col-start-11 mt-4 md:mt-2 md:text-right">
          <a
            href="#contact"
            className="group inline-flex items-baseline gap-3 font-mono text-[0.74rem] uppercase tracking-mono-wide text-ink hover:text-accent transition-colors"
          >
            <span className="relative">
              Discuss a build
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink group-hover:bg-accent transition-colors" />
            </span>
            <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
