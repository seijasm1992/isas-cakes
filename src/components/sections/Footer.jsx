import Container from '../ui/Container';

export default function Footer({ content, identity }) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#1b1416_0%,#23191d_100%)] p-6 sm:py-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_40%)]" />
      <Container className="relative z-10">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-6 lg:flex-row lg:justify-between">
          
          {/* Brand Info */}
          <div className="max-w-sm">
            <a href="/" className="inline-flex items-center gap-3">
              <img
                src={identity.logoSrc}
                alt={identity.logoAlt}
                className="h-9 w-auto opacity-90"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {content.socialHandle}
                </p>
                <p className="text-lg font-semibold tracking-tight text-white/95">
                  {content.brandName}
                </p>
              </div>
            </a>

            <p className="mt-3 max-w-xs text-[0.8125rem] leading-[1.6] text-white/60">
              {content.brandStatement}
            </p>

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 transition-colors hover:bg-white/10">
              <span aria-hidden="true">ES</span>
              <span>{content.languageLabel}</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] lg:gap-12">
            {/* Categories */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3d8b4]/70">
                Designer Cakes
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5">
                {content.categoryLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12px] leading-relaxed text-white/60 transition hover:text-[#ffe8cd]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3d8b4]/70">
                Navigation
              </h3>
              <ul className="mt-3 space-y-1.5">
                {content.navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12px] leading-relaxed text-white/60 transition hover:text-[#ffe8cd]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 pt-4 text-[10px] uppercase tracking-wider text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Handcrafted premium celebrations in Miami and Hialeah.</p>
          <p>{content.socialHandle}</p>
        </div>
      </Container>
    </footer>
  );
}
