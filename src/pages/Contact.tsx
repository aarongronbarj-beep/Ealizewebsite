import { Mail } from 'lucide-react';

const EMAIL = 'ealizesolutions@gmail.com';

export default function Contact() {
  return (
    <section className="bg-hero-gradient pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-content text-center">
        <span className="eyebrow">Get in touch</span>
        <h1 className="mx-auto mt-6 max-w-3xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
          Let&apos;s talk about your business.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Write to us directly, whether it&apos;s a question, a project, or
          you just want to book a call. We&apos;re humans on the other side
          and reply within 24 hours.
        </p>

        <div className="mx-auto mt-10 inline-flex items-center gap-3 rounded-pill border border-line bg-white px-6 py-4 shadow-pill">
          <Mail className="h-5 w-5 text-brand" />
          <span className="font-mono text-base font-semibold text-ink md:text-lg">
            {EMAIL}
          </span>
        </div>

        <p className="mt-6 text-xs text-muted">
          For a call, include a few times that work for you and your timezone
         , we&apos;ll confirm with a calendar invite.
        </p>
      </div>
    </section>
  );
}
