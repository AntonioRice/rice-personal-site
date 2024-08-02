import { useRef, useEffect } from "react";
import {
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";

function useSectionScroll(offset) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: offset });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return { ref, scale, opacity, controls };
}

export default useSectionScroll;
