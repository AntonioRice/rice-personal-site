import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      style={{
        background:
          "linear-gradient(270deg, #0f1217 ,#1f1f1f, #1b1d21 ,#1a1a1a, #242731)",
        backgroundSize: "400% 400%",
        color: "#ffffff",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </motion.div>
  );
};

export default Layout;
