import React from "react";
import { Breadcrumbs, Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import * as MdIcons from "react-icons/md";
const FormAverage = () => {
  return (
    <section className="formcreate">
      <Breadcrumbs
        separator={<MdIcons.MdNavigateNext style={{ color: "#777777" }} />}
        aria-label="breadcrumb"
        style={{
          backgroundColor: "white",
          height: "40px",
          padding: "10px 20px",
          lineHeight: "20px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "flex-start",
          boxShadow: "#EDEDED 0px 2px 2px 0px",
        }}
      >
        <Link
          underline="hover"
          to="/nopdon"
          style={{ textDecoration: "none", color: "#777777" }}
          className="text-bread"
        >
          Trang chủ
        </Link>
        <Link
          underline="hover"
          color="#777777"
          to="/taodon/DonXinDiemTrungBinh"
          style={{ textDecoration: "none", color: "#777777" }}
          className="text-bread"
        >
          Xem xét điểm trung bình (học kỳ/tích lũy/môn học - CQ)
        </Link>
      </Breadcrumbs>
      <section className="form-body">
        <section className="form-container">
          <header>
            Xem xét điểm trung bình (học kỳ/tích lũy/môn học - CQ)
          </header>
        </section>
      </section>
    </section>
  );
};

export default FormAverage;
