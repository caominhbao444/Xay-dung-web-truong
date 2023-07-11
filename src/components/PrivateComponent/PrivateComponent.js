import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import NotFound from "../../pages/NotFound/NotFound";

const PrivateComponent = () => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
      <Footer />
    </>
  ) : (
    <NotFound />
  );
};

export default PrivateComponent;
