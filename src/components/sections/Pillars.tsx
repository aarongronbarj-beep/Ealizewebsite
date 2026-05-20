import type React from 'react';
import { ArrowRight, ArrowUpRight, Banknote, Eye, Radar } from 'lucide-react';

type PillarKey = 'revenue' | 'forecast' | 'market';

const pillars: {
  key: PillarKey;
  icon: typeof Banknote;
  eyebrow: string;
  title: string;
  body: string;
}[] = [
  {
    key: 'revenue',
    icon: Banknote,
    eyebrow: 'Revenue clarity',
    title: 'Messy revenue flows (fixed)',
    body:
      'Stripe, invoicing, refunds, subscriptions, all stitched into one clean view. No more reconciling spreadsheets at the end of the month or guessing where the gap came from. See exactly what came in, what churned, and what is recurring next.',
  },
  {
    key: 'forecast',
    icon: Eye,
    eyebrow: 'Forward visibility',
    title: 'Run your business with a clear vision of the future',
    body:
      'Forecasts that actually use your data, not generic templates. Ealize projects cash flow, customer growth, and pipeline outcomes weeks ahead, so the decision you make today is already informed by the consequences you would have seen next month.',
  },
  {
    key: 'market',
    icon: Radar,
    eyebrow: 'Market intelligence',
    title: 'Predict your and your competitors’ market openings',
    body:
      'Track where demand is moving, where competitors are pulling back, and where a window is about to open. Ealize watches the signals your team would never have time to read, and surfaces the ones you can act on first.',
  },
];

function RevenueBefore() {
  return (
    <div className="relative h-full min-h-[260px]">
      <div className="absolute left-6 top-6 -rotate-3 rounded-lg border border-line bg-white p-3 shadow-sm">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted/70">
          stripe.csv
        </div>
        <div className="mt-2 h-1.5 w-20 rounded bg-line" />
        <div className="mt-1.5 h-1.5 w-14 rounded bg-line/70" />
      </div>
      <div className="absolute right-7 top-12 rotate-2 rounded-lg border border-line bg-white p-3 shadow-sm">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted/70">
          invoices
        </div>
        <div className="mt-2 h-1.5 w-16 rounded bg-line" />
        <div className="mt-1.5 h-1.5 w-20 rounded bg-line/70" />
      </div>
      <div className="absolute bottom-10 left-10 rotate-3 rounded-lg border border-line bg-white p-3 shadow-sm">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted/70">
          refunds
        </div>
        <div className="mt-2 h-1.5 w-12 rounded bg-line" />
      </div>
      <div className="absolute bottom-7 right-8 -rotate-2 rounded-lg border border-line bg-white p-3 shadow-sm">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted/70">
          subs.xlsx
        </div>
        <div className="mt-2 h-1.5 w-16 rounded bg-line" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="font-heading text-6xl font-bold text-muted/25">?</div>
      </div>
    </div>
  );
}

