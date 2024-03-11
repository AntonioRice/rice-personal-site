import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

function useSectionScroll(offset) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: offset });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return { ref, scale, opacity };
}

export default useSectionScroll;
