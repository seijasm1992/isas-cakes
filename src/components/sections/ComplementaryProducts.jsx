import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Container from '../ui/Container';

export default function ComplementaryProducts({ content }) {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveItem(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeItem]);

  return (
    <section id="menu" className="relative bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[var(--color-accent)]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] shadow-[0_10px_30px_rgba(181,82,92,0.08)]">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-balance text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-[1.15rem] border border-black/8 bg-white shadow-[0_20px_70px_rgba(36,24,21,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(36,24,21,0.1)]"
            >
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--color-accent)]"
                aria-label={`Open image for ${item.title}`}
              >
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_30%,_rgba(0,0,0,0.38)_100%)]" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] shadow-sm">
                    {item.accent}
                  </div>
                </div>

                <div className="relative z-10 p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]/75">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]/75">
                      View image
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-snug text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.25rem] bg-[#120f0f] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Close image preview"
              >
                <span aria-hidden="true" className="text-xl leading-none">
                  ×
                </span>
              </button>

              <div className="grid md:grid-cols-[1.25fr_0.75fr]">
                <div className="relative bg-black">
                  <img
                    src={activeItem.image}
                    alt={activeItem.alt}
                    className="max-h-[78vh] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center bg-[linear-gradient(180deg,_#171313,_#120f0f)] p-7 text-white sm:p-10">
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                    {activeItem.accent}
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold leading-tight">
                    {activeItem.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-white/72">
                    {activeItem.description}
                  </p>
                  <p className="mt-8 text-sm uppercase tracking-[0.24em] text-white/45">
                    Click outside or press ESC to close
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
    </section>
  );
}
