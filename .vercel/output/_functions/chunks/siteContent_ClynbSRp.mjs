import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo, useEffect } from 'react';
import { useReducedMotion, LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { c as createComponent } from './astro-component_B_gUb1ew.mjs';
import 'piccolore';
import { h as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate } from './entrypoint_C_XgqvgT.mjs';
import 'clsx';

function Button({
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const styles = {
    primary: "inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
    ghost: "inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  };
  if (href) {
    return /* @__PURE__ */ jsx("a", { href, className: `${styles[variant]} ${className}`.trim(), ...props, children });
  }
  return /* @__PURE__ */ jsx("button", { className: `${styles[variant]} ${className}`.trim(), ...props, children });
}

function Container({ as: Tag = "div", className = "", children }) {
  return /* @__PURE__ */ jsx(Tag, { className: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim(), children });
}

function Footer({ content, identity }) {
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      id: "contact",
      className: "relative overflow-hidden bg-[#120f0f] py-16 text-white sm:py-20",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_30%)]" }),
        /* @__PURE__ */ jsxs(Container, { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.05fr_0.95fr]", children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
              /* @__PURE__ */ jsxs("a", { href: "/", className: "inline-flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: identity.logoSrc,
                    alt: identity.logoAlt,
                    className: "h-14 w-auto sm:h-16"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-white/48", children: content.socialHandle }),
                  /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-semibold text-white sm:text-3xl", children: content.brandName })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-lg text-base leading-8 text-white/68 sm:text-lg", children: content.brandStatement }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/72", children: [
                /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "ES" }),
                /* @__PURE__ */ jsx("span", { children: content.languageLabel })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-10 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-[0.22em] text-white/52", children: "Designer Cakes" }),
                /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: content.categoryLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: link.href,
                    className: "text-sm leading-7 text-white/72 transition hover:text-white",
                    children: link.label
                  }
                ) }, link.label)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-[0.22em] text-white/52", children: "Navigation" }),
                /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: content.navigationLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: link.href,
                    className: "text-sm leading-7 text-white/72 transition hover:text-white",
                    children: link.label
                  }
                ) }, link.label)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 pt-6 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsx("p", { children: "Designed for premium celebrations in Miami and Hialeah." }),
            /* @__PURE__ */ jsx("p", { children: content.socialHandle })
          ] })
        ] })
      ]
    }
  );
}

function NavLink({ href, children, className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: `text-sm font-medium text-[var(--color-ink)] transition duration-200 hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] ${className}`.trim(),
      ...props,
      children
    }
  );
}