function RevenueAfter() {
  return (
    <div className="flex h-full min-h-[260px] flex-col gap-3 p-1">
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
          Monthly recurring
        </div>
        <div className="mt-1 font-heading text-2xl font-bold text-ink md:text-3xl">
          $24,580
        </div>
        <div className="mt-1 text-xs text-muted">+12% vs last month</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Churn
          </div>
          <div className="mt-1 font-heading text-lg font-bold text-ink">
            2.1%
          </div>
        </div>
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Net new
          </div>
          <div className="mt-1 font-heading text-lg font-bold text-ink">
            +$3.2k
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Sources
          </span>
          <span className="font-mono text-[10px] text-brand">All synced ✓</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {['Stripe', 'Invoices', 'Subs', 'Refunds'].map((s) => (
            <span
              key={s}
              className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium text-brand"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ForecastBefore() {
  return (
    <div className="relative h-full min-h-[260px]">
      <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-widest text-muted/70">
        last 12 weeks
      </div>
      <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest text-muted/70">
        ?
      </div>
      <svg
        viewBox="0 0 200 80"
        className="absolute inset-x-6 bottom-6 h-32 w-[calc(100%-3rem)]"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="78" x2="200" y2="78" stroke="#E5E7EB" />
        <polyline
          points="0,60 20,55 40,58 60,40 80,45 100,32 120,38"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2"
        />
      </svg>
      <div className="pointer-events-none absolute bottom-6 right-6 h-32 w-1/2 bg-gradient-to-l from-surface to-transparent" />
      <div className="absolute right-12 top-1/2 -translate-y-1/2 font-heading text-5xl font-bold text-muted/30">
        ?
      </div>
    </div>
  );
}

function ForecastAfter() {
  return (
    <div className="relative h-full min-h-[260px]">
      <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-widest text-muted">
        next 8 weeks
      </div>
      <div className="absolute right-6 top-6 rounded-full bg-brand/15 px-2.5 py-1 font-mono text-[10px] font-medium text-brand">
        +14% projected
      </div>
      <svg
        viewBox="0 0 200 80"
        className="absolute inset-x-6 bottom-6 h-32 w-[calc(100%-3rem)]"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="78" x2="200" y2="78" stroke="#E5E7EB" />
        <line
          x1="120"
          y1="0"
          x2="120"
          y2="78"
          stroke="#E5E7EB"
          strokeDasharray="2 3"
        />
        <polyline
          points="0,60 20,55 40,58 60,40 80,45 100,32 120,38"
          fill="none"
          stroke="#635BFF"
          strokeWidth="2.5"
        />
        <polyline
          points="120,38 140,28 160,22 180,16 200,10"
          fill="none"
          stroke="#635BFF"
          strokeWidth="2.5"
          strokeDasharray="5 4"
        />
        <circle cx="120" cy="38" r="3" fill="#635BFF" />
        <circle cx="200" cy="10" r="4" fill="#635BFF" />
      </svg>
    </div>
  );
}

function MarketBefore() {
  return (
    <div className="flex h-full min-h-[260px] flex-col p-1">
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg border border-line bg-white p-3"
          >
            <div>
              <div className="h-1.5 w-12 rounded bg-line" />
              <div className="mt-1.5 h-1 w-8 rounded bg-line/60" />
            </div>
            <div className="flex items-center justify-between">
              <div className="h-1.5 w-6 rounded bg-line" />
              <div className="h-1.5 w-1.5 rounded-full bg-line" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted/70">
        6 competitors · no patterns detected
      </div>
    </div>
  );
}

function MarketAfter() {
  return (
    <div className="flex h-full min-h-[260px] flex-col p-1">
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const hot = i === 2;
          return (
            <div
              key={i}
              className={`relative flex flex-col justify-between rounded-lg border p-3 ${
                hot
                  ? 'border-brand bg-brand/5 shadow-[0_8px_24px_-12px_rgba(99,91,255,0.5)]'
                  : 'border-line bg-white'
              }`}
            >
              <div>
                <div
                  className={`h-1.5 w-12 rounded ${
                    hot ? 'bg-brand/70' : 'bg-line'
                  }`}
                />
                <div
                  className={`mt-1.5 h-1 w-8 rounded ${
                    hot ? 'bg-brand/40' : 'bg-line/60'
                  }`}
                />
              </div>
              <div className="flex items-center justify-between">
                <div
                  className={`h-1.5 w-6 rounded ${
                    hot ? 'bg-brand' : 'bg-line'
                  }`}
                />
                {hot ? (
                  <ArrowUpRight className="h-3 w-3 text-brand" />
                ) : (
                  <div className="h-1.5 w-1.5 rounded-full bg-line" />
                )}
              </div>
              {hot && (
                <span className="absolute -right-1.5 -top-1.5 rounded-full bg-brand px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-white">
                  opening
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-brand">
        Signal detected · act before week 38
      </div>
    </div>
  );
}

const mocks: Record<PillarKey, { Before: () => React.ReactNode; After: () => React.ReactNode }> = {
  revenue: { Before: RevenueBefore, After: RevenueAfter },
  forecast: { Before: ForecastBefore, After: ForecastAfter },
  market: { Before: MarketBefore, After: MarketAfter },
};

export default function Pillars() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What Ealize fixes</span>
          <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Three things every growing business gets wrong.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            And the three things Ealize quietly handles for you in the
            background.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-10 md:gap-14">
          {pillars.map((pillar, index) => {
            const { Before, After } = mocks[pillar.key];
            return (
              <article
                key={pillar.key}
                className="rounded-3xl border border-line bg-white p-6 shadow-card md:p-10 lg:p-12"
              >
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    0{index + 1} / 03
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <pillar.icon className="h-4 w-4 text-brand" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                      {pillar.eyebrow}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[42px]">
                  {pillar.title}
                </h3>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                  {pillar.body}
                </p>

                <div className="mt-10 grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
                  <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-5">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-muted shadow-sm">
                      Without Ealize
                    </span>
                    <div className="mt-8">
                      <Before />
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_20px_-6px_rgba(99,91,255,0.6)]">
                      <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-tint via-white to-brand/5 p-5">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-white shadow-sm">
                      With Ealize
                    </span>
                    <div className="mt-8">
                      <After />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
