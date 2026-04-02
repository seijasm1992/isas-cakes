import { c as createComponent } from './astro-component_B_gUb1ew.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C_XgqvgT.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useReducedMotion, LazyMotion, domAnimation, m } from 'framer-motion';
import { C as Container, B as Button, $ as $$BaseLayout, N as Navbar, s as siteIdentity, n as navigationItems, a as aboutContent, F as Footer, f as footerContent } from './siteContent_ClynbSRp.mjs';

const blockSpring = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.9
};
function StoryBlock({ block, index, shouldReduceMotion }) {
  const isReversed = index % 2 === 1;
  return /* @__PURE__ */ jsxs(
    m.article,
    {
      initial: shouldReduceMotion ? false : { opacity: 0, y: 28 },
      whileInView: shouldReduceMotion ? void 0 : { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.28 },
      transition: blockSpring,
      className: `grid gap-6 rounded-[2rem] border border-white/60 bg-white/72 p-4 shadow-[0_24px_80px_rgba(36,24,21,0.08)] backdrop-blur-xl md:gap-8 md:p-6 lg:grid-cols-2 lg:items-center lg:p-8 ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[1.5rem] border border-black/5 bg-[#f3e7dc] shadow-[0_18px_40px_rgba(36,24,21,0.08)]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(36,24,21,0.2))]" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: block.image.src,
              alt: block.image.alt,
              className: "aspect-[4/5] h-full w-full object-cover",
              loading: "lazy"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-2 py-2 md:px-4", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-background)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]", children: block.eyebrow }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 text-[clamp(1.85rem,3vw,3.25rem)] font-semibold leading-[1.04] text-[var(--color-ink)]", children: block.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl text-[1.02rem] leading-8 text-[var(--color-muted)] sm:text-lg", children: block.description })
        ] })
      ]
    }
  );
}
function AboutStory({ content, identity }) {
  const shouldReduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxs(
    "section",
    {
      id: "about",
      className: "relative isolate overflow-hidden py-20 sm:py-24 lg:py-32",
      "aria-labelledby": "about-title",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(181,82,92,0.12),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(218,180,136,0.24),_transparent_24%),linear-gradient(180deg,#fffdf9_0%,#fbf6f0_48%,#f7efe7_100%)]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-24 -z-10 h-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.85),_transparent_70%)] blur-3xl" }),
        /* @__PURE__ */ jsxs(Container, { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            m.div,
            {
              initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
              whileInView: shouldReduceMotion ? void 0 : { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.4 },
              transition: blockSpring,
              className: "mx-auto max-w-3xl text-center",
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-[var(--color-accent)]/15 bg-white/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] shadow-[0_10px_30px_rgba(36,24,21,0.04)]", children: content.eyebrow }),
                /* @__PURE__ */ jsx(
                  "h2",
                  {
                    id: "about-title",
                    className: "mt-6 text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)]",
                    children: content.title
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-2xl text-[1.02rem] leading-8 text-[var(--color-muted)] sm:text-lg", children: content.description })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative mt-14 space-y-8 md:mt-16 lg:mt-20 lg:space-y-10", children: content.blocks.map((block, index) => /* @__PURE__ */ jsx(
            StoryBlock,
            {
              block,
              index,
              shouldReduceMotion
            },
            block.id
          )) }),
          /* @__PURE__ */ jsx(
            m.div,
            {
              initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
              whileInView: shouldReduceMotion ? void 0 : { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: blockSpring,
              className: "mx-auto mt-12 max-w-4xl md:mt-16",
              children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,248,242,0.84))] p-4 shadow-[0_28px_100px_rgba(36,24,21,0.1)] backdrop-blur-xl md:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[1.6rem] border border-black/5 bg-[#f6efe8]", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: content.featuredImage.src,
                      alt: content.featuredImage.alt,
                      className: "aspect-[16/10] w-full object-cover",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(36,24,21,0.24))]" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-center px-2 py-2 md:px-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-black/8 bg-[var(--color-background)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]", children: content.bottomBadge }),
                  /* @__PURE__ */ jsx("h3", { className: "mt-5 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1.04] text-[var(--color-ink)]", children: content.bottomTitle }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-lg text-base leading-8 text-[var(--color-muted)] sm:text-lg", children: content.bottomDescription }),
                  /* @__PURE__ */ jsx("div", { className: "mt-7 flex w-full justify-center lg:justify-start", children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      href: identity.ctaHref,
                      className: "min-w-[13rem] bg-[linear-gradient(135deg,#c96772_0%,#b5525c_52%,#8f3f47_100%)] px-7 py-3.5 shadow-[0_18px_40px_rgba(181,82,92,0.28)] hover:scale-[1.02] hover:bg-[linear-gradient(135deg,#cf6f79_0%,#bd5a65_52%,#964049_100%)]",
                      children: identity.ctaLabel
                    }
                  ) })
                ] })
              ] })
            }
          )
        ] })
      ]
    }
  ) });
}

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Isa | Isa's Cakes", "description": "Learn the story behind Isa's Cakes, from humble beginnings to refined custom cake craftsmanship." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "items": navigationItems, "identity": siteIdentity, "client:component-hydration": "load", "client:component-path": "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/components/layout/Navbar.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main id="main-content"> ${renderComponent($$result2, "AboutStory", AboutStory, { "client:load": true, "content": aboutContent, "identity": siteIdentity, "client:component-hydration": "load", "client:component-path": "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/components/sections/AboutStory.jsx", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "content": footerContent, "identity": siteIdentity })} ` })}`;
}, "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/pages/about.astro", void 0);

const $$file = "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
