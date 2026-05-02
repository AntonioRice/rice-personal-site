const SiteFooter = ({ className = "" }) => (
  <div
    className={`mt-8 flex flex-col items-center justify-center gap-1.5 text-center font-mono text-[10px] uppercase tracking-[0.06em] text-muted lg:mt-7 lg:flex-row lg:justify-between lg:gap-0 lg:text-[11px] ${className}`}
  >
    <span>© 2026 - minneapolis, mn</span>
    <span className="lg:hidden">last deploy: 1d ago · uptime 99.97%</span>
    <span className="hidden lg:inline">last deploy: 1d ago</span>
    <span className="hidden lg:inline">uptime 99.97%</span>
  </div>
);

export default SiteFooter;
