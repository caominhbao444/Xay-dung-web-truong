import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
export default function PrivateComponent() {
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
      <Footer />
    </>
  );
}
