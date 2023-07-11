import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarAdmin from "../Navbar/Admin/NavbarAdmin";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import useAuth from "../../hooks/useAuth/useAuth";
const PrivateComponentAdmin = () => {
  const { username, fullname, faculty, roleName } = useAuth();
  return roleName === "admin" ? (
    <>
      <NavbarAdmin>
        <Outlet />
      </NavbarAdmin>
      <Footer />
    </>
  ) : (
    <NotFound />
  );
};

export default PrivateComponentAdmin;
