import Container from '../ui/Container';

export default function Footer({ content, identity }) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#120f0f] py-16 text-white sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_30%)]" />
      <Container className="relative z-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-xl">
            <a href="/" className="inline-flex items-center gap-4">
              <img
                src={identity.logoSrc}
                alt={identity.logoAlt}
                className="h-14 w-auto sm:h-16"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/48">
                  {content.socialHandle}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  {content.brandName}
                </h2>
              </div>
            </a>

            <p className="mt-8 max-w-lg text-base leading-8 text-white/68 sm:text-lg">
              {content.brandStatement}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
              <span aria-hidden="true">ES</span>
              <span>{content.languageLabel}</span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/52">
                Designer Cakes
              </h3>
              <ul className="mt-6 space-y-3">
                {content.categoryLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm leading-7 text-white/72 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/52">
                Navigation
              </h3>
              <ul className="mt-6 space-y-3">
                {content.navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm leading-7 text-white/72 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
          <p>Designed for premium celebrations in Miami and Hialeah.</p>
          <p>{content.socialHandle}</p>
        </div>
      </Container>
    </footer>
  );
}
