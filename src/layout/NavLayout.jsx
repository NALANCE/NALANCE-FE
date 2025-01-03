import { Outlet } from "react-router-dom";
import Navbar from "pages/Navbar/Navbar";

const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavLayout;
