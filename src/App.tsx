import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Practice from './components/Services';
import Method from './components/Method';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <Practice />
        <Method />
        <SelectedWork />
        <About />

        <section
          id="contact"
          className="section-pad max-w-[1440px] mx-auto py-24 md:py-32 border-t border-rule"
        >
          <div className="grid-12">
            <div className="col-span-4 md:col-span-2">
              <div className="eyebrow">§ 05 — Contact</div>
            </div>
            <h2 className="col-span-4 md:col-span-9 md:col-start-3 font-display font-normal text-ink text-3xl md:text-5xl leading-[1.05] tracking-display-tight">
              Start a <span className="italic">conversation.</span>
            </h2>
            <p className="col-span-4 md:col-span-5 md:col-start-3 mt-6 text-ink-2 leading-relaxed max-w-reading">
              Tell us a little about the problem you're working on. We read
              every note and reply within two working days.
            </p>

            <div className="col-span-4 md:col-span-6 md:col-start-3 mt-12 md:mt-16">
              <ContactForm />
            </div>

            <aside className="col-span-4 md:col-span-3 md:col-start-10 mt-12 md:mt-16">
              <div className="border-t border-rule pt-6 space-y-6 font-mono text-[0.75rem] tracking-mono-wide">
                <div>
                  <div className="text-ink-3 uppercase">Direct</div>
                  <a
                    href="mailto:hello@chispkane.com"
                    className="mt-1 block text-ink-2 hover:text-accent transition-colors"
                  >
                    hello@chispkane.com
                  </a>
                </div>
                <div>
                  <div className="text-ink-3 uppercase">Hours</div>
                  <div className="mt-1 text-ink-2">Mon — Fri · 09:00 CET</div>
                </div>
                <div>
                  <div className="text-ink-3 uppercase">Office</div>
                  <div className="mt-1 text-ink-2 italic">
                    <span className="text-ink-3">[ TODO — address ]</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
