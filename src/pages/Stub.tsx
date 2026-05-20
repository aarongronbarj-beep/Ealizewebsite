import { Link } from 'react-router-dom';

export default function Stub({ title }: { title: string }) {
  return (
    <section className="container-content pt-40 pb-24 text-center">
      <span className="eyebrow">Coming next</span>
      <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
        This page is under construction. The homepage shows the new Ealize
        direction, full product pages land next.
      </p>
      <Link to="/" className="btn-primary mt-9">
        Back to homepage
      </Link>
    </section>
  );
}
