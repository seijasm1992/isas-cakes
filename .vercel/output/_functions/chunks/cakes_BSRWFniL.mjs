import { c as createComponent } from './astro-component_B_gUb1ew.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C_XgqvgT.mjs';
import { C as Container, $ as $$BaseLayout, N as Navbar, s as siteIdentity, n as navigationItems, c as cakesGallery, F as Footer, f as footerContent } from './siteContent_ClynbSRp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function CakesGallery({ content }) {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    if (activeIndex === null) return void 0;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % content.items.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + content.items.length) % content.items.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, content.items.length]);
  const activeItem = activeIndex !== null ? content.items[activeIndex] : null;
  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + content.items.length) % content.items.length);
  };
  const goNext = () => {
    setActiveIndex((current) => (current + 1) % content.items.length);
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-[var(--color-background)] py-24 sm:py-28", children: [
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-[var(--color-accent)]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]", children: content.eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "mt-6 text-4xl font-semibold leading-tight text-balance text-[var(--color-ink)] sm:text-5xl lg:text-6xl", children: content.title }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg", children: content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: content.items.map((item, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveIndex(index),
          className: "group relative aspect-[4/5] overflow-hidden rounded-[0.9rem] border border-black/6 bg-white text-left shadow-[0_18px_55px_rgba(36,24,21,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(36,24,21,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]",
          "aria-label": `Open cake image ${index + 1}`,
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.src,
                alt: item.alt,
                className: "absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_10%,_rgba(0,0,0,0.22)_100%)] opacity-70 transition duration-300 group-hover:opacity-90" })
          ]
        },
        item.id
      )) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: activeItem ? /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setActiveIndex(null),
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "relative w-full max-w-6xl overflow-hidden rounded-[1.2rem] bg-[#120f0f] shadow-[0_35px_120px_rgba(0,0,0,0.48)]",
            initial: { opacity: 0, scale: 0.97, y: 12 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.985, y: 10 },
            transition: { duration: 0.24, ease: "easeOut" },
            onClick: (event) => event.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveIndex(null),
                  className: "absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                  "aria-label": "Close gallery overlay",
                  children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "text-xl leading-none", children: "×" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: goPrevious,
                  className: "absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                  "aria-label": "Previous image",
                  children: "‹"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: goNext,
                  className: "absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                  "aria-label": "Next image",
                  children: "›"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid bg-[#120f0f] lg:grid-cols-[1fr_auto]", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center bg-black p-6 sm:p-8", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: activeItem.src,
                    alt: activeItem.alt,
                    className: "mx-auto max-h-[78vh] max-w-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "hidden w-[84px] flex-col justify-center gap-3 border-l border-white/8 bg-[#171313] p-3 lg:flex", children: content.items.map((item, index) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActiveIndex(index),
                    className: `overflow-hidden rounded-[0.7rem] border transition ${index === activeIndex ? "border-white/70 opacity-100" : "border-white/10 opacity-55 hover:opacity-100"}`,
                    "aria-label": `Open thumbnail ${index + 1}`,
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: item.src,
                        alt: item.alt,
                        className: "h-16 w-full object-cover"
                      }
                    )
                  },
                  item.id
                )) })
              ] })
            ]
          }
        )
      }
    ) : null })
  ] });
}

const $$Cakes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Isa's Cakes | Cakes Gallery" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "items": navigationItems, "identity": siteIdentity, "client:component-hydration": "load", "client:component-path": "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/components/layout/Navbar.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main id="main-content" class="pt-20 sm:pt-24"> ${renderComponent($$result2, "CakesGallery", CakesGallery, { "client:load": true, "content": cakesGallery, "client:component-hydration": "load", "client:component-path": "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/components/sections/CakesGallery.jsx", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "content": footerContent, "identity": siteIdentity })} ` })}`;
}, "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/pages/cakes.astro", void 0);

const $$file = "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/pages/cakes.astro";
const $$url = "/cakes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cakes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