const shellSpring = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.85
};
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -12
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      ...shellSpring,
      staggerChildren: 0.05,
      delayChildren: 0.03
    }
  }
};
const mobileItemVariants = {
  closed: { opacity: 0, y: -8 },
  open: {
    opacity: 1,
    y: 0,
    transition: shellSpring
  }
};
function Navbar({ items, identity }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const [activeHash, setActiveHash] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const mobileMotionProps = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: false,
        animate: "open",
        exit: "closed",
        transition: { duration: 0 }
      };
    }
    return {
      initial: "closed",
      animate: "open",
      exit: "closed"
    };
  }, [shouldReduceMotion]);
  useEffect(() => {
    const syncLocation = () => {
      setActivePath(window.location.pathname || "/");
      setActiveHash(window.location.hash || "");
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
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    syncLocation();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", syncLocation);
    window.addEventListener("popstate", syncLocation);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", syncLocation);
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const isHomePage = activePath === "/";
  const isTransparent = isHomePage && !isScrolled;
  const useLightNavLinks = isHomePage;
  const isActiveLink = (itemHref) => activePath === itemHref || itemHref.startsWith("#") && isHomePage && activeHash === itemHref;
  const headerMotion = shouldReduceMotion ? {} : {
    initial: false,
    animate: {
      backgroundColor: isTransparent ? "rgba(255,250,245,0)" : "rgba(255,250,245,0.62)",
      boxShadow: isTransparent ? "0 0 0 rgba(0,0,0,0)" : "0 14px 34px rgba(25,18,16,0.10)",
      borderColor: isTransparent ? "rgba(255,255,255,0)" : "rgba(255,255,255,0.34)"
    },
    transition: shellSpring
  };
  const getLinkTone = (itemHref) => {
    if (isActiveLink(itemHref)) {
      return useLightNavLinks ? "!text-[#fff8f0] drop-shadow-[0_4px_18px_rgba(0,0,0,0.34)]" : "!text-[var(--color-ink)]";
    }
    return useLightNavLinks ? "!text-[#fff4e8] hover:!text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.3)]" : "!text-[var(--color-ink)]/72 hover:!text-[var(--color-ink)]";
  };
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsx(
    m.header,
    {
      className: `fixed inset-x-0 top-0 z-50 border-b supports-[backdrop-filter]:backdrop-blur-xl ${isTransparent ? "border-transparent" : "bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,250,245,0.18))] border-white/30 supports-[backdrop-filter]:bg-[rgba(255,250,245,0.28)]"}`,
      ...headerMotion,
      children: /* @__PURE__ */ jsxs(Container, { as: "nav", className: "relative", "aria-label": "Primary navigation", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-h-[86px] items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsx(m.div, { layout: true, transition: shellSpring, className: "flex flex-1 items-center", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              className: "flex shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]",
              "aria-label": "Go to homepage",
              children: /* @__PURE__ */ jsx(
                m.img,
                {
                  whileHover: shouldReduceMotion ? void 0 : { y: -1 },
                  transition: shellSpring,
                  src: identity.logoSrc ?? "/images/logo.svg",
                  alt: identity.logoAlt ?? "Isa's Cakes",
                  className: `h-11 w-auto sm:h-12 ${isTransparent ? "brightness-0 invert drop-shadow-[0_10px_28px_rgba(0,0,0,0.3)]" : ""}`
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "hidden items-center justify-center gap-8 lg:flex", children: items.map((item) => /* @__PURE__ */ jsx(
            m.div,
            {
              layout: true,
              whileHover: shouldReduceMotion ? void 0 : { y: -1 },
              whileTap: shouldReduceMotion ? void 0 : { scale: 0.98 },
              transition: shellSpring,
              className: "relative",
              children: /* @__PURE__ */ jsxs(
                NavLink,
                {
                  href: item.href,
                  className: `relative px-0 py-2 text-[1rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:outline-offset-4 ${getLinkTone(item.href)}`,
                  children: [
                    isActiveLink(item.href) ? /* @__PURE__ */ jsx(
                      m.span,
                      {
                        layoutId: "nav-underline",
                        className: `absolute -bottom-0.5 left-0 h-0.5 w-full ${useLightNavLinks ? "bg-[#fff1df]" : "bg-[var(--color-accent)]"}`,
                        transition: shellSpring
                      }
                    ) : null,
                    item.label
                  ]
                }
              )
            },
            item.label
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden flex-1 justify-end lg:flex", children: /* @__PURE__ */ jsx(
            m.div,
            {
              layout: true,
              whileHover: shouldReduceMotion ? void 0 : { y: -1 },
              whileTap: shouldReduceMotion ? void 0 : { scale: 0.98 },
              transition: shellSpring,
              children: /* @__PURE__ */ jsx(
                Button,
                {
                  href: identity.ctaHref,
                  className: isTransparent ? "border border-[#ffe7cc]/85 bg-[linear-gradient(135deg,#fff4e3_0%,#ffd6ad_100%)] px-6 text-[#5b2d1f] shadow-[0_16px_38px_rgba(0,0,0,0.22)] hover:scale-[1.02] hover:border-white hover:bg-[linear-gradient(135deg,#fff8ef_0%,#ffc98f_100%)] hover:text-[#4a2418] focus-visible:outline-white" : "border border-white/45 bg-white/46 shadow-[0_12px_24px_rgba(181,82,92,0.14)] supports-[backdrop-filter]:bg-white/24",
                  children: identity.ctaLabel
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs(
            m.button,
            {
              type: "button",
              className: `inline-flex h-11 w-11 items-center justify-center rounded-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden ${isTransparent ? "text-[#fff5ea] drop-shadow-[0_4px_18px_rgba(0,0,0,0.3)] focus-visible:outline-white" : "text-[var(--color-ink)] focus-visible:outline-[var(--color-accent)]"}`,
              whileTap: shouldReduceMotion ? void 0 : { scale: 0.94 },
              transition: shellSpring,
              onClick: () => setIsOpen((open) => !open),
              "aria-expanded": isOpen,
              "aria-controls": "mobile-navigation",
              "aria-label": isOpen ? "Close navigation menu" : "Open navigation menu",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: isOpen ? "Close menu" : "Open menu" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: `h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}` }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen ? /* @__PURE__ */ jsx(
          m.div,
          {
            id: "mobile-navigation",
            className: "border-t border-black/5 bg-[var(--color-surface)] lg:hidden",
            variants: mobileMenuVariants,
            ...mobileMotionProps,
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 py-4", children: [
              items.map((item) => /* @__PURE__ */ jsx(m.div, { variants: mobileItemVariants, children: /* @__PURE__ */ jsxs(
                NavLink,
                {
                  href: item.href,
                  className: `flex items-center justify-between rounded-none border-b border-black/5 px-0 py-4 text-sm uppercase tracking-[0.12em] ${isActiveLink(item.href) ? "text-[var(--color-accent)]" : "text-[var(--color-ink)]/78"}`,
                  onClick: () => setIsOpen(false),
                  children: [
                    /* @__PURE__ */ jsx("span", { children: item.label }),
                    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "text-base leading-none", children: "/" })
                  ]
                }
              ) }, item.label)),
              /* @__PURE__ */ jsx(m.div, { variants: mobileItemVariants, className: "pt-4", children: /* @__PURE__ */ jsx(Button, { href: identity.ctaHref, className: "w-full", onClick: () => setIsOpen(false), children: identity.ctaLabel }) })
            ] })
          }
        ) : null })
      ] })
    }
  ) });
}

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Isa's Cakes | Designer Cakes",
    description = "Designer cakes and custom creations shaped with elegance, patience, and detail."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)]">
