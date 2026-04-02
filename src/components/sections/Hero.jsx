import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import Button from '../ui/Button';
import { HERO_AUTOPLAY_MS, heroFallback } from '../../lib/uiRules';

export default function Hero({ slides, identity }) {
  const safeSlides = useMemo(() => (slides?.length ? slides : [{ id: 'fallback', ...heroFallback }]), [slides]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState({});

  useEffect(() => {
    if (safeSlides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % safeSlides.length);
    }, HERO_AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [safeSlides.length]);

  const activeSlide = safeSlides[activeIndex];
  const showImage = activeSlide.image && !failedImages[activeSlide.id];

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--color-ink)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_35%)]" />
      <AnimatePresence mode="wait">
        {showImage ? (
          <motion.img
            key={activeSlide.id}
            src={activeSlide.image}
            alt={activeSlide.alt}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0.4, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.25, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onError={() =>
              setFailedImages((current) => ({
                ...current,
                [activeSlide.id]: true,
              }))
            }
          />
        ) : (
          <motion.div
            key={`${activeSlide.id}-fallback`}
            className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(253,186,116,0.4),_rgba(244,114,182,0.28),_rgba(255,255,255,0.08))]"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,7,7,0.38)_0%,_rgba(7,7,7,0.55)_32%,_rgba(7,7,7,0.72)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
            {activeSlide.eyebrow ?? 'Isa’s Cakes'}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {activeSlide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            {activeSlide.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={identity.ctaHref}>{identity.ctaLabel}</Button>
            <Button href="#cakes" variant="ghost">
              Explore Cakes
            </Button>
          </div>

          <div className="mt-10 max-w-md rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:mt-14">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/70">
              Emotional experiences
            </p>
            <p className="mt-3 text-sm leading-7 text-white/82 sm:text-base">
              Emotional experiences in the form of delicious pieces of art.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3 sm:bottom-10">
        {safeSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show hero slide ${index + 1}`}
            aria-pressed={index === activeIndex}
            className={`h-3 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
              index === activeIndex ? 'w-10 bg-white' : 'w-3 bg-white/35 hover:bg-white/55'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
