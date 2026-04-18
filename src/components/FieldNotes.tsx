import { useReveal } from '../hooks/useReveal';

type Note = {
  num: string;
  date: string;
  kind: string;
  title: string;
  excerpt: string;
  readMinutes: string;
};

const NOTES: Note[] = [
  {
    num: '001',
    date: '2026 · 03',
    kind: 'Essay',
    title: 'Writing the brief before the code.',
    excerpt:
      'A short note on why we insist on a scoping memo before a single commit — and what belongs in one.',
    readMinutes: '6 min',
  },
  {
    num: '002',
    date: '2026 · 02',
    kind: 'Field note',
    title: 'Threat models that survive contact with production.',
    excerpt:
      'Most threat models die on the whiteboard. Some patterns for keeping them useful once the system ships.',
    readMinutes: '9 min',
  },
  {
    num: '003',
    date: '2026 · 01',
    kind: 'Review',
    title: 'Reading a Solidity codebase for the first time.',
    excerpt:
      'A repeatable pass we use on every audit — what to load into the head before opening a single contract.',
    readMinutes: '11 min',
  },
  {
    num: '004',
    date: '2025 · 11',
    kind: 'Essay',
    title: 'The case for small teams, written down.',
    excerpt:
      'Why four careful engineers beat twelve hurried ones on the kind of work we take on.',
    readMinutes: '5 min',
  },
];

function NoteRow({ note, i }: { note: Note; i: number }) {
  const { ref, revealed } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} group border-t border-rule`}
      style={{ ['--reveal-delay' as string]: `${i * 40}ms` }}
    >
      <a href="#" className="block py-8 md:py-10">
        <div className="grid-12 items-baseline">
          <div className="col-span-1 font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
            {note.num}
          </div>
          <div className="col-span-3 md:col-span-2 font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
            {note.date}
          </div>
          <div className="hidden md:block md:col-span-1 font-mono text-[0.68rem] uppercase tracking-mono-wide text-ink-3">
            {note.kind}
          </div>
          <h3 className="col-span-4 md:col-span-6 mt-3 md:mt-0 font-display text-xl md:text-[1.65rem] leading-tight text-ink">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] group-hover:bg-[length:100%_1px] bg-no-repeat bg-left-bottom transition-[background-size] duration-500">
              {note.title}
            </span>
          </h3>
          <div className="col-span-4 md:col-span-2 md:col-start-11 mt-2 md:mt-0 md:text-right font-mono text-[0.72rem] tracking-mono-wide text-ink-3">
            {note.readMinutes}
          </div>
        </div>
        <div className="grid-12 mt-4">
          <div className="hidden md:block col-span-4" />
          <p className="col-span-4 md:col-span-6 text-ink-2 leading-relaxed max-w-reading text-[0.95rem]">
            {note.excerpt}
          </p>
        </div>
      </a>
    </article>
  );
}

export default function FieldNotes() {
  return (
    <section
      id="notes"
      className="section-pad max-w-[1440px] mx-auto py-24 md:py-32 border-t border-rule"
    >
      <div className="grid-12 mb-12 md:mb-16">
        <div className="col-span-4 md:col-span-2">
          <div className="eyebrow">§ 05 — Field notes</div>
        </div>
        <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
          Short writing, <span className="italic">from the practice.</span>
        </h2>
        <p className="col-span-4 md:col-span-6 md:col-start-3 mt-6 text-ink-2 leading-relaxed max-w-reading">
          Notes on the work as it happens — essays, reviews, and the occasional
          technical memo. No cadence, no newsletter; published when something
          is worth reading.
        </p>
      </div>

      <div className="border-b border-rule">
        {NOTES.map((note, i) => (
          <NoteRow key={note.num} note={note} i={i} />
        ))}
      </div>

      <div className="mt-8 flex items-baseline justify-between">
        <div className="font-mono text-[0.7rem] uppercase tracking-mono-wide text-ink-3">
          Archive · ██ notes
        </div>
        <a
          href="#"
          className="group font-mono text-[0.74rem] uppercase tracking-mono-wide text-ink hover:text-accent transition-colors"
        >
          Read the archive{' '}
          <span aria-hidden className="ml-2 group-hover:translate-x-0.5 inline-block transition-transform">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
