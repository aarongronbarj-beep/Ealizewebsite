import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brush,
  Code2,
  Layers,
  MessageSquareText,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Showcase media component
// ---------------------------------------------------------------------------
// Each showcase example takes a `media` prop with a tagged union, so a still
// image can later be swapped for a looping animation by changing just the
// data definition below, no JSX changes required.
//
//   Image now:     { kind: 'image',  src: '/showcase-app.png',  alt: '...' }
//   Animation later: { kind: 'video', src: '/showcase-app.mp4', poster: '/showcase-app.png' }
//
// Both render inside the same framed wrapper, so the surrounding layout is
// untouched when you switch.
// ---------------------------------------------------------------------------

type ShowcaseMedia =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster?: string };

function MediaSlot({ media }: { media: ShowcaseMedia }) {
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
        // graceful fallback while the real asset hasn't been added yet
        (e.currentTarget as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Frames, give the media stylized "device" context
// ---------------------------------------------------------------------------

function PhoneFrame({ media }: { media: ShowcaseMedia }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-hero">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-tint via-white to-sky">
          <MediaSlot media={media} />
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({ media }: { media: ShowcaseMedia }) {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-hero">
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF6259]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-4 truncate text-xs text-muted">
            yourbusiness.com
          </span>
        </div>
        <div className="aspect-[16/10] bg-gradient-to-br from-cream via-white to-sky">
          <MediaSlot media={media} />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Data, swap `kind: 'image'` to `kind: 'video'` here to switch to animation
// ---------------------------------------------------------------------------

type Showcase = {
  eyebrow: string;
  title: string;
  description: string;
  frame: 'phone' | 'browser';
  media: ShowcaseMedia;
};

const showcases: Showcase[] = [
  {
    eyebrow: 'App example',
    title: 'Mobile experiences that feel native, not templated.',
    description:
      'Custom flows, real-time data, and an interface shaped around the way your customers actually use your product, not the way a generic builder forces them to.',
    frame: 'phone',
    media: {
      kind: 'image',
      src: '/showcase-app.png',
      alt: 'Example mobile app built by Ealize',
    },
  },
  {
    eyebrow: 'Website example',
    title: 'Websites that convert before they impress.',
    description:
      'Every section is pulled from your real positioning and your real customers. We design what the visitor needs to see, in the order they need to see it.',
    frame: 'browser',
    media: {
      kind: 'image',
      src: '/showcase-website.png',
      alt: 'Example website built by Ealize',
    },
  },
];

// ---------------------------------------------------------------------------
// How we build, value props
// ---------------------------------------------------------------------------

const pillars = [
  {
    icon: MessageSquareText,
    title: 'Contextual',
    body: 'We start with the conversation, not the Figma file. What does the business actually do, who is it for, and what would make a customer pick you over the next tab?',
  },
  {
    icon: Brush,
    title: 'Visual',
    body: "Design that matches the seriousness of your work. Clean, considered, on-brand, never the same template you've seen on five other sites this week.",
  },
  {
    icon: Layers,
    title: 'Detailed',
    body: 'Every interaction is intentional. Loading states, edge cases, copy, micro-animations, the things people feel without noticing are the things we obsess over.',
  },
];

// ---------------------------------------------------------------------------

export default function Development() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-content text-center">
          <span className="eyebrow">App &amp; Web Development</span>
          <h1 className="mx-auto mt-6 max-w-3xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Apps and websites,{' '}
            <span className="relative inline-block whitespace-nowrap text-brand">
              <span className="relative z-10">built for you</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand/60" />
            </span>
            .
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We design and build every project from scratch, shaped around
            your customers, your tone, and the way your business actually
            works. No templates. No copy-paste.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Start a project
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
          <div className="flex flex-col gap-20 md:gap-28">
            {showcases.map((showcase, index) => {
              const reverse = index % 2 === 1;
              return (
                <div
                  key={showcase.title}
                  className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
                >
                  <div
                    className={`relative ${
                      reverse ? 'md:order-2' : 'md:order-1'
                    }`}
                  >
                    {showcase.frame === 'phone' ? (
                      <PhoneFrame media={showcase.media} />
                    ) : (
                      <BrowserFrame media={showcase.media} />
                    )}
                  </div>

                  <div className={reverse ? 'md:order-1' : 'md:order-2'}>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                      {showcase.eyebrow}
                    </span>
                    <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                      {showcase.title}
                    </h2>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                      {showcase.description}
                    </p>
                    <p className="mt-3 max-w-lg font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70">
                      Example, not a real project
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How we build</span>
            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Detailed for the customer. Visual. Contextual.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Three things we never compromise on, no matter the budget or
              timeline.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-line bg-white p-8 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-8 md:pb-32">
        <div className="container-content">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cream/10 blur-3xl" />

            <div className="relative">
              <Code2 className="mx-auto h-8 w-8 text-brand" />
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                Have something in mind? Let&apos;s build it.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Tell us what you need, a landing page, a full app, or
                something nobody&apos;s tried before, and we&apos;ll come
                back with a clear scope.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-pill bg-white px-6 py-3 text-sm font-semibold text-ink shadow-pill transition hover:bg-cream"
                >
                  Start a project
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
