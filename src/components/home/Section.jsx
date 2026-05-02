import Reveal from "../Reveal";

const Section = ({ num, title, count, id, children }) => (
  <section id={id} className="pt-14 lg:pt-24 lg:pb-6">
    <Reveal>
      <header className="flex items-baseline justify-between border-b border-rule-strong pb-3.5 mb-5 lg:pb-6 lg:mb-8">
        <div className="flex items-baseline gap-3 lg:gap-5">
          <span className="font-mono text-[11px] text-accent lg:text-[12px]">
            {`// ${num}`}
          </span>
          <h2 className="m-0 font-sans text-[26px] font-medium tracking-[-0.02em] lg:text-[40px] lg:tracking-[-0.025em]">
            {title}
            <span className="text-accent">.</span>
          </h2>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.06em] text-muted lg:text-[11px]">
          {count}
        </span>
      </header>
    </Reveal>
    {children}
  </section>
);

export default Section;
