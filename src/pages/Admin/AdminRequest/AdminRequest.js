import React from "react";
import "./AdminRequest.scss";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { API_ListAdminRequest } from "../../FakeApi/FakeApi";
const AdminRequest = () => {
  return (
    <section className="admin_request">
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
          to="/admin/home"
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
          to="/admin/thongbao/tao"
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
            Đơn - Danh sách
          </span>
        </Link>
      </Breadcrumbs>
      <section className="admin_request-body">
        <section className="container">
          <div className="header">
            <h4>Danh sách yêu cầu</h4>
          </div>
          <section className="body">
            <div className="filter">
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  fontSize: "13px",
                }}
              >
                Hiển thị
                <select style={{ padding: "5px", cursor: "pointer" }}>
                  <option>10</option>
                </select>
                dữ liệu
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <input
                    style={{ display: "block" }}
                    type="checkbox"
                    id="checkbox"
                  ></input>
                  <label
                    htmlFor="checkbox"
                    style={{ cursor: "pointer", fontSize: "13px" }}
                  >
                    Đã xử lý
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #e5e5e5",
                  }}
                >
                  <input
                    style={{ padding: "5px", outline: "none", border: "none" }}
                    placeholder="Nhập tên đơn"
                  ></input>
                  <div style={{ padding: "0 5px" }}>
                    <FaSearch
                      style={{
                        display: "block",
                        height: "100%",
                        color: "#777",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <table style={{ width: "100%" }}>
              <thead>
                <tr style={{ backgroundColor: "#e74c3c", color: "white" }}>
                  <th style={{ width: "5%" }}>STT</th>
                  <th style={{ width: "50%" }}>Tên loại đơn</th>
                  <th style={{ width: "10%" }}>Người nộp</th>
                  <th style={{ width: "10%" }}>Ngày nộp</th>
                  <th style={{ width: "15%" }}>Trạng thái</th>
                  <th style={{ width: "10%" }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {API_ListAdminRequest.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.student_id}</td>
                      <td>{item.date}</td>
                      <td
                        style={{
                          fontWeight: "bold",
                          color: item.status === "Đã xử lý" ? "#29C724" : "red",
                        }}
                      >
                        <p>{item.status}</p>
                      </td>
                      <td>
                        <button>Chi tiết</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "13px",
              }}
            >
              Hiển thị 1 tới 1 dữ liệu
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AdminRequest;
