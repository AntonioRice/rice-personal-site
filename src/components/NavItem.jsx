import { motion } from "framer-motion";

const NavItem = ({ id, isActive, onClick, children }) => {
  return (
    <motion.button
      variants={{
        inactive: { color: "#6b7280" },
        active: { color: "#ffffff" },
      }}
      animate={isActive ? "active" : "inactive"}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default NavItem;
