import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import NavLink from '../ui/NavLink';

const shellSpring = {
  type: 'spring',
  stiffness: 260,
  damping: 30,
  mass: 0.85,
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -12,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      ...shellSpring,
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, y: -8 },
  open: {
    opacity: 1,
    y: 0,
    transition: shellSpring,
  },
};

export default function Navbar({ items, identity }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [activeHash, setActiveHash] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const mobileMotionProps = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: false,
        animate: 'open',
        exit: 'closed',
        transition: { duration: 0 },
      };
    }

    return {
      initial: 'closed',
      animate: 'open',
      exit: 'closed',
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    const syncLocation = () => {
      setActivePath(window.location.pathname || '/');
      setActiveHash(window.location.hash || '');
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    syncLocation();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', syncLocation);
    window.addEventListener('popstate', syncLocation);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', syncLocation);
      window.removeEventListener('popstate', syncLocation);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isHomePage = activePath === '/';
  const isTransparent = isHomePage && !isScrolled;
  const useLightNavLinks = isHomePage;
  const isActiveLink = (itemHref) =>
    activePath === itemHref || (itemHref.startsWith('#') && isHomePage && activeHash === itemHref);

  const headerMotion = shouldReduceMotion
    ? {}
    : {
      initial: false,
      animate: {
        backgroundColor: isTransparent ? 'rgba(255,250,245,0)' : 'rgba(255,250,245,0.62)',
        boxShadow: isTransparent ? '0 0 0 rgba(0,0,0,0)' : '0 14px 34px rgba(25,18,16,0.10)',
        borderColor: isTransparent ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.34)',
      },
      transition: shellSpring,
    };

  const getLinkTone = (itemHref) => {
    if (isActiveLink(itemHref)) {
      return useLightNavLinks
        ? '!text-[#fff8f0] drop-shadow-[0_4px_18px_rgba(0,0,0,0.34)]'
        : '!text-[var(--color-ink)]';
    }

    return useLightNavLinks
      ? '!text-[#fff4e8] hover:!text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.3)]'
      : '!text-[var(--color-ink)]/72 hover:!text-[var(--color-ink)]';
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        className={`fixed inset-x-0 top-0 z-50 border-b supports-[backdrop-filter]:backdrop-blur-xl ${isTransparent
            ? 'border-transparent'
            : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,250,245,0.18))] border-white/30 supports-[backdrop-filter]:bg-[rgba(255,250,245,0.28)]'
          }`}
        {...headerMotion}
      >
        <Container as="nav" className="relative" aria-label="Primary navigation">
          <div className="flex min-h-[86px] items-center justify-between gap-6">
            <m.div layout transition={shellSpring} className="flex flex-1 items-center">
              <a
                href="/"
                className="flex shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                aria-label="Go to homepage"
              >
                <m.img
                  whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                  transition={shellSpring}
                  src={identity.logoSrc ?? '/images/logo.svg'}
                  alt={identity.logoAlt ?? "Isa's Cakes"}
                  className={`h-11 w-auto sm:h-12 ${isTransparent ? 'brightness-0 invert drop-shadow-[0_10px_28px_rgba(0,0,0,0.3)]' : ''}`}
                />
              </a>
            </m.div>

            <div className="hidden items-center justify-center gap-8 lg:flex">
              {items.map((item) => (
                <m.div
                  key={item.label}
                  layout
                  whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={shellSpring}
                  className="relative"
                >
                  <NavLink
                    href={item.href}
                    className={`relative px-0 py-2 text-[1rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:outline-offset-4 ${getLinkTone(item.href)
                      }`}
                  >
                    {isActiveLink(item.href) ? (
                      <m.span
                        layoutId="nav-underline"
                        className={`absolute -bottom-0.5 left-0 h-0.5 w-full ${useLightNavLinks ? 'bg-[#fff1df]' : 'bg-[var(--color-accent)]'
                          }`}
                        transition={shellSpring}
                      />
                    ) : null}
                    {item.label}
                  </NavLink>
                </m.div>
              ))}
            </div>

            <div className="hidden flex-1 justify-end lg:flex">
              <m.div
                layout
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={shellSpring}
              >
                <Button
                  href={identity.ctaHref}
                  className={
                    isTransparent
                      ? 'border border-[#ffe7cc]/85 bg-[linear-gradient(135deg,#fff4e3_0%,#ffd6ad_100%)] px-6 text-[#5b2d1f] shadow-[0_16px_38px_rgba(0,0,0,0.22)] hover:scale-[1.02] hover:border-white hover:bg-[linear-gradient(135deg,#fff8ef_0%,#ffc98f_100%)] hover:text-[#4a2418] focus-visible:outline-white'
                      : 'border border-white/45 bg-white/46 shadow-[0_12px_24px_rgba(181,82,92,0.14)] supports-[backdrop-filter]:bg-white/24'
                  }
                >
                  {identity.ctaLabel}
                </Button>
              </m.div>
            </div>

            <m.button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden ${isTransparent
                  ? 'text-[#fff5ea] drop-shadow-[0_4px_18px_rgba(0,0,0,0.3)] focus-visible:outline-white'
                  : 'text-[var(--color-ink)] focus-visible:outline-[var(--color-accent)]'
                }`}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              transition={shellSpring}
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-6 rounded-full bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
                />
                <span className={`h-0.5 w-6 rounded-full bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
                <span
                  className={`h-0.5 w-6 rounded-full bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
                />
              </div>
            </m.button>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <m.div
                id="mobile-navigation"
                className="border-t border-black/5 bg-[var(--color-surface)] lg:hidden"
                variants={mobileMenuVariants}
                {...mobileMotionProps}
              >
                <div className="flex flex-col gap-1 py-4">
                  {items.map((item) => (
                    <m.div key={item.label} variants={mobileItemVariants}>
                      <NavLink
                        href={item.href}
                        className={`flex items-center justify-between rounded-none border-b border-black/5 px-0 py-4 text-sm uppercase tracking-[0.12em] ${isActiveLink(item.href)
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-ink)]/78'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true" className="text-base leading-none">
                          /
                        </span>
                      </NavLink>
                    </m.div>
                  ))}
                  <m.div variants={mobileItemVariants} className="pt-4">
                    <Button href={identity.ctaHref} className="w-full" onClick={() => setIsOpen(false)}>
                      {identity.ctaLabel}
                    </Button>
                  </m.div>
                </div>
              </m.div>
            ) : null}
          </AnimatePresence>
        </Container>
      </m.header>
    </LazyMotion>
  );
}
