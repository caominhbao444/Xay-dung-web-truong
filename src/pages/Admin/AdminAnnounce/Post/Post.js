import React, { useState, useRef, useMemo, useEffect } from "react";
import "./Post.scss";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";
import {
  CallApiGetAllFaculty,
  CallApiGetAllDepartment,
  CallApiGetAllCategory,
  CallApiGetListFaculty,
  CallApiGetListDepartment,
} from "../../../../features/announceSlice";
import { useDispatch, useSelector } from "react-redux";
const Post = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("Khoa");
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("authToken");
  const listNameFaculty = useSelector(
    (state) => state.announce.listNameFaculty
  );
  const listNameDepartment = useSelector(
    (state) => state.announce.listNameDepartment
  );
  const listCategory = useSelector((state) => state.announce.listCategory);
  const config = useMemo(
    () => ({
      readonly: false,
    }),
    []
  );
  useEffect(() => {
    if (location === "Khoa") {
      dispatch(
        CallApiGetListFaculty({
          headers: { authorization: `Bearer ${authToken}` },
        })
      );
    } else if (location === "Phong") {
      dispatch(
        CallApiGetListDepartment({
          headers: { authorization: `Bearer ${authToken}` },
        })
      );
    }
  }, [location]);
  React.useEffect(() => {
    dispatch(
      CallApiGetAllCategory({
        headers: { authorization: `Bearer ${authToken}` },
      })
    );
  }, []);
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
              <select
                style={{ padding: "10px" }}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value={"Khoa"}>Khoa</option>
                <option value={"Phong"}>Phòng/Ban</option>
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
                <option disabled defaultValue hidden>
                  Chọn Khoa/Phòng ban
                </option>
                {location === "Khoa" &&
                  listNameFaculty &&
                  listNameFaculty.content &&
                  listNameFaculty.content.map((item, index) => {
                    return <option key={item.id}>{item.facultyName}</option>;
                  })}
                {location === "Phong" &&
                  listNameDepartment &&
                  listNameDepartment.content &&
                  listNameDepartment.content.map((item, index) => {
                    return (
                      <option key={item.id}>{item.departCenterName}</option>
                    );
                  })}
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
                <option disabled defaultValue hidden>
                  Chủ đề
                </option>
                {listCategory &&
                  listCategory.content &&
                  listCategory.content.map((item, index) => {
                    return <option key={item.id}>{item.categoryName}</option>;
                  })}
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
