import { Breadcrumbs } from "@mui/material";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./AnnoucePost.scss";
import Loading from "../../Loading/Loading";
const AnnoucePost = () => {
  const { id } = useParams();
  return (
    <section className="announce-post">
      {/* <Loading /> */}
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
          <span
            className="text-bread"
            style={{ textTransform: "uppercase", fontSize: "13px" }}
          >
            Trang chủ
          </span>
        </Link>
        <Link
          underline="hover"
          to={`/thongbao/chitietbaipost/${id}`}
          style={{
            textDecoration: "none",
            color: "#777777",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span
            className="text-bread"
            style={{ textTransform: "uppercase", fontSize: "13px" }}
          >
            Thông báo - Chi tiết thông báo
          </span>
        </Link>
      </Breadcrumbs>
      <section className="announce_post-body">
        <section className="container"></section>
      </section>
    </section>
  );
};

export default AnnoucePost;
