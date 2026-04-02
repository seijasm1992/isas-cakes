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
  return (
    <section id="shop" className="relative bg-[var(--color-ink)] py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%)]" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/78">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-[1.1rem] border border-white/10 bg-white/6 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.author}</h3>
                  <p className="mt-1 text-sm text-white/56">{item.meta}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/62">
                  {item.timeAgo}
                </span>
              </div>

              <div className="mt-5">
                <Stars count={item.rating} />
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-white/76 sm:text-base">
                {item.quote}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]/85">
                  {item.highlight}
                </p>
                {item.reply ? (
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    <span className="font-semibold text-white/78">Owner reply:</span> {item.reply}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
