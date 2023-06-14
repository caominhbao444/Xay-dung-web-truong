import React from "react";
import NavbarNew from "../Navbar/NavbarNew";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
export default function PrivateComponent1() {
  return (
    <>
      <NavbarNew>
        <Outlet />
      </NavbarNew>
      <Footer />
    </>
  );
}
