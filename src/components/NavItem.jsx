import { motion } from "framer-motion";

const NavItem = ({ id, isActive, onClick, children }) => {
  return (
    <motion.button
      variants={{
        inactive: {
          color: "#6b7280",
          fontSize: ".75rem",
          transition: { duration: 0.2 },
        },
        active: {
          color: "#ffffff",
          fontSize: "1rem",
          transition: { duration: 0.2 },
        },
      }}
      initial={isActive ? "active" : "inactive"}
      animate={isActive ? "active" : "inactive"}
      onClick={onClick}
      whileHover={{ color: "#ffffff" }}
    >
      {children}
    </motion.button>
  );
};

export default NavItem;
