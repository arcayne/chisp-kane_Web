import { useState, type FormEvent } from 'react';

type FieldProps = {
  id: string;
  label: string;
  num: string;
  type?: 'text' | 'email';
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
};

function Field({ id, label, num, type = 'text', value, onChange, placeholder, required }: FieldProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="flex items-baseline justify-between font-mono text-[0.7rem] uppercase tracking-mono-wide text-ink-3">
        <span>
          <span className="text-accent mr-2">{num}</span>
          {label}
        </span>
        {required && <span aria-hidden>*</span>}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 block w-full bg-transparent border-0 border-b border-rule focus:border-ink focus:ring-0 px-0 py-3 text-ink placeholder:text-ink-3/60 font-sans text-base outline-none transition-colors"
      />
    </label>
  );
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="font-mono text-[0.85rem] text-ink-2 border-t border-b border-rule py-10">
        <div className="eyebrow mb-3">— Received</div>
        Thanks — we'll be in touch shortly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Field
        id="name"
        num="01"
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Your name"
        required
      />
      <Field
        id="email"
        num="02"
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="your@email.com"
        required
      />
      <label htmlFor="message" className="block">
        <span className="flex items-baseline justify-between font-mono text-[0.7rem] uppercase tracking-mono-wide text-ink-3">
          <span>
            <span className="text-accent mr-2">03</span>
            Brief
          </span>
          <span aria-hidden>*</span>
        </span>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          placeholder="A few sentences on what you're working on."
          className="mt-2 block w-full bg-transparent border-0 border-b border-rule focus:border-ink focus:ring-0 px-0 py-3 text-ink placeholder:text-ink-3/60 font-sans text-base resize-none outline-none transition-colors"
        />
      </label>

      <button
        type="submit"
        className="group inline-flex items-baseline gap-3 font-mono text-[0.78rem] tracking-mono-wide uppercase text-ink hover:text-accent transition-colors"
      >
        <span className="relative">
          Send
          <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink group-hover:bg-accent transition-colors" />
        </span>
        <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </button>
    </form>
  );
}
