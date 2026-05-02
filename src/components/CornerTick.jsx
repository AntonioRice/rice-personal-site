const POSITIONS = {
  tl: "top-1.5 left-1.5 border-t border-l lg:top-2 lg:left-2",
  tr: "top-1.5 right-1.5 border-t border-r lg:top-2 lg:right-2",
  bl: "bottom-1.5 left-1.5 border-b border-l lg:bottom-2 lg:left-2",
  br: "bottom-1.5 right-1.5 border-b border-r lg:bottom-2 lg:right-2",
};

const CornerTick = ({ pos }) => (
  <div
    className={`absolute h-[11px] w-[11px] border-accent lg:h-[14px] lg:w-[14px] ${POSITIONS[pos]}`}
  />
);

export default CornerTick;
