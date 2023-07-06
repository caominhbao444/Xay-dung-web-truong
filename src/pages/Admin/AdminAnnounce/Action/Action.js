import React from "react";
import "./Action.scss";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { FaHome, FaPen } from "react-icons/fa";
const Action = () => {
  const [isActive, setIsActive] = React.useState(1);

  return (
    <section className="action-page">
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
            Thông báo - Thao tác
          </span>
        </Link>
      </Breadcrumbs>
      <section className="action-body">
        <section className="action-container">
          <div className="left">
            <div
              className="item"
              onClick={() => setIsActive(1)}
              style={{ borderRight: isActive === 1 ? "5px solid #e74c3c" : "" }}
            >
              <p>Tạo Khoa</p>
            </div>
            <div
              className="item"
              onClick={() => setIsActive(2)}
              style={{ borderRight: isActive === 2 ? "5px solid #e74c3c" : "" }}
            >
              <p>Tạo Phòng/Ban</p>
            </div>
            <div
              className="item"
              onClick={() => setIsActive(3)}
              style={{ borderRight: isActive === 3 ? "5px solid #e74c3c" : "" }}
            >
              <p>Tạo Chủ đề</p>
            </div>
          </div>
          <div className="right">
            {isActive === 1 && (
              <>
                <h3>Nhập thông tin về Khoa</h3>
                <div className="item">
                  <label>
                    Nhập tên Khoa <span style={{ color: "red" }}>*</span>
                  </label>
                  <input style={{ padding: "10px", outline: "none" }}></input>
                </div>
                <div className="item">
                  <label>
                    Nhập tên viết tắt của Khoa
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input style={{ padding: "10px", outline: "none" }}></input>
                </div>
                <div className="item">
                  <label>
                    Mô tả về Khoa <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    style={{
                      resize: "none",
                      padding: "10px",
                      outline: "none",
                      height: "150px",
                    }}
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button>
                    <FaPen />
                    Tạo
                  </button>
                </div>
              </>
            )}
            {isActive === 2 && (
              <>
                <h3>Nhập thông tin về Phòng/Ban</h3>
                <div className="item">
                  <label>
                    Nhập tên Phòng/Ban <span style={{ color: "red" }}>*</span>
                  </label>
                  <input style={{ padding: "10px", outline: "none" }}></input>
                </div>
                <div className="item">
                  <label>
                    Nhập tên viết tắt của Phòng/Ban{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input style={{ padding: "10px", outline: "none" }}></input>
                </div>
                <div className="item">
                  <label>
                    Mô tả về Phòng/Ban <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    style={{
                      resize: "none",
                      padding: "10px",
                      outline: "none",
                      height: "150px",
                    }}
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button>
                    <FaPen />
                    Tạo
                  </button>
                </div>
              </>
            )}
            {isActive === 3 && (
              <>
                <h3>Nhập thông tin về Chủ đề</h3>
                <div className="item">
                  <label>
                    Nhập tên Chủ đề <span style={{ color: "red" }}>*</span>
                  </label>
                  <input style={{ padding: "10px", outline: "none" }}></input>
                </div>
                <div className="item">
                  <label>
                    Nhập tên viết tắt của Chủ đề
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input style={{ padding: "10px", outline: "none" }}></input>
                </div>
                <div className="item">
                  <label>
                    Mô tả về Chủ đề <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    style={{
                      resize: "none",
                      padding: "10px",
                      outline: "none",
                      height: "150px",
                    }}
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button>
                    <FaPen />
                    Tạo
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Action;
