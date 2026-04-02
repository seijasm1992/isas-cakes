import Container from '../ui/Container';

export default function TopSkills({ content }) {
  return (
    <section id="cakes" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(181,82,92,0.08),_transparent_28%)]" />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-background)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {content.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-balance text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
              {content.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.items.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[1.1rem] border border-black/7 bg-[var(--color-background)] shadow-[0_18px_60px_rgba(36,24,21,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(36,24,21,0.1)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.06)_0%,_rgba(0,0,0,0.5)_100%)]" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {item.stat}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold leading-snug text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
