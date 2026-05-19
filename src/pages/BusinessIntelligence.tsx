import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

function Sparkline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      className={`h-6 w-full ${className}`}
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#635BFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#635BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 20 L12 18 L24 19 L36 14 L48 16 L60 10 L72 12 L84 6 L100 4 L100 24 L0 24 Z"
        fill="url(#spark-fill)"
      />
      <path
        d="M0 20 L12 18 L24 19 L36 14 L48 16 L60 10 L72 12 L84 6 L100 4"
        fill="none"
        stroke="#635BFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FRAME_COUNT = 121;
const framePath = (i: number) =>
  `/frames-hero/frame_${String(i).padStart(4, '0')}.jpg`;
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Plug,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Mail,
  Megaphone,
  BarChart3,
  RefreshCw,
} from 'lucide-react';

const integrations = [
  {
    name: 'Gmail',
    shortLabel: 'G',
    color: '#EA4335',
    textOnColor: 'white' as const,
    status: 'Live',
    pulls: 'Inbox triage, AI-extracted deadlines, action items, and vendor mentions — synced automatically.',
  },
  {
    name: 'Stripe',
    shortLabel: 'S',
    color: '#635BFF',
    textOnColor: 'white' as const,
    status: 'Live',
    pulls: 'Payments, subscriptions, refunds and disputes — synced in real time.',
  },
  {
    name: 'HubSpot',
    shortLabel: 'H',
    color: '#FF7A59',
    textOnColor: 'white' as const,
    status: 'Live',
    pulls: 'Contacts, open deals, pipeline stages, and customer segments — always current.',
  },
  {
    name: 'QuickBooks',
    shortLabel: 'Qb',
    color: '#2CA01C',
    textOnColor: 'white' as const,
    status: 'Live',
    pulls: 'Invoices, expenses, and tax-categorized line items pulled into your ledger.',
  },
  {
    name: 'Google Ads',
    shortLabel: 'GA',
    color: '#4285F4',
    textOnColor: 'white' as const,
    status: 'Soon',
    pulls: 'Ad spend, conversions, ROAS, and keyword performance — all in one place.',
  },
  {
    name: 'Meta Ads',
    shortLabel: 'M',
    color: '#0866FF',
    textOnColor: 'white' as const,
    status: 'Soon',
    pulls: 'Facebook and Instagram metrics, audience insights, and cost-per-result tracking.',
  },
];

const modules = [
  {
    icon: TrendingUp,
    eyebrow: 'Revenue',
    title: 'Know your real numbers.',
    body: 'MRR, ARR, and churn rate tracked live from Stripe. Revenue broken down by product, customer segment, and stream — with sparklines on every metric so you see the trend at a glance.',
    stats: [
      { label: 'MRR', value: '$28,077', delta: '+3.2%', up: true },
      { label: 'ARR', value: '$336,924', delta: '+15.4%', up: true },
      { label: 'Churn Rate', value: '2.1%', delta: '−14.3%', up: true },
    ],
  },
  {
    icon: Users,
    eyebrow: 'Customers',
    title: 'Your full pipeline, one screen.',
    body: 'HubSpot contacts and deals pulled into a live kanban — Lead, Qualified, Proposal, Negotiation, Closed Won. See total pipeline value, days in stage, and which accounts are at risk.',
    stats: [
      { label: 'Contacts', value: '614', delta: '+7.4%', up: true },
      { label: 'Open Deals', value: '35', delta: '+12.9%', up: true },
      { label: 'Pipeline', value: '$326,500', delta: '+9.1%', up: true },
    ],
  },
  {
    icon: Mail,
    eyebrow: 'AI Inbox',
    title: 'Your inbox, already triaged.',
    body: 'Gmail syncs every few minutes. Ealize reads each message and extracts deadlines, action items, and vendor mentions — so your most important emails are never buried.',
    bullets: [
      'Deadlines pulled from email bodies, with one-click calendar add',
      'Action items surfaced as checkboxes — mark done without leaving Ealize',
      'Categories: Finance, Legal, Urgent, Deadlines, Customer',
    ],
  },
  {
    icon: Megaphone,
    eyebrow: 'Marketing',
    title: 'Ad spend meets revenue.',
    body: 'Google Ads and Meta Ads land soon. When they do, you will see spend, conversions, ROAS, and cost-per-result alongside your Stripe revenue — so attribution is never a guess.',
    comingSoon: true,
  },
];

const trustPoints = [
  {
    icon: Zap,
    title: '2-minute setup',
    body: 'Connect any source in a couple of clicks. No engineering required.',
  },
  {
    icon: Lock,
    title: 'Read-only by default',
    body: 'Ealize never moves money or modifies your records. We only ever read.',
  },
  {
    icon: RefreshCw,
    title: 'Syncs every few minutes',
    body: 'Data refreshes automatically in the background. Your dashboard is always current.',
  },
  {
    icon: CheckCircle2,
    title: 'Encrypted end-to-end',
    body: 'Tokens are scoped, rotated, and encrypted at rest. SOC 2 in progress.',
  },
];

function ModuleShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Preload all frames once
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      imgs.push(img);
    }
    framesRef.current = imgs;

    // Wait for first frame, draw it
    imgs[0].onload = () => drawFrame(0);
  }, []);

  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[idx];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
    }

    // cover-fit
    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const dx = (canvas.width - drawW) / 2;
    const dy = (canvas.height - drawH) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, dx, dy, drawW, drawH);
    currentFrameRef.current = idx;
  };

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    // Map first 82% of scroll progress to full frame range, rest is card reveal
    const scrubProgress = Math.min(1, p / 0.82);
    const target = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(scrubProgress * (FRAME_COUNT - 1)))
    );
    if (target !== currentFrameRef.current) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(target));
    }
    if (p > 0.82 && !cardsVisible) setCardsVisible(true);
    if (p < 0.78 && cardsVisible) setCardsVisible(false);
  });

  // Redraw on resize so canvas stays crisp
  useEffect(() => {
    const onResize = () => {
      if (currentFrameRef.current >= 0) drawFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const canvasOpacity = useTransform(scrollYProgress, [0.78, 0.9], [1, 0]);

  const cardsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const cardItem = {
    hidden: { opacity: 0, y: 20, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: '280vh' }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-content w-full">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-24">
            {/* Left: headline */}
            <div>
              <span className="eyebrow">
                <BarChart3 className="h-3.5 w-3.5" />
                What's inside
              </span>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                Four views. Everything covered.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg xl:text-xl">
                Each module pulls from a dedicated integration and stays in sync
                automatically. Scroll to see them assemble.
              </p>
            </div>

            {/* Right: video → cards */}
            <div className="relative mx-auto aspect-square w-full max-w-[640px] xl:max-w-[760px] 2xl:max-w-[860px]">
              <motion.canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full"
                style={{
                  opacity: canvasOpacity,
                  WebkitMaskImage:
                    'radial-gradient(ellipse at center, black 55%, transparent 92%)',
                  maskImage:
                    'radial-gradient(ellipse at center, black 55%, transparent 92%)',
                }}
              />
              <motion.div
                variants={cardsContainer}
                initial="hidden"
                animate={cardsVisible ? 'visible' : 'hidden'}
                className="absolute inset-0 grid grid-cols-2 gap-3 xl:gap-4"
              >
                {modules.map((mod) => (
                  <motion.div
                    key={mod.eyebrow}
                    variants={cardItem}
                    className="relative flex flex-col rounded-2xl border border-line bg-surface p-4 shadow-card xl:p-5"
                  >
                    {mod.comingSoon && (
                      <span className="absolute right-3 top-3 rounded-full bg-amber-100 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-amber-700">
                        Soon
                      </span>
                    )}
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                      <mod.icon className="h-4 w-4" />
                    </span>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-brand">
                      {mod.eyebrow}
                    </p>
                    <h3 className="mt-1 font-heading text-sm font-bold leading-tight tracking-tight text-ink xl:text-base">
                      {mod.title}
                    </h3>

                    {mod.stats && (
                      <>
                        <div className="mt-3 grid grid-cols-3 gap-1.5">
                          {mod.stats.map((s) => (
                            <div
                              key={s.label}
                              className="min-w-0 rounded-lg border border-line bg-white px-2 py-1.5"
                            >
                              <p className="truncate font-mono text-[8px] uppercase tracking-widest text-muted">
                                {s.label}
                              </p>
                              <p className="mt-0.5 truncate font-heading text-[11px] font-bold text-ink xl:text-xs">
                                {s.value}
                              </p>
                              <p
                                className={`mt-0.5 text-[9px] font-medium ${
                                  s.up ? 'text-emerald-600' : 'text-red-500'
                                }`}
                              >
                                {s.delta}
                              </p>
                            </div>
                          ))}
                        </div>
                        <Sparkline className="mt-3" />
                      </>
                    )}

                    {mod.bullets && (
                      <ul className="mt-3 space-y-1.5">
                        {mod.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-1.5 text-[11px] leading-snug text-muted xl:text-xs"
                          >
                            <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
                            <span className="line-clamp-2">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {mod.comingSoon && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {['Google Ads', 'Meta Ads', 'ROAS', 'CPR'].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-line bg-white px-2 py-0.5 font-mono text-[9px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessIntelligence() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 pb-14 md:pt-32 md:pb-20 xl:pt-40 xl:pb-28 2xl:pt-48 2xl:pb-36">
        <div className="container-content">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-10 lg:gap-16 xl:grid-cols-[1fr_1fr] xl:gap-20 2xl:gap-28">
            <div>
              <span className="eyebrow">01 · Product</span>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] 2xl:text-[88px]">
                Business{' '}
                <span className="relative inline-block whitespace-nowrap text-brand">
                  <span className="relative z-10">Intelligence</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand/60" />
                </span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted sm:mt-8 md:text-lg xl:text-xl xl:leading-relaxed 2xl:text-2xl">
                Revenue, customers, inbox, and marketing — one dashboard, always in sync.
                Connect Gmail, Stripe, and HubSpot in minutes and stop switching tabs to understand your business.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                <Link to="/contact" className="btn-primary xl:px-8 xl:py-4 xl:text-base">
                  Book a demo
                  <ArrowRight className="h-4 w-4 xl:h-5 xl:w-5" />
                </Link>
                <a href="#integrations" className="btn-secondary xl:px-8 xl:py-4 xl:text-base">
                  See connected sources
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center md:-mt-10 lg:-mt-16 xl:-mt-20">
              <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-cream/80 blur-3xl xl:h-72 xl:w-72" />
              <div className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-sky/80 blur-3xl xl:h-80 xl:w-80" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,91,255,0.08),_transparent_60%)]" />
              <video
                src="/Animationseedance.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="relative z-10 w-full max-w-[480px] rounded-2xl drop-shadow-[0_30px_60px_rgba(15,15,15,0.18)] md:max-w-full xl:rounded-3xl xl:scale-110 2xl:scale-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Module showcase — scroll-scrubbed video, then cards pop in */}
      <ModuleShowcase />

      {/* Integrations */}
      <section id="integrations" className="bg-surface py-20 md:py-28 xl:py-36 2xl:py-44">
        <div className="container-content">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24 2xl:gap-32">
            {/* Left */}
            <div className="flex-1">
              <span className="eyebrow">
                <Plug className="h-3.5 w-3.5" />
                Connected sources
              </span>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
                All your tools, one view.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg xl:text-xl">
                Plug in once. Ealize handles the rest — pulling, normalizing and
                reconciling your data every few minutes.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:gap-4">
                {integrations.map((integration) => (
                  <article
                    key={integration.name}
                    className="group relative overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-hero xl:p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-heading text-sm font-bold shadow-sm xl:h-12 xl:w-12 xl:text-base"
                        style={{
                          backgroundColor: integration.color,
                          color: integration.textOnColor === 'white' ? '#FFFFFF' : '#0F0F0F',
                        }}
                      >
                        {integration.shortLabel}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-base font-bold tracking-tight text-ink xl:text-lg">
                          {integration.name}
                        </h3>
                        {integration.status === 'Live' ? (
                          <span className="mt-0.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-600">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Live
                          </span>
                        ) : (
                          <span className="mt-0.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-amber-600">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                            Coming soon
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted xl:text-sm">
                      {integration.pulls}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-6 text-sm text-muted xl:mt-8 xl:text-base">
                More sources land monthly. Need something specific?{' '}
                <Link to="/contact" className="font-semibold text-ink underline-offset-4 hover:underline">
                  Tell us
                </Link>
                .
              </p>
            </div>

            {/* Right: dashboard screenshot */}
            <div className="relative flex flex-1 items-center justify-center">
              <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-cream/80 blur-3xl xl:h-72 xl:w-72" />
              <div className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-sky/80 blur-3xl xl:h-80 xl:w-80" />
              <img
                src="/latest-dashboard.png"
                alt="Ealize integration dashboard"
                className="relative z-10 w-full rounded-2xl drop-shadow-[0_30px_60px_rgba(15,15,15,0.18)] xl:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-white py-20 md:py-24 xl:py-32 2xl:py-40">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center xl:max-w-3xl">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              How sync works
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
              Set it up once. Forget it forever.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 md:grid-cols-4 xl:gap-6 2xl:gap-8">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-line bg-surface p-6 xl:p-8 2xl:p-10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm xl:h-12 xl:w-12">
                  <point.icon className="h-5 w-5 xl:h-6 xl:w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-ink xl:text-xl">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted xl:text-base">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient py-16 md:py-20 xl:py-28 2xl:py-36">
        <div className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl xl:max-w-4xl xl:text-6xl 2xl:text-7xl">
            Ready to see your real numbers?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg xl:max-w-2xl xl:text-xl 2xl:text-2xl">
            Book a 20-minute call. We&apos;ll connect a sandbox to your stack
            and show you what your data looks like, unified.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center xl:mt-10 xl:gap-4">
            <Link to="/contact" className="btn-primary w-full sm:w-auto xl:px-8 xl:py-4 xl:text-base">
              Book a free call
              <ArrowRight className="h-4 w-4 xl:h-5 xl:w-5" />
            </Link>
            <Link to="/#products" className="btn-secondary w-full sm:w-auto xl:px-8 xl:py-4 xl:text-base">
              Browse all products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
