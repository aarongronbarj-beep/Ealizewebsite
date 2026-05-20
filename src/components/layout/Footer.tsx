import { Link } from 'react-router-dom';

const productLinks = [
  { label: 'Business Intelligence', href: '/products/business-intelligence' },
  { label: 'Ad Creation', href: '/products/ad-creation' },
  { label: 'Investing App', href: '/products/investing' },
  { label: 'Development', href: '/products/development' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-block h-7 w-7 rounded-full bg-gradient-to-br from-brand to-ink" />
              <span className="font-heading text-lg font-bold tracking-tight">
                Ealize
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              AI optimization for businesses that want to grow, built by a new
              generation of founders.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Products
            </h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ink hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ink hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              <li>
                <a
                  href="mailto:ealizesolutions@gmail.com"
                  className="hover:text-brand"
                >
                  ealizesolutions@gmail.com
                </a>
              </li>
              <li className="text-muted">We reply within 24h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Ealize. All rights reserved. · Business ID 3622271-3</p>
          <p>Built by 17-year-olds. Trusted by real businesses.</p>
        </div>
      </div>
    </footer>
  );
}
