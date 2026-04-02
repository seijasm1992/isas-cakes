export default function NavLink({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`text-sm font-medium text-[var(--color-ink)] transition duration-200 hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
