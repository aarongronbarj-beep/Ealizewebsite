import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BarChart3,
  Megaphone,
  TrendingUp,
  Code2,
} from 'lucide-react';

function ServiceConnector({ flipped }: { flipped: boolean }) {
  const startX = flipped ? 900 : 300;
  const endX = flipped ? 300 : 900;
  return (
    <div className="hidden md:block" aria-hidden>
      <svg
        viewBox="0 0 1200 80"
        className="mx-auto h-20 w-full"
        fill="none"
      >
        <path
          d={`M ${startX} 4 C ${startX} 40, ${endX} 40, ${endX} 76`}
          stroke="#635BFF"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 7"
          strokeLinecap="round"
        />
        <circle cx={startX} cy="4" r="5" fill="#635BFF" fillOpacity="0.85" />
        <circle cx={startX} cy="4" r="10" fill="#635BFF" fillOpacity="0.15" />
        <circle cx={endX} cy="76" r="5" fill="#635BFF" fillOpacity="0.85" />
        <circle cx={endX} cy="76" r="10" fill="#635BFF" fillOpacity="0.15" />
      </svg>
    </div>
  );
}

type Product = {
  icon: typeof BarChart3;
  name: string;
  tagline: string;
  description: string;
  href: string;
  visualBg: string;
  iconBg: string;
  image?: string;
};

const products: Product[] = [
  {
    icon: BarChart3,
    name: 'Business Intelligence',
    tagline: 'All your data in one place',
    description:
      'A centralized dashboard that brings together sales, marketing, and operations, no more spreadsheet chaos.',
    href: '/products/business-intelligence',
    visualBg: 'from-brand-tint via-white to-brand/10',
    iconBg: 'bg-brand text-white',
    image: '/dashboardpicture.png',
  },
  {
    icon: Megaphone,
    name: 'Ad Creation',
    tagline: 'Ads built for one buyer at a time',
    description:
      'Digital and animated ads designed around your specific customer, targeted copy, sharp visuals, and platform-aware strategy.',
    href: '/products/ad-creation',
    visualBg: 'from-cream via-white to-cream',
    iconBg: 'bg-ink text-white',
    image: '/adcreationpicture.png',
  },
  {
    icon: TrendingUp,
    name: 'Investing App',
    tagline: 'Smarter investing, powered by AI',
    description:
      'Discover stocks, analyze trends, and get AI-driven insights, all in one clean app.',
    href: '/products/investing',
    visualBg: 'from-sky via-white to-sky',
    iconBg: 'bg-brand-dark text-white',
    image: '/investingapp.png',
  },
  {
    icon: Code2,
    name: 'App & Web Development',
    tagline: 'Digital products built to perform',
    description:
      'From concept to launch, we design and build websites and apps for businesses of every size.',
    href: '/products/development',
    visualBg: 'from-emerald-50 via-white to-emerald-100',
    iconBg: 'bg-emerald-600 text-white',
    image: '/appsandwebsites.png',
  },
];

export default function ProductsGrid() {
  return (
    <section id="products" className="bg-white py-24 md:py-32">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we build</span>
          <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Four products. One company.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Every product solves a real problem we&apos;ve seen businesses face.
            Built lean, designed clean, and delivered fast.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-20 md:gap-8">
          {products.map((product, index) => {
            const reverse = index % 2 === 1;
            const isLast = index === products.length - 1;
            return (
              <Fragment key={product.name}>
              <div
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div
                  className={`relative ${
                    reverse ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-line/70 bg-gradient-to-br ${product.visualBg} shadow-[0_30px_60px_-15px_rgba(15,15,15,0.18),0_15px_30px_-10px_rgba(15,15,15,0.1)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_-20px_rgba(15,15,15,0.22),0_20px_40px_-12px_rgba(15,15,15,0.12)]`}
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/40 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/30 blur-3xl" />

                    {product.image ? (
                      <img
                        src={product.image}
                        alt={`${product.name} preview`}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`flex h-24 w-24 items-center justify-center rounded-2xl shadow-hero ${product.iconBg}`}
                        >
                          <product.icon className="h-10 w-10" />
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-5 left-5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-ink/60" />
                      <span className="h-2 w-2 rounded-full bg-ink/30" />
                      <span className="h-2 w-2 rounded-full bg-ink/20" />
                    </div>

                    <div className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                      0{index + 1} / 0{products.length}
                    </div>
                  </div>
                </div>

                <div className={reverse ? 'md:order-1' : 'md:order-2'}>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                    {product.tagline}
                  </span>
                  <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                    {product.name}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                    {product.description}
                  </p>

                  <Link
                    to={product.href}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                  >
                    <span className="border-b border-ink/30 pb-0.5 transition group-hover:border-ink">
                      Learn more
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
              {!isLast && <ServiceConnector flipped={reverse} />}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
