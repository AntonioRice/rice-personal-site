const positions = (offset) => ({
  tl: {
    top: offset,
    left: offset,
    borderTop: "1px solid var(--accent)",
    borderLeft: "1px solid var(--accent)",
  },
  tr: {
    top: offset,
    right: offset,
    borderTop: "1px solid var(--accent)",
    borderRight: "1px solid var(--accent)",
  },
  bl: {
    bottom: offset,
    left: offset,
    borderBottom: "1px solid var(--accent)",
    borderLeft: "1px solid var(--accent)",
  },
  br: {
    bottom: offset,
    right: offset,
    borderBottom: "1px solid var(--accent)",
    borderRight: "1px solid var(--accent)",
  },
});

const CornerTick = ({ pos, mobile }) => {
  const offset = mobile ? 6 : 8;
  const size = mobile ? 11 : 14;
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        ...positions(offset)[pos],
      }}
    />
  );
};

export default CornerTick;
