import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FounderTeaser() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-content">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Two 17-year-olds building the AI tools that businesses actually
              need.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              We started Ealize because we noticed something: every business is
              told they need AI, but the tools are either too expensive,
              over-engineered, or built for someone else. We&apos;re building
              the version we&apos;d want, clean, fast, and priced for the real
              world.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand"
            >
              Read our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-line bg-gradient-to-br from-cream via-white to-sky p-8 shadow-card md:p-10">
              <blockquote className="font-heading text-2xl font-medium leading-snug text-ink md:text-3xl">
                &ldquo;Every business deserves the same tools the big companies
                have. We&apos;re here to make sure they get them.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-ink" />
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Ealize Founders
                  </p>
                  <p className="text-xs text-muted">
                    Co-founders, building since 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
