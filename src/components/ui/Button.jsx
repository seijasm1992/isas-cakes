export default function Button({
  href,
  children,
  className = '',
  variant = 'primary',
  ...props
}) {
  const styles = {
    primary:
      'inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]',
    ghost:
      'inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  };

  if (href) {
    return (
      <a href={href} className={`${styles[variant]} ${className}`.trim()} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${styles[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
