import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const PrivateComponent = () => {
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
      <Footer />
    </>
  );
};

export default PrivateComponent;