Skip to content
</a> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Seijas A/Desktop/isasCakes/IsasCakesUSA/src/layouts/BaseLayout.astro", void 0);

const navigationItems = [
  { label: 'About Me', href: '/about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Shop', href: '#shop' },
  { label: 'Cakes', href: '/cakes' },
];

const heroSlides = [
  {
    id: 'mermaid-tale',
    image: '/New%20folder/isas-cakes-pastry-chef-with-their-mermaid-tale-1.webp',
    alt: "Isa's Cakes pastry chef holding a decorated mermaid-inspired cake",
    eyebrow: 'Designer cakes made with patience',
    title: 'Custom cakes designed to turn every celebration into edible art.',
    description:
      'Elegant forms, handcrafted finishes, and a premium presentation made for memorable events.',
  },
  {
    id: 'pink-queen',
    image: '/New%20folder/isas-cakes-rose-form-cake-pink-queen.webp',
    alt: 'Pink designer cake with rose-inspired detailing',
    eyebrow: 'Craftsmanship in every detail',
    title: 'Signature creations that feel as refined as the occasions they celebrate.',
    description:
      'From sophisticated textures to carefully balanced composition, every cake is shaped to feel intentional.',
  },
  {
    id: 'elegant-tier',
    image: '/New%20folder/isas-cakes-elegant-cake-pop-for-2-tiers-cake.webp',
    alt: 'Elegant two-tier cake styled for a premium event',
    eyebrow: 'Made for meaningful moments',
    title: 'A polished visual experience from the first glance to the final slice.',
    description:
      'Explore custom cakes, discover the brand, and request a quote through a clear and elegant journey.',
  },
];

const siteIdentity = {
  logoSrc: 'https://isascakes.com/wp-content/uploads/2026/02/isascakes2026Blacklogo.svg',
  logoAlt: "Isa's Cakes logo",
  brandName: "Isa's Cakes",
  ctaLabel: 'Get a Quote',
  ctaHref: '/build-your-own-cake',
};

