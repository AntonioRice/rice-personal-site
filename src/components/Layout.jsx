import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col bg-[#0F1217]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
