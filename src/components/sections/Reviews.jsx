import Container from '../ui/Container';

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1 text-[0.95rem] text-[var(--color-accent)]">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews({ content }) {
  const featuredItems = content.items.slice(0, 3);
  const trimQuote = (quote) => (quote.length > 180 ? `${quote.slice(0, 180).trimEnd()}...` : quote);

  return (
    <section id="shop" className="relative bg-[var(--color-ink)] py-12 text-white sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_32%)]" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/78">
            {content.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-balance sm:text-[2rem] lg:text-[2.2rem]">
            {content.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/68 sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {featuredItems.map((item) => (
            <article
              key={item.id}
              className="flex h-full min-h-[220px] flex-col rounded-xl border border-white/12 bg-white/8 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.16)] backdrop-blur-sm"
            >
              <div>
                <h3 className="text-sm font-semibold text-white">{item.author}</h3>
                <p className="mt-1 text-[11px] text-white/56">{item.meta}</p>
              </div>

              <div className="mt-3">
                <Stars count={item.rating} />
              </div>

              <p className="mt-3 flex-1 text-sm leading-6 text-white/72">
                {trimQuote(item.quote)}
              </p>

              <div className="mt-4 border-t border-white/10 pt-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]/90">
                  {item.highlight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
