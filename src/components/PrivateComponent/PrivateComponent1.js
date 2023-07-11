import React from "react";
import NavbarNew from "../Navbar/NavbarNew";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import NotFound from "../../pages/NotFound/NotFound";
export default function PrivateComponent1() {
  const authToken = localStorage.getItem("authToken");
  return authToken ? (
    <>
      <NavbarNew>
        <Outlet />
      </NavbarNew>
      <Footer />
    </>
  ) : (
    <NotFound />
  );
}
