import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';

const blockSpring = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 0.9,
};

function StoryBlock({ block, index, shouldReduceMotion }) {
  const isReversed = index % 2 === 1;

  return (
    <m.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={blockSpring}
      className={`grid gap-6 rounded-[2rem] border border-white/60 bg-white/72 p-4 shadow-[0_24px_80px_rgba(36,24,21,0.08)] backdrop-blur-xl md:gap-8 md:p-6 lg:grid-cols-2 lg:items-center lg:p-8 ${
        isReversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="relative overflow-hidden rounded-[1.5rem] border border-black/5 bg-[#f3e7dc] shadow-[0_18px_40px_rgba(36,24,21,0.08)]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(36,24,21,0.2))]" />
        <img
          src={block.image.src}
          alt={block.image.alt}
          className="aspect-[4/5] h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="px-2 py-2 md:px-4">
        <span className="inline-flex rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-background)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
          {block.eyebrow}
        </span>
        <h3 className="mt-5 text-[clamp(1.85rem,3vw,3.25rem)] font-semibold leading-[1.04] text-[var(--color-ink)]">
          {block.title}
        </h3>
        <p className="mt-5 max-w-xl text-[1.02rem] leading-8 text-[var(--color-muted)] sm:text-lg">
          {block.description}
        </p>
      </div>
    </m.article>
  );
}

export default function AboutStory({ content, identity }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32"
        aria-labelledby="about-title"
      >
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(181,82,92,0.12),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(218,180,136,0.24),_transparent_24%),linear-gradient(180deg,#fffdf9_0%,#fbf6f0_48%,#f7efe7_100%)]" />
        <div className="absolute inset-x-0 top-24 -z-10 h-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.85),_transparent_70%)] blur-3xl" />

        <Container className="relative">
          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={blockSpring}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-[var(--color-accent)]/15 bg-white/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] shadow-[0_10px_30px_rgba(36,24,21,0.04)]">
              {content.eyebrow}
            </span>
            <h2
              id="about-title"
              className="mt-6 text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)]"
            >
              {content.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-8 text-[var(--color-muted)] sm:text-lg">
              {content.description}
            </p>
          </m.div>

          <div className="relative mt-14 space-y-8 md:mt-16 lg:mt-20 lg:space-y-10">
            {content.blocks.map((block, index) => (
              <StoryBlock
                key={block.id}
                block={block}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={blockSpring}
            className="mx-auto mt-12 max-w-4xl md:mt-16"
          >
            <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,248,242,0.84))] p-4 shadow-[0_28px_100px_rgba(36,24,21,0.1)] backdrop-blur-xl md:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-8">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-black/5 bg-[#f6efe8]">
                <img
                  src={content.featuredImage.src}
                  alt={content.featuredImage.alt}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(36,24,21,0.24))]" />
              </div>

              <div className="flex flex-col items-start justify-center px-2 py-2 md:px-3">
                <span className="inline-flex rounded-full border border-black/8 bg-[var(--color-background)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {content.bottomBadge}
                </span>
                <h3 className="mt-5 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1.04] text-[var(--color-ink)]">
                  {content.bottomTitle}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  {content.bottomDescription}
                </p>
                <div className="mt-7 flex w-full justify-center lg:justify-start">
                  <Button
                    href={identity.ctaHref}
                    className="min-w-[13rem] bg-[linear-gradient(135deg,#c96772_0%,#b5525c_52%,#8f3f47_100%)] px-7 py-3.5 shadow-[0_18px_40px_rgba(181,82,92,0.28)] hover:scale-[1.02] hover:bg-[linear-gradient(135deg,#cf6f79_0%,#bd5a65_52%,#964049_100%)]"
                  >
                    {identity.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>
          </m.div>
        </Container>
      </section>
    </LazyMotion>
  );
}
