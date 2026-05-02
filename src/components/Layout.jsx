import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";

const Layout = () => (
  <>
    <SiteHeader />
    <Outlet />
  </>
);

export default Layout;
