import useIsMobile from "../hooks/useIsMobile";

const baseStyle = {
  fontFamily: "var(--font-mono)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--muted)",
};

const SiteFooter = ({ marginTop }) => {
  const isMobile = useIsMobile(1024);
  if (isMobile) {
    return (
      <div
        style={{
          ...baseStyle,
          marginTop: marginTop ?? 32,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          fontSize: 10,
          textAlign: "center",
        }}
      >
        <span>© 2026 — minneapolis, mn</span>
        <span>last deploy: 4d ago · uptime 99.97%</span>
      </div>
    );
  }
  return (
    <div
      style={{
        ...baseStyle,
        marginTop: marginTop ?? 28,
        display: "flex",
        justifyContent: "space-between",
        fontSize: 11,
      }}
    >
      <span>© 2026 — minneapolis, mn</span>
      <span>last deploy: 1d ago</span>
      <span>uptime 99.97%</span>
    </div>
  );
};

export default SiteFooter;
