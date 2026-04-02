import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import Button from '../ui/Button';

/* ------------------------------------------------------------------ */
/*  Motion                                                             */
/* ------------------------------------------------------------------ */

const spring = { type: 'spring', stiffness: 280, damping: 26 };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ...spring, delay } },
});

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: spring },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const imgReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 24 },
  },
};

/* ------------------------------------------------------------------ */
/*  Timeline dot + connector                                           */
/* ------------------------------------------------------------------ */

function TimelineDot({ index, shouldReduceMotion }) {
  return (
    <m.div
      className="flex flex-col items-center"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.5 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ ...spring, delay: 0.1 }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 bg-white text-[0.625rem] font-bold text-stone-500 shadow-sm">
        {String(index + 1).padStart(2, '0')}
      </span>
    </m.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Story card                                                         */
/* ------------------------------------------------------------------ */

function StoryCard({ block, index, shouldReduceMotion }) {
  const isReversed = index % 2 === 1;

  return (
    <div className="relative grid items-start gap-6 md:grid-cols-[auto_1fr]">
      {/* Timeline spine (md+) */}
      <div className="hidden flex-col items-center md:flex">
        <TimelineDot index={index} shouldReduceMotion={shouldReduceMotion} />
        <div className="mt-2 w-px flex-1 bg-gradient-to-b from-stone-200 to-transparent" />
      </div>

      {/* Card */}
      <m.article
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className={`grid gap-4 overflow-hidden rounded-xl border border-stone-200/60 bg-white p-3 sm:p-4 lg:grid-cols-[0.9fr_1fr] lg:items-center ${
          isReversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Image */}
        <m.div
          className="relative overflow-hidden rounded-lg bg-stone-100"
          variants={imgReveal}
        >
          <img
            src={block.image.src}
            alt={block.image.alt}
            className="aspect-[4/5] w-full object-cover sm:aspect-[3/4] lg:aspect-[4/5]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </m.div>

        {/* Text */}
        <m.div className="px-1 py-1 sm:px-2" variants={fadeUp()}>
          <span className="inline-flex rounded-full border border-[var(--color-accent)]/12 bg-stone-50 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {block.eyebrow}
          </span>
          <h2 className="mt-2.5 text-[clamp(1.1rem,2.2vw,1.4rem)] font-semibold leading-snug tracking-[-0.015em] text-stone-900">
            {block.title}
          </h2>
          <p className="mt-2 text-[0.8125rem] leading-6 text-stone-500">
            {block.description}
          </p>
        </m.div>
      </m.article>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AboutStory({ content, identity }) {
  const shouldReduceMotion = useReducedMotion();

  const mp = shouldReduceMotion
    ? { initial: false, animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.3 } };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
        aria-labelledby="about-title"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(181,82,92,0.08),_transparent_26%),radial-gradient(circle_at_80%_18%,_rgba(218,180,136,0.16),_transparent_22%),linear-gradient(180deg,#fffdf9_0%,#fbf6f0_100%)]" />

        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          {/* ---- Header ---- */}
          <m.div
            className="mx-auto max-w-xl text-center"
            {...mp}
            variants={stagger}
          >
            <m.span
              className="inline-flex rounded-full border border-[var(--color-accent)]/12 bg-white/80 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]"
              variants={fadeScale}
            >
              {content.eyebrow}
            </m.span>
            <m.h1
              id="about-title"
              className="mt-3 text-balance text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-tight tracking-[-0.025em] text-stone-900"
              variants={fadeUp(0.05)}
            >
              {content.title}
            </m.h1>
            <m.p
              className="mx-auto mt-2.5 max-w-md text-[0.8125rem] leading-6 text-stone-500"
              variants={fadeUp(0.1)}
            >
              {content.description}
            </m.p>
          </m.div>

          {/* ---- Story blocks ---- */}
          <div className="mt-10 space-y-6 sm:mt-12">
            {content.blocks.map((block, index) => (
              <StoryCard
                key={block.id}
                block={block}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          {/* ---- Bottom CTA card ---- */}
          <m.div
            className="mt-8 sm:mt-10"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <div className="overflow-hidden rounded-xl border border-stone-200/60 bg-white">
              <div className="grid lg:grid-cols-[1fr_1.1fr]">
                {/* Image — compact strip */}
                <m.div className="relative overflow-hidden" variants={imgReveal}>
                  <img
                    src={content.featuredImage.src}
                    alt={content.featuredImage.alt}
                    className="aspect-[16/10] w-full object-cover lg:aspect-auto lg:h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/12 to-transparent" />
                </m.div>

                {/* Text + CTA */}
                <m.div className="flex flex-col justify-center px-4 py-4 sm:px-5" variants={fadeUp()}>
                  <span className="inline-flex w-fit rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {content.bottomBadge}
                  </span>
                  <h2 className="mt-2 text-[clamp(1rem,2vw,1.25rem)] font-semibold leading-snug tracking-[-0.015em] text-stone-900">
                    {content.bottomTitle}
                  </h2>
                  <p className="mt-1.5 max-w-sm text-[0.8125rem] leading-6 text-stone-500">
                    {content.bottomDescription}
                  </p>
                  <div className="mt-3">
                    <Button href={identity.ctaHref}>
                      {identity.ctaLabel}
                    </Button>
                  </div>
                </m.div>
              </div>
            </div>
          </m.div>

          {/* ---- Trust line ---- */}
          <m.p
            className="mt-6 text-center text-[0.6875rem] text-stone-400"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Every cake is handcrafted with care in Miami, FL
          </m.p>
        </div>
      </section>
    </LazyMotion>
  );
}
