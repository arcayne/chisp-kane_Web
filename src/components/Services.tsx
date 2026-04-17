import { useReveal } from '../hooks/useReveal';

type Service = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  deliverables: string[];
  typical: string;
};

const PRACTICE: Service[] = [
  {
    num: '01',
    title: 'Custom Software Development',
    description:
      'Tailored blockchain solutions and smart contract development for your specific business needs.',
    tags: ['Solidity', 'EVM', 'Rust'],
    deliverables: ['Architecture brief', 'Contracts + test suite', 'Deploy & handover'],
    typical: '6 – 14 weeks · fixed scope',
  },
  {
    num: '02',
    title: 'Security Audits',
    description:
      'Comprehensive security assessments of blockchain systems and smart contracts.',
    tags: ['Review', 'Threat model', 'Fuzzing'],
    deliverables: ['Threat model', 'Findings report', 'Remediation review'],
    typical: '3 – 8 weeks · fixed scope',
  },
  {
    num: '03',
    title: 'Web3 Solutions',
    description:
      'End-to-end development and integration of decentralized applications and services.',
    tags: ['dApps', 'Indexers', 'Wallets'],
    deliverables: ['Interface + state model', 'Indexer / RPC layer', 'Ops runbook'],
    typical: '8 – 20 weeks · milestones',
  },
  {
    num: '04',
    title: 'Training & Education',
    description:
      'Expert-led workshops and training programs in blockchain and Web3 technologies.',
    tags: ['Workshops', 'Curriculum'],
    deliverables: ['Curriculum outline', 'Workshop materials', 'Practitioner exercises'],
    typical: '1 – 5 days · on-site or remote',
  },
  {
    num: '05',
    title: 'Cryptography Consulting',
    description:
      'Advanced cryptographic solutions and consulting for blockchain applications.',
    tags: ['ZK', 'MPC', 'Signatures'],
    deliverables: ['Protocol note', 'Proof-of-concept', 'Review memo'],
    typical: '4 – 12 weeks · advisory',
  },
  {
    num: '06',
    title: 'Digital Innovation',
    description:
      'Strategic consulting for digital transformation and blockchain adoption.',
    tags: ['Strategy', 'Due diligence'],
    deliverables: ['Landscape scan', 'Technical due diligence', 'Adoption roadmap'],
    typical: 'Retainer · monthly',
  },
];

function Row({ item, index }: { item: Service; index: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} group border-t border-rule`}
      style={{ ['--reveal-delay' as string]: `${index * 40}ms` }}
    >
      <div className="grid-12 pt-8 md:pt-10">
        <div className="col-span-1 font-mono text-[0.72rem] tracking-mono-wide text-ink-3 pt-1">
          {item.num}
        </div>
        <div className="col-span-3 md:col-span-5">
          <h3 className="font-display text-2xl md:text-[2rem] leading-[1.1] text-ink">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] group-hover:bg-[length:100%_1px] bg-no-repeat bg-left-bottom transition-[background-size] duration-500 text-accent-ink">
              {item.title}
            </span>
          </h3>
        </div>
        <p className="col-span-4 md:col-span-4 md:col-start-7 mt-3 md:mt-1 text-ink-2 leading-relaxed max-w-reading">
          {item.description}
        </p>
        <div className="col-span-4 md:col-span-2 md:col-start-11 mt-3 md:mt-2 flex flex-wrap gap-x-3 gap-y-1 md:justify-end">
          {item.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[0.68rem] tracking-mono-wide uppercase text-ink-3"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid-12 pb-8 md:pb-10 mt-6 md:mt-8">
        <div className="hidden md:block col-span-1" />
        <div className="col-span-4 md:col-span-5">
          <div className="font-mono text-[0.68rem] uppercase tracking-mono-wide text-ink-3 mb-2">
            Deliverables
          </div>
          <ul className="space-y-1">
            {item.deliverables.map((d) => (
              <li
                key={d}
                className="text-[0.92rem] text-ink-2 before:content-['—'] before:mr-2 before:text-ink-3"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-4 md:col-span-4 md:col-start-7 mt-4 md:mt-0">
          <div className="font-mono text-[0.68rem] uppercase tracking-mono-wide text-ink-3 mb-2">
            Typical engagement
          </div>
          <div className="font-mono text-[0.88rem] text-ink-2">{item.typical}</div>
        </div>
      </div>
    </div>
  );
}

export default function Practice() {
  return (
    <section id="practice" className="section-pad max-w-[1440px] mx-auto py-24 md:py-32">
      <div className="grid-12 mb-12 md:mb-16">
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">§ 01 — Practice</div>
        </div>
        <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
          Six disciplines. <span className="italic text-ink-3">One team.</span>
        </h2>
        <p className="col-span-4 md:col-span-6 md:col-start-3 mt-6 text-ink-2 leading-relaxed max-w-reading">
          Each engagement is scoped around a small set of artifacts and a fixed
          cadence. The list below is indicative — most briefs cut across two or
          three of these.
        </p>
      </div>

      <div className="border-b border-rule">
        {PRACTICE.map((item, i) => (
          <Row key={item.num} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