const aboutContent = {
  eyebrow: 'About Isa',
  title: 'A story shaped by patience, growth, and cakes made to feel personal.',
  description:
    "From first homemade cookies to polished celebration cakes, Isa's Cakes grew through consistency, curiosity, and a genuine love for creating meaningful desserts.",
  blocks: [
    {
      id: 'first-steps',
      eyebrow: 'Where it began',
      title: 'The first experiments started small, handmade, and full of heart.',
      description:
        'Before the elegant custom cakes, there were simple homemade bakes that built the habit of practicing, refining textures, and learning how presentation could turn something sweet into something memorable.',
      image: {
        src: '/about/6492A223-D66D-4768-B154-DFF72C676EC7-copy-576x1024.webp',
        alt: 'Homemade flower-shaped cookies displayed on a tray.',
      },
    },
    {
      id: 'craft-and-discipline',
      eyebrow: 'Professional evolution',
      title: 'Technique met intention and transformed the craft into a refined process.',
      description:
        'As the work evolved, so did the discipline behind it. Training, repetition, and a stronger visual eye helped shape a signature style where elegance, clean finishes, and balance became essential to every order.',
      image: {
        src: '/about/IMG_2436eee-copy.webp',
        alt: 'Isa wearing a chef coat and smiling in a softly lit interior.',
      },
    },
    {
      id: 'personal-journey',
      eyebrow: 'Years of dedication',
      title: 'Every stage left a mark and pushed the brand toward something more distinctive.',
      description:
        'The journey includes humble beginnings, long hours, and a steady commitment to improving. That progression is still visible in the care behind every detail and the warmth clients feel when they trust a celebration to Isa.',
      image: {
        src: '/about/1193DD28-3FB6-4E1C-AD0E-023C88703580-copy.webp',
        alt: 'A younger Isa holding one of her early decorated cakes.',
      },
    },
    {
      id: 'custom-creativity',
      eyebrow: 'Creative execution',
      title: 'Today, the cakes are made to translate personality, references, and emotion into edible design.',
      description:
        'From clean modern finishes to fully customized concepts, each piece is designed to feel intentional. Packaging, presentation, and the final reveal are treated as part of the experience, not just the delivery.',
      image: {
        src: '/about/IMG_1156-copy.webp',
        alt: 'Custom manga-inspired cake packaged in a transparent presentation box.',
      },
    },
  ],
  featuredImage: {
    src: '/about/noreh-cake.webp',
    alt: 'Finished manga-inspired custom cake with black candles and a character topper.',
  },
  bottomBadge: 'Designed for memorable moments',
  bottomTitle: 'The result is a brand that feels personal, polished, and unmistakably handcrafted.',
  bottomDescription:
    'If you already have an idea, inspiration image, or full concept in mind, the next step is simple: share it and get a custom quote tailored to your celebration.',
};

const complementaryProducts = {
  eyebrow: 'Complementary products',
  title: 'Sweet details that complete the experience beyond the cake itself.',
  description:
    'A curated selection of sweets designed to accompany custom cakes with the same elegant presentation and care.',
  items: [
    {
      id: 'dessert-table',
      title: 'Dessert Table Pieces',
      image: '/complementary/49033533-61B2-43E5-A754-8713048DE150-copy.webp',
      alt: "Dessert table selection by Isa's Cakes",
      description:
        'Refined bite-sized sweets arranged to complement the visual language of your event.',
      accent: 'Soft styling',
    },
    {
      id: 'signature-sweets',
      title: 'Signature Sweets',
      image: '/complementary/candy3-719x1024.webp',
      alt: "Signature sweets presented with premium styling by Isa's Cakes",
      description:
        'Thoughtfully prepared treats that add variety, texture, and a premium finishing touch.',
      accent: 'Balanced presentation',
    },
    {
      id: 'celebration-addons',
      title: 'Celebration Add-ons',
      image: '/complementary/IMG_5800-copy.webp',
      alt: "Celebration add-on sweets prepared by Isa's Cakes",
      description:
        'Additional sweet elements that make the table feel complete, cohesive, and memorable.',
      accent: 'Elegant support',
    },
  ],
};

