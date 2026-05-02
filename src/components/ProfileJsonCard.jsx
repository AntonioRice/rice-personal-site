import { PROFILE } from "../utils/portfolioData";

const JsonRow = ({ k, v, accent }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "3px 0",
      gap: 12,
    }}
  >
    <span style={{ color: "var(--muted)", flexShrink: 0 }}>
      {`"${k}":`}
    </span>
    <span
      style={{
        color: accent ? "var(--accent)" : "var(--text)",
        textAlign: "right",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {v}
    </span>
  </div>
);

const ProfileJsonCard = ({ full }) => (
  <div
    style={{
      border: "1px solid var(--border-strong)",
      background: "var(--bg-soft)",
      fontFamily: "var(--font-mono)",
      fontSize: full ? 12 : 11,
    }}
  >
    <div
      style={{
        padding: full ? "10px 14px" : "8px 12px",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        color: "var(--muted)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontSize: full ? 10 : 9,
      }}
    >
      <span>profile.json</span>
      <span style={{ color: "var(--accent)" }}>● live</span>
    </div>
    <div
      style={{
        padding: full ? 18 : 14,
        lineHeight: 1.85,
        color: "var(--text-dim)",
      }}
    >
      <JsonRow k="name" v={`"${PROFILE.name}"`} />
      <JsonRow k="role" v={`"${PROFILE.role}"`} />
      <JsonRow k="loc" v={`"${PROFILE.location}"`} />
      <JsonRow k="status" v={`"open"`} accent />
      <JsonRow k="yrs_exp" v="6+" />
      <JsonRow k="responds_within" v={`"1d"`} />
      {full && (
        <>
          <JsonRow k="open_to" v={`["full-time", "contract"]`} />
          <JsonRow k="last_updated" v={`"2026-04-29"`} />
        </>
      )}
    </div>
  </div>
);

export default ProfileJsonCard;
