import { c as createComponent } from './astro-component_B_gUb1ew.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C_XgqvgT.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { C as Container, B as Button, $ as $$BaseLayout, N as Navbar, s as siteIdentity, n as navigationItems, h as heroSlides, b as complementaryProducts, t as topSkills, r as reviewsContent, F as Footer, f as footerContent } from './siteContent_ClynbSRp.mjs';

function ComplementaryProducts({ content }) {
  const [activeItem, setActiveItem] = useState(null);
  useEffect(() => {
    if (!activeItem) {
      return void 0;
    }
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItem]);
  return /* @__PURE__ */ jsxs("section", { id: "menu", className: "relative bg-[var(--color-background)] py-20 sm:py-24 lg:py-28", children: [
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-[var(--color-accent)]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] shadow-[0_10px_30px_rgba(181,82,92,0.08)]", children: content.eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 text-3xl font-semibold leading-tight text-balance text-[var(--color-ink)] sm:text-4xl lg:text-5xl", children: content.title }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg", children: content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: content.items.map((item, index) => /* @__PURE__ */ jsx(
        "article",
        {
          className: "group relative overflow-hidden rounded-[1.15rem] border border-black/8 bg-white shadow-[0_20px_70px_rgba(36,24,21,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(36,24,21,0.1)]",
          children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveItem(item),
              className: "block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--color-accent)]",
              "aria-label": `Open image for ${item.title}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/4.6] overflow-hidden", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: item.image,
                      alt: item.alt,
                      className: "h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_30%,_rgba(0,0,0,0.38)_100%)]" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-5 inline-flex rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] shadow-sm", children: item.accent })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-7", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]/75", children: [
                      "0",
                      index + 1
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]/75", children: "View image" })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "mt-5 text-2xl font-semibold leading-snug text-[var(--color-ink)]", children: item.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-8 text-[var(--color-muted)]", children: item.description })
                ] })
              ]
            }
          )
        },
        item.id
      )) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: activeItem ? /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setActiveItem(null),
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "relative w-full max-w-5xl overflow-hidden rounded-[1.25rem] bg-[#120f0f] shadow-[0_30px_120px_rgba(0,0,0,0.45)]",
            initial: { opacity: 0, scale: 0.96, y: 16 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.98, y: 10 },
            transition: { duration: 0.24, ease: "easeOut" },
            onClick: (event) => event.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveItem(null),
                  className: "absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                  "aria-label": "Close image preview",
                  children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "text-xl leading-none", children: "×" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1.25fr_0.75fr]", children: [
                /* @__PURE__ */ jsx("div", { className: "relative bg-black", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: activeItem.image,
                    alt: activeItem.alt,
                    className: "max-h-[78vh] w-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center bg-[linear-gradient(180deg,_#171313,_#120f0f)] p-7 text-white sm:p-10", children: [
                  /* @__PURE__ */ jsx("span", { className: "inline-flex w-fit rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/70", children: activeItem.accent }),
                  /* @__PURE__ */ jsx("h3", { className: "mt-5 text-3xl font-semibold leading-tight", children: activeItem.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-8 text-white/72", children: activeItem.description }),
                  /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm uppercase tracking-[0.24em] text-white/45", children: "Click outside or press ESC to close" })
                ] })
              ] })
            ]
          }
        )
      }
    ) : null })
  ] });
}

function Stars({ count }) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-[0.95rem] text-[var(--color-accent)]", children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "★" }, index)) });
}
function Reviews({ content }) {
  return /* @__PURE__ */ jsxs("section", { id: "shop", className: "relative bg-[var(--color-ink)] py-20 text-white sm:py-24 lg:py-28", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%)]" }),
    /* @__PURE__ */ jsxs(Container, { className: "relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/78", children: content.eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl", children: content.title }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg", children: content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: content.items.map((item) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "flex h-full flex-col rounded-[1.1rem] border border-white/10 bg-white/6 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: item.author }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/56", children: item.meta })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/62", children: item.timeAgo })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(Stars, { count: item.rating }) }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 flex-1 text-sm leading-7 text-white/76 sm:text-base", children: item.quote }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-white/10 pt-5", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]/85", children: item.highlight }),
              item.reply ? /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm leading-7 text-white/58", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-white/78", children: "Owner reply:" }),
                " ",
                item.reply
              ] }) : null
            ] })
          ]
        },
        item.id
      )) })
    ] })
  ] });
}

const HERO_AUTOPLAY_MS = 5500;

const heroFallback = {
  title: 'Designer cakes shaped with elegance and intention.',
  description:
    'The visual story remains polished even when a featured image is unavailable.',
};

function Hero({ slides, identity }) {
  const safeSlides = useMemo(() => slides?.length ? slides : [{ id: "fallback", ...heroFallback }], [slides]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  useEffect(() => {
    if (safeSlides.length <= 1) {
      return void 0;
    }
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % safeSlides.length);
    }, HERO_AUTOPLAY_MS);
    return () => window.clearInterval(intervalId);
  }, [safeSlides.length]);
  const activeSlide = safeSlides[activeIndex];
  const showImage = activeSlide.image && !failedImages[activeSlide.id];
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate min-h-screen overflow-hidden bg-[var(--color-ink)] text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_35%)]" }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: showImage ? /* @__PURE__ */ jsx(
      motion.img,
      {
        src: activeSlide.image,
        alt: activeSlide.alt,
        className: "absolute inset-0 h-full w-full object-cover",
        initial: { opacity: 0.4, scale: 1.06 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0.25, scale: 0.98 },
        transition: { duration: 0.8, ease: "easeOut" },
        onError: () => setFailedImages((current) => ({
          ...current,
          [activeSlide.id]: true
        }))
      },
      activeSlide.id
    ) : /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute inset-0 bg-[linear-gradient(135deg,_rgba(253,186,116,0.4),_rgba(244,114,182,0.28),_rgba(255,255,255,0.08))]",
        initial: { opacity: 0.2 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5, ease: "easeOut" }
      },
      `${activeSlide.id}-fallback`
    ) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,7,7,0.38)_0%,_rgba(7,7,7,0.55)_32%,_rgba(7,7,7,0.72)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-md", children: activeSlide.eyebrow ?? "Isa’s Cakes" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]", children: activeSlide.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg", children: activeSlide.description }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsx(Button, { href: identity.ctaHref, children: identity.ctaLabel }),
        /* @__PURE__ */ jsx(Button, { href: "#cakes", variant: "ghost", children: "Explore Cakes" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 max-w-md rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:mt-14", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.24em] text-white/70", children: "Emotional experiences" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/82 sm:text-base", children: "Emotional experiences in the form of delicious pieces of art." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3 sm:bottom-10", children: safeSlides.map((slide, index) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": `Show hero slide ${index + 1}`,
        "aria-pressed": index === activeIndex,
        className: `h-3 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${index === activeIndex ? "w-10 bg-white" : "w-3 bg-white/35 hover:bg-white/55"}`,
        onClick: () => setActiveIndex(index)
      },
      slide.id
    )) })
  ] });
}

function TopSkills({ content }) {
  return /* @__PURE__ */ jsxs("section", { id: "cakes", className: "relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(181,82,92,0.08),_transparent_28%)]" }),
    /* @__PURE__ */ jsx(Container, { className: "relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-background)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]", children: content.eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 text-3xl font-semibold leading-tight text-balance text-[var(--color-ink)] sm:text-4xl lg:text-5xl", children: content.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-lg text-base leading-8 text-[var(--color-muted)] sm:text-lg", children: content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: content.items.map((item) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "group overflow-hidden rounded-[1.1rem] border border-black/7 bg-[var(--color-background)] shadow-[0_18px_60px_rgba(36,24,21,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(36,24,21,0.1)]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: item.image,
                  alt: item.alt,
                  className: "h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.06)_0%,_rgba(0,0,0,0.5)_100%)]" }),
              /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-5 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]", children: item.stat })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold leading-snug text-[var(--color-ink)]", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-8 text-[var(--color-muted)]", children: item.description })
            ] })
          ]
        },
        item.id
      )) })
    ] }) })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "items": navigationItems, "identity": siteIdentity, "client:component-hydration": "load", "client:component-path": "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/components/layout/Navbar.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main id="main-content"> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "slides": heroSlides, "identity": siteIdentity, "client:component-hydration": "load", "client:component-path": "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/components/sections/Hero.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "ComplementaryProducts", ComplementaryProducts, { "client:load": true, "content": complementaryProducts, "client:component-hydration": "load", "client:component-path": "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/components/sections/ComplementaryProducts.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "TopSkills", TopSkills, { "content": topSkills })} ${renderComponent($$result2, "Reviews", Reviews, { "content": reviewsContent })} </main> ${renderComponent($$result2, "Footer", Footer, { "content": footerContent, "identity": siteIdentity })} ` })}`;
}, "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/pages/index.astro", void 0);

const $$file = "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