const topSkills = {
  eyebrow: 'Top skills',
  title: 'The qualities that define our best cakes.',
  description:
    'Each creation is shaped through refined detail, patient execution, and craftsmanship that turns every cake into a centerpiece.',
  items: [
    {
      id: 'detail',
      title: 'Detailed Finishes',
      image: '/New%20folder/isas-cakes-rose-form-cake-pink-queen.webp',
      alt: 'Designer cake showing precise decorative details',
      description:
        'Every texture, curve, and decorative decision is handled with precision so the cake feels polished from every angle.',
      stat: 'Precision-led',
    },
    {
      id: 'craftsmanship',
      title: 'True Craftsmanship',
      image: '/New%20folder/isas-cakes-elegant-cake-pop-for-2-tiers-cake.webp',
      alt: 'Elegant tiered cake showing careful craftsmanship',
      description:
        'Balanced composition, refined forms, and premium presentation come together to create cakes that feel elevated and intentional.',
      stat: 'Artful execution',
    },
    {
      id: 'patience',
      title: 'Patience in Process',
      image: '/New%20folder/isas-cakes-pastry-chef-with-their-mermaid-tale-1.webp',
      alt: "Isa's Cakes pastry chef presenting a custom cake",
      description:
        'The final result comes from patience at every stage, allowing each custom piece to reach the level of finish it deserves.',
      stat: 'Care in every step',
    },
  ],
};

const reviewsContent = {
  eyebrow: 'Google reviews',
  title: 'Clients remember both the design and the experience.',
  description:
    'A curated review section based on real client feedback, ready to be replaced later by a CMS source such as Sanity.',
  items: [
    {
      id: 'j-houston',
      author: 'J Houston',
      meta: '8 opiniones · 4 fotos',
      timeAgo: 'Hace un mes',
      rating: 5,
      quote:
        "I got a cake for my friend's birthday and Isabel worked hard with me to create an original concept with a light up display and acrylic tiers for a cyber theme party. She delivered the cake on time, assembled on site, and it was delicious! I highly recommend her.",
      reply:
        'Thank you, J! Bringing that original cyber theme to life with light-up tiers was a fantastic challenge. I’m glad the on-site assembly and flavor were perfect for the party.',
      highlight: 'Custom concept + on-site setup',
    },
    {
      id: 'gaby-labrada',
      author: 'Gaby Labrada Perez',
      meta: '5 opiniones · 1 foto',
      timeAgo: 'Hace 2 meses',
      rating: 5,
      quote:
        'Great service! I sent Isa a picture of the design I wanted, and it came out even better than I imagined. The flavor was delicious, and every detail made it the perfect cake.',
      reply:
        "Hi Gaby! Thank you for choosing us for your Spiderman birthday cake. I'm so glad the design and flavor were a hit!",
      highlight: 'Design matched and improved',
    },
    {
      id: 'ydalia-lubin',
      author: 'Ydalia Lubin',
      meta: '4 opiniones · 1 foto',
      timeAgo: 'Hace 5 meses',
      rating: 5,
      quote:
        'I reached out a little over 24 hours before the cake was needed and was met with a fast response, quick quote, and a reasonable delivery fee given the time constraints. The custom cake came out perfectly, aligned with my vision, tasted amazing, and the birthday girl loved it. 10/10 recommend.',
      reply:
        'Thank you so much for the 10/10! I’m glad I could help with your last-minute request and that your friend loved her cake.',
      highlight: 'Fast response and delivery',
    },
    {
      id: 'divya-reddy',
      author: 'Divya Reddy Regatte',
      meta: '4 opiniones · 2 fotos',
      timeAgo: 'Hace 5 meses',
      rating: 5,
      quote:
        'I ordered a custom cake and I’m so impressed. They made the cake look exactly like the picture I sent. It looked beautiful and tasted just as amazing. The texture was soft, the flavors were balanced, and the decoration was spot on. They were super professional, easy to communicate with, and delivered right on time.',
      reply: null,
      highlight: 'Exact custom execution',
    },
    {
      id: 'review-summary',
      author: 'Client experience',
      meta: 'Selected real feedback',
      timeAgo: 'Updated for launch',
      rating: 5,
      quote:
        'Clients consistently highlight custom accuracy, beautiful presentation, fast communication, reliable delivery, and flavors that feel as special as the design.',
      reply: null,
      highlight: 'Trusted by celebrations across Miami',
    },
  ],
};

