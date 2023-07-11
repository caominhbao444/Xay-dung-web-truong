import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import "./RequestedAccept.scss";
import { API_Request } from "../FakeApi/FakeApi";
const RequestedAccept = () => {
  console.log(API_Request);
  return (
    <section className="request_accepted">
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
          className="text-bread"
        >
          Trang chủ
        </Link>
        <Link
          underline="hover"
          color="#777777"
          to="/danopdon"
          style={{ textDecoration: "none", color: "#777777" }}
          className="text-bread"
        >
          Danh sách đơn đã nộp
        </Link>
      </Breadcrumbs>
      <section className="request_accepted-body">
        <section className="container">
          <div className="header">
            <h4>Danh sách đơn đã nộp</h4>
          </div>
          <div className="body">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                Hiển thị
                <select style={{ padding: "5px" }}>
                  <option>10</option>
                </select>
                dữ liệu
              </div>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <label>Tìm kiếm</label>
                <input
                  style={{ padding: "5px", outline: "none" }}
                  placeholder="Nhập tên đơn"
                ></input>
              </div>
            </div>
            <table style={{ width: "100%" }}>
              <thead>
                <tr style={{ backgroundColor: "#e74c3c", color: "white" }}>
                  <th style={{ width: "10%" }}>STT</th>
                  <th style={{ width: "50%" }}>Tên loại đơn</th>
                  <th style={{ width: "20%" }}>Ngày nộp</th>
                  <th style={{ width: "20%" }}>Thao tác</th>
                </tr>
              </thead>
              {/* <tr>
                <td colspan="4" style={{ textAlign: "center" }}>
                  Không có dữ liệu
                </td>
              </tr> */}
              <tbody>
                {API_Request.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>
                        <Link
                          to={`/nopdon/chitiet/${item.id}`}
                          style={{
                            cursor: "pointer",
                            padding: "5px 10px",
                            border: "1px solid #e74c3c",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "#e74c3c",
                          }}
                        >
                          Chi tiết
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              Hiển thị 1 tới 1 dữ liệu
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

const RequestContainer = styled.section`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  box-sizing: border-box;
  .text-bread {
    font-size: 15px;
  }
`;
export default RequestedAccept;
