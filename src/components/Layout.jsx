import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();
  const isDossier =
    pathname === "/" ||
    pathname === "/photography" ||
    pathname.startsWith("/album/");

  return (
    <>
      {!isDossier && <Header />}
      <Outlet />
      {!isDossier && <Footer />}
    </>
  );
};

export default Layout;