const footerContent = {
  brandStatement: 'Emotional experiences in the form of delicious pieces of art.',
  socialHandle: 'isascakesusa',
  brandName: "Isa's Cakes",
  languageLabel: 'ES',
  categoryLinks: [
    { label: 'Designer Cakes', href: '/cakes' },
    { label: 'Photo Gallery', href: '/cakes' },
    { label: 'Tiered Cakes', href: '/cakes' },
    { label: 'Baby Shower / Gender Reveal', href: '/cakes' },
    { label: 'Heart-Shape Cake', href: '/cakes' },
    { label: 'Printed Cakes', href: '/cakes' },
    { label: 'Burn Away Cakes', href: '/cakes' },
    { label: 'Get a Quote', href: '/build-your-own-cake' },
    { label: 'Store', href: '#shop' },
    { label: 'Standard Cakes', href: '/cakes' },
    { label: 'Candy Bar', href: '#menu' },
  ],
  navigationLinks: [
    { label: 'My Account', href: '#account' },
    { label: 'About Me', href: '/about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Cake Care', href: '#cake-care' },
    { label: 'Menu', href: '#menu' },
  ],
};

const cakesGallery = {
  eyebrow: 'Cake gallery',
  title: 'A curated bento gallery of custom cakes.',
  description:
    'Open any image to explore the collection in a full-screen overlay and move from one piece to the next.',
  items: [
    { id: 'cake-01', src: '/gallery/isas-cakes-2-birthday-cake-blue-with-duck.webp', alt: "Blue birthday cake with duck details by Isa's Cakes", size: 'medium' },
    { id: 'cake-02', src: '/gallery/isas-cakes-30th-birthday-cake-pink-with-little-stich.webp', alt: "Pink 30th birthday cake with character details by Isa's Cakes", size: 'large' },
    { id: 'cake-03', src: '/gallery/isas-cakes-abstract-black-cake-with-gold-candle.webp', alt: "Abstract black cake with gold candle by Isa's Cakes", size: 'small' },
    { id: 'cake-04', src: '/gallery/isas-cakes-aqua-marine-cake-birthday.webp', alt: "Aqua marine birthday cake by Isa's Cakes", size: 'small' },
    { id: 'cake-05', src: '/gallery/isas-cakes-argile-vape-cake.webp', alt: "Custom argile vape cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-06', src: '/gallery/isas-cakes-artistic-flower-cake.webp', alt: "Artistic flower cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-07', src: '/gallery/isas-cakes-cigarrete-and-cocodrile-cake-design.webp', alt: "Custom cigarette and crocodile themed cake by Isa's Cakes", size: 'small' },
    { id: 'cake-08', src: '/gallery/isas-cakes-coco-chanel-cake.webp', alt: "Coco Chanel inspired cake by Isa's Cakes", size: 'small' },
    { id: 'cake-09', src: '/gallery/isas-cakes-corona-glitter-cake-pink-close-up.webp', alt: "Pink glitter crown cake close-up by Isa's Cakes", size: 'large' },
    { id: 'cake-10', src: '/gallery/isas-cakes-happy-birthday-golf-cake.webp', alt: "Golf birthday cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-11', src: '/gallery/isas-cakes-harry-poter-cake-for-birthday.webp', alt: "Harry Potter birthday cake by Isa's Cakes", size: 'small' },
    { id: 'cake-12', src: '/gallery/isas-cakes-harry-potter-cake-for-birthday-close-up.webp', alt: "Harry Potter cake close-up by Isa's Cakes", size: 'small' },
    { id: 'cake-13', src: '/gallery/isas-cakes-hermes-paris-cake-close-up.webp', alt: "Hermes Paris cake close-up by Isa's Cakes", size: 'medium' },
    { id: 'cake-14', src: '/gallery/isas-cakes-hermes-paris-cake-elegant-luxury.webp', alt: "Elegant luxury Hermes Paris cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-15', src: '/gallery/isas-cakes-kidney-cake-2.webp', alt: "Kidney themed custom cake by Isa's Cakes", size: 'small' },
    { id: 'cake-16', src: '/gallery/isas-cakes-kidney-cake-close-up.webp', alt: "Kidney cake close-up by Isa's Cakes", size: 'small' },
    { id: 'cake-17', src: '/gallery/isas-cakes-kidney-cake.webp', alt: "Kidney themed cake design by Isa's Cakes", size: 'medium' },
    { id: 'cake-18', src: '/gallery/isas-cakes-mermaid-tail-cake.webp', alt: "Mermaid tail cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-19', src: '/gallery/isas-cakes-minion-cake.webp', alt: "Minion cake by Isa's Cakes", size: 'small' },
    { id: 'cake-20', src: '/gallery/isas-cakes-north-america-sheet-cake.webp', alt: "North America sheet cake by Isa's Cakes", size: 'large' },
    { id: 'cake-21', src: '/gallery/isas-cakes-pepsi-cake.webp', alt: "Pepsi themed cake by Isa's Cakes", size: 'small' },
    { id: 'cake-22', src: '/gallery/isas-cakes-pink-cake-with-candy-decoration.webp', alt: "Pink cake with candy decoration by Isa's Cakes", size: 'medium' },
    { id: 'cake-23', src: '/gallery/isas-cakes-rolex-cake-close-up.webp', alt: "Rolex cake close-up by Isa's Cakes", size: 'small' },
    { id: 'cake-24', src: '/gallery/isas-cakes-rolex-cake-packing.webp', alt: "Rolex cake packaging by Isa's Cakes", size: 'small' },
    { id: 'cake-25', src: '/gallery/isas-cakes-rolex-cake.webp', alt: "Rolex inspired cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-26', src: '/gallery/isas-cakes-rose-form-cake-pink-queen-packing.webp', alt: "Pink queen cake packaging by Isa's Cakes", size: 'small' },
    { id: 'cake-27', src: '/gallery/isas-cakes-rose-form-cake-pink-queen.webp', alt: "Pink queen cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-28', src: '/gallery/isas-cakes-shit-you-are-old-cake.webp', alt: "Funny birthday cake by Isa's Cakes", size: 'small' },
    { id: 'cake-29', src: '/gallery/isas-cakes-special-white-cake-with-gold-candles-packging.webp', alt: "White cake with gold candles packaging by Isa's Cakes", size: 'small' },
    { id: 'cake-30', src: '/gallery/isas-cakes-special-white-cake-with-gold-candles.webp', alt: "White cake with gold candles by Isa's Cakes", size: 'medium' },
    { id: 'cake-31', src: '/gallery/isas-cakes-spiderman-birthday-cake.webp', alt: "Spiderman birthday cake by Isa's Cakes", size: 'large' },
    { id: 'cake-32', src: '/gallery/isas-cakes-sponge-bob-cake-what-funnier-than-24-25.webp', alt: "SpongeBob themed cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-33', src: '/gallery/isas-cakes-tea-and-flower-cake-close-up.webp', alt: "Tea and flower cake close-up by Isa's Cakes", size: 'small' },
    { id: 'cake-34', src: '/gallery/isas-cakes-tea-and-flower-type-cake.webp', alt: "Tea and flower style cake by Isa's Cakes", size: 'medium' },
    { id: 'cake-35', src: '/gallery/isas-cakes-the-little-mermaid-cake-for-birthday.webp', alt: "Little Mermaid birthday cake by Isa's Cakes", size: 'large' },
    { id: 'cake-36', src: '/gallery/isas-cakes-white-candle-cake.webp', alt: "White candle cake by Isa's Cakes", size: 'small' },
    { id: 'cake-37', src: '/gallery/isas-cakes-zodiac-form-cake-blue-delicious.webp', alt: "Blue zodiac cake by Isa's Cakes", size: 'large' },
  ],
};

export { $$BaseLayout as $, Button as B, Container as C, Footer as F, Navbar as N, aboutContent as a, complementaryProducts as b, cakesGallery as c, footerContent as f, heroSlides as h, navigationItems as n, reviewsContent as r, siteIdentity as s, topSkills as t };
