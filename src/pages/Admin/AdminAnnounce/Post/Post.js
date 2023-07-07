import React, { useState, useRef, useMemo } from "react";
import "./Post.scss";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";
const Post = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
    }),
    []
  ); // Pass an empty dependency array to useMemo
  return (
    <section className="post-page">
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
            Thông báo - Đăng bài
          </span>
        </Link>
      </Breadcrumbs>
      <section className="post-body">
        <section className="post-container">
          <h3>Thông tin thông báo</h3>
          <div style={{ width: "100%", display: "flex", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33.33333%",
                gap: "10px",
              }}
            >
              <label>
                Chọn Đơn vị <span style={{ color: "red" }}>*</span>
              </label>
              <select style={{ padding: "10px" }}>
                <option>Đơn vị</option>
                <option>Phòng/Ban</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33.33333%",
                gap: "10px",
              }}
            >
              <label>
                Chọn Khoa/Phòng ban <span style={{ color: "red" }}>*</span>
              </label>
              <select style={{ padding: "10px" }}>
                <option>Khoa/Phòng ban</option>
                <option>Phòng/Ban</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33.33333%",
                gap: "10px",
              }}
            >
              <label>
                Chọn Chủ đề <span style={{ color: "red" }}>*</span>
              </label>
              <select style={{ padding: "10px" }}>
                <option>Chủ đề</option>
                <option>Phòng/Ban</option>
              </select>
            </div>
          </div>
          <div className="post-content">
            <label>
              Nội dung thông báo <span style={{ color: "red" }}>*</span>
            </label>
            <JoditEditor
              ref={editor}
              value={content}
              config={config} // Use the `config` object directly
              onBlur={(newContent) => setContent(newContent)}
              onChange={(newContent) => {}}
              className="editor"
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <button className="btn">Đăng</button>
          </div>
        </section>
      </section>
      {/* <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          minHeight: "100vh",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
        }}
      /> */}
    </section>
  );
};

export default Post;
