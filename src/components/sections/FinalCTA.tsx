import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-white pb-24 pt-8 md:pb-32">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cream/10 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Ready to build something together?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Whether you need a website, an AI tool, or a complete digital
              overhaul, book a quick call and let&apos;s talk.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-pill bg-white px-6 py-3 text-sm font-semibold text-ink shadow-pill transition hover:bg-cream"
              >
                Book a free call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/#products"
                className="inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
