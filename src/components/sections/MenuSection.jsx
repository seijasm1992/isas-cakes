import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';

const spring = { type: 'spring', stiffness: 280, damping: 26 };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { ...spring, delay } },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

function MenuItem({ item }) {
  return (
    <div className="group py-2.5 transition-colors hover:bg-stone-50/50">
      <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-stone-900">
        {item.name}
      </h3>
      <p className="mt-0.5 text-[0.8125rem] leading-[1.4] text-stone-500">
        {item.description}
      </p>
    </div>
  );
}

function MenuCategory({ category }) {
  return (
    <m.div 
      className="mb-6 break-inside-avoid overflow-hidden rounded-xl border border-stone-200/60 bg-white p-5 shadow-sm sm:mb-8 sm:p-6"
      variants={fadeUp()}
    >
      <div className="mb-4 text-center sm:text-left">
        <h2 className="text-[1.2rem] font-bold tracking-tight text-stone-900">
          {category.title}
        </h2>
        <p className="mt-1 text-[0.8125rem] leading-snug text-stone-500">
          {category.description}
        </p>
      </div>

      <div className="flex flex-col divide-y divide-stone-100">
        {category.items.map((item, idx) => (
          <MenuItem key={`${category.id}-${idx}`} item={item} />
        ))}
      </div>
    </m.div>
  );
}

export default function MenuSection({ content }) {
  const shouldReduceMotion = useReducedMotion();

  const mp = shouldReduceMotion
    ? { initial: false, animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.15 } };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="menu-section"
        className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
        aria-labelledby="menu-title"
      >
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,_rgba(181,82,92,0.06),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(218,180,136,0.12),_transparent_30%),linear-gradient(180deg,#fffdf9_0%,#fbf6f0_100%)]" />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <m.div
            className="mx-auto max-w-2xl text-center"
            {...mp}
            variants={staggerContainer}
          >
            <m.span
              className="inline-flex rounded-full border border-[var(--color-accent)]/12 bg-white/80 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] shadow-sm"
              variants={fadeUp()}
            >
              {content.header.eyebrow}
            </m.span>
            <m.h1
              id="menu-title"
              className="mt-4 text-balance text-[clamp(1.75rem,5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-stone-900"
              variants={fadeUp()}
            >
              {content.header.title}
            </m.h1>
            <m.p
              className="mx-auto mt-3 max-w-lg text-[0.875rem] leading-6 text-stone-500 sm:text-[0.9375rem]"
              variants={fadeUp()}
            >
              {content.header.description}
            </m.p>
          </m.div>

          {/* Masonry Columns Layout */}
          <m.div 
            className="mt-10 columns-1 gap-6 sm:mt-12 md:columns-2 lg:columns-3 lg:gap-8"
            {...mp}
            variants={staggerContainer}
          >
            {content.categories.map((category) => (
              <MenuCategory 
                key={category.id} 
                category={category} 
              />
            ))}
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}
