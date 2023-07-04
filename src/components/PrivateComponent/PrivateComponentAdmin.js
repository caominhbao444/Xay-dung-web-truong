import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarAdmin from "../Navbar/Admin/NavbarAdmin";

const PrivateComponentAdmin = () => {
  return (
    <>
      <NavbarAdmin>
        <Outlet />
      </NavbarAdmin>
      <Footer />
    </>
  );
};

export default PrivateComponentAdmin;
