import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({
  children,
  delay = 0,
  amount = 0.15,
  className,
  style,
}) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount }}
    transition={{
      duration: 0.7,
      ease: [0.2, 0.7, 0.2, 1],
      delay: delay / 1000,
    }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

export default Reveal;
