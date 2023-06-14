import React from "react";
import "./NewPage.scss";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const NewPage = () => {
  return (
    <section className="newpage">
      {" "}
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          height: "40px",
          padding: "10px 20px",
          lineHeight: "20px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#ffffff",
          boxShadow: "#EDEDED 0px 2px 2px 0px",
        }}
      >
        <Link
          underline="hover"
          to="/thongbao"
          style={{
            textDecoration: "none",
            color: "#777777",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaHome />
          <span className="text-bread">Trang chủ</span>
        </Link>
      </Breadcrumbs>
    </section>
  );
};

export default NewPage;
