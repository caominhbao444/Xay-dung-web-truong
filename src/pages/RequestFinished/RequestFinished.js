import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import { Typography } from "@mui/material";

const RequestFinished = () => {
  return (
    <RequestFinishedContainer>
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
          to="/home"
          style={{ textDecoration: "none", color: "#777777" }}
        >
          Trang chủ
        </Link>
        <Link
          underline="hover"
          color="#777777"
          to="/dondaxuly"
          style={{ textDecoration: "none", color: "#777777" }}
        >
          Danh sách đơn đã xử lý
        </Link>
      </Breadcrumbs>
    </RequestFinishedContainer>
  );
};

const RequestFinishedContainer = styled.section`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  box-sizing: border-box;
`;
export default RequestFinished;
