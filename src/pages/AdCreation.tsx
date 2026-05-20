import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Film,
  Image as ImageIcon,
  MousePointerClick,
  Sparkles,
  Target,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Same media-swap pattern as the Development page: a tagged union lets us
// flip a still image into a looping animation by changing one data entry.
//
//   Image now:       { kind: 'image', src: '/showcase-ad.png',  alt: '...' }
//   Animation later: { kind: 'video', src: '/showcase-ad.mp4',  poster: '/showcase-ad.png' }
// ---------------------------------------------------------------------------

type AdMedia =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster?: string };

function MediaSlot({ media }: { media: AdMedia }) {
  if (media.kind === 'video') {
    return (
      <video
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <img
      src={media.src}
      alt={media.alt}
      className="h-full w-full object-cover"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// A social-feed-style frame so the example feels like a real ad in context.
// ---------------------------------------------------------------------------

function FeedAdFrame({ media }: { media: AdMedia }) {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-hero">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand to-ink" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-ink">Your Brand</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Sponsored · 2h
            </p>
          </div>
          <span className="text-muted">•••</span>
        </div>

        <div className="aspect-square bg-gradient-to-br from-brand-tint via-white to-sky">
          <MediaSlot media={media} />
        </div>

        <div className="flex items-center justify-between border-t border-line bg-surface px-4 py-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
              Limited time
            </p>
            <p className="text-sm font-semibold text-ink">
              See what Ealize can build for you
            </p>
          </div>
          <button className="inline-flex items-center gap-1 rounded-pill bg-ink px-3 py-1.5 text-xs font-semibold text-white">
            Learn more
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Data, flip `kind: 'image'` → `kind: 'video'` here to switch to animation.
// ---------------------------------------------------------------------------

const adExample: { media: AdMedia } = {
  media: {
    kind: 'image',
    src: '/showcase-ad.png',
    alt: 'Example ad designed by Ealize',
  },
};

// ---------------------------------------------------------------------------

const formats = [
  {
    icon: ImageIcon,
    title: 'Digital ads',
    body: 'Static creative for social feeds, search, display networks, and email. Headlines, hooks, and visuals tuned to where the ad actually lands, not generic carousel templates.',
    points: ['Meta, Google, LinkedIn, TikTok feeds', 'Display & banner sets', 'Email and newsletter creative'],
  },
  {
    icon: Film,
    title: 'Animated ads',
    body: 'Motion creative that earns the scroll. Short loops, scroll-stoppers, and longer narrative pieces, built to match the way each platform treats moving content.',
    points: ['Looping social motion', 'Story / Reel / Short formats', 'Product walkthroughs and explainers'],
  },
];

const reasons = [
  {
    icon: Target,
    title: 'Built around your customer',
    body: 'Every ad starts with the person we want to convert, their objection, their context, their reason to click. We design backwards from that.',
  },
  {
    icon: Sparkles,
    title: 'On-brand, not on-trend',
    body: "We don't recycle the same template you've seen on five other accounts this week. Each ad looks like it could only belong to your business.",
  },
  {
    icon: MousePointerClick,
    title: 'Made to convert',
    body: 'Hooks, headlines, and CTAs are written and placed for action, not just impressions. We test, swap, and refine until the numbers move.',
  },
];

export default function AdCreation() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-content text-center">
          <span className="eyebrow">Ad Creation</span>
          <h1 className="mx-auto mt-6 max-w-3xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Ads that look like{' '}
            <span className="relative inline-block whitespace-nowrap text-brand">
              <span className="relative z-10">only your brand</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand/60" />
            </span>{' '}
            could&apos;ve made them.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Digital and animated ads, designed individually for what your
            business is actually selling and the person you&apos;re selling
            it to.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Start an ad project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#products" className="btn-secondary">
              See our other products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <FeedAdFrame media={adExample.media} />
              <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70">
                Example, not a real campaign
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                A single ad, made for one customer
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Every ad we make is built for one specific buyer.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                We don&apos;t mass-produce creative. Each ad we ship is shaped
                around a real audience, a real objection, and a real action
                we want to drive, visual, copy, and call-to-action included.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                That&apos;s how an ad earns the scroll instead of asking for
                it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What we make</span>
            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Digital ads. Animated ads. Always custom.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Whether the format is static or motion, the principle is the
              same: detailed for your business, your audience, and your goal.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
            {formats.map((format) => (
              <div
                key={format.title}
                className="rounded-3xl border border-line bg-white p-8 shadow-card md:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                  <format.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight md:text-3xl">
                  {format.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {format.body}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ink">
                  {format.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How we approach every ad</span>
            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Detailed for the customer&apos;s needs.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Three things we hold true on every single ad, from a one-off
              banner to a full motion campaign.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-3xl border border-line bg-white p-8 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight md:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-0 md:pb-32">
        <div className="container-content">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cream/10 blur-3xl" />

            <div className="relative">
              <h2 className="mx-auto mt-2 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                Have an ad campaign in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Tell us what you&apos;re launching, who it&apos;s for, and
                where it&apos;s running, we&apos;ll come back with concept
                directions and a clear scope.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-pill bg-white px-6 py-3 text-sm font-semibold text-ink shadow-pill transition hover:bg-cream"
                >
                  Start an ad project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
