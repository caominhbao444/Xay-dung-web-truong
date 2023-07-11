import { Breadcrumbs } from "@mui/material";
import React from "react";
import * as MdIcons from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import "./RequestedDetails.scss";
import Layout1 from "../RequestedLayout/Layout1/Layout1";
import Layout2 from "../RequestedLayout/Layout2/Layout2";
const RequestedDetails = () => {
  const { id } = useParams();
  return (
    <section className="requesteddetails">
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
          to={`/nopdon/chitiet/${id}`}
          style={{ textDecoration: "none", color: "#777777" }}
          className="text-bread"
        >
          Chi tiết đơn
        </Link>
      </Breadcrumbs>
      <section className="requesteddetails-body">
        {/* <Layout1 /> */}
        <Layout2 />
      </section>
    </section>
  );
};

export default RequestedDetails;
