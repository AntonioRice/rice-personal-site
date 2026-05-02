import { PROFILE } from "../utils/portfolioData";

const JsonRow = ({ name, value, accent }) => (
  <div className="flex justify-between gap-3 py-[3px]">
    <span className="shrink-0 text-muted">{`"${name}":`}</span>
    <span
      className={`overflow-hidden text-ellipsis whitespace-nowrap text-right ${
        accent ? "text-accent" : "text-fg"
      }`}
    >
      {value}
    </span>
  </div>
);

const ProfileJsonCard = ({ full = false }) => (
  <div
    className={`border border-rule-strong bg-card font-mono ${
      full ? "text-[12px]" : "text-[11px]"
    }`}
  >
    <div
      className={`flex justify-between border-b border-rule uppercase tracking-[0.08em] text-muted ${
        full ? "px-3.5 py-2.5 text-[10px]" : "px-3 py-2 text-[9px]"
      }`}
    >
      <span>profile.json</span>
      <span className="text-accent">● live</span>
    </div>
    <div
      className={`leading-[1.85] text-dim ${full ? "p-[18px]" : "p-3.5"}`}
    >
      <JsonRow name="name" value={`"${PROFILE.name}"`} />
      <JsonRow name="role" value={`"${PROFILE.role}"`} />
      <JsonRow name="loc" value={`"${PROFILE.location}"`} />
      <JsonRow name="status" value={`"open"`} accent />
      <JsonRow name="yrs_exp" value="6+" />
      <JsonRow name="responds_within" value={`"1d"`} />
      {full && (
        <>
          <JsonRow name="open_to" value={`["full-time", "contract"]`} />
          <JsonRow name="last_updated" value={`"2026-04-29"`} />
        </>
      )}
    </div>
  </div>
);

export default ProfileJsonCard;
