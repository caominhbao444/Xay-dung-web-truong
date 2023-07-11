import React from "react";
import "./NavbarAdmin.scss";
import {
  FaAngleDown,
  FaAngleLeft,
  FaBars,
  FaHighlighter,
  FaHome,
  FaInbox,
  FaPlus,
  FaRegFileAlt,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import UserImg from "../../../assets/userprofile.jpg";
import { Link } from "react-router-dom";
const NavbarAdmin = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isActive, setIsActive] = React.useState(true);
  const [isActive_Announce, setIsActive_Announce] = React.useState(false);
  const [isActive_Action, setIsActive_Action] = React.useState(false);
  const [isActive_Post, setIsActive_Post] = React.useState(false);
  const [isActive_Request, setIsActive_Request] = React.useState(false);
  const [isActive_List, setIsActive_List] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      setIsActive_Action(false);
      setIsActive_Announce(false);
      setIsActive_Request(false);
      setIsActive_Post(false);
    } else {
      setIsActive(false);
    }
  };
  const handleClick_Announce = () => {
    if (!isActive_Announce) {
      setIsActive(false);
      setIsActive_Announce(true);
      setIsActive_Request(false);
    } else {
      setIsActive_Announce(false);
    }
  };
  const handleClick_Action = () => {
    if (!isActive_Action) {
      setIsActive_Announce(false);
      setIsActive(false);
    } else {
      setIsActive_Action(false);
    }
  };
  const handleClick_Post = () => {
    if (!isActive_Post) {
      setIsActive_Announce(false);
      setIsActive(false);
    } else {
      setIsActive_Post(false);
    }
  };

  const handleClick_Request = () => {
    if (!isActive_Request) {
      setIsActive(false);
      setIsActive_Announce(false);
      setIsActive_Request(true);
    } else {
      setIsActive_Request(false);
    }
  };
  const handleClick_List = () => {
    if (!isActive_List) {
      setIsActive_Request(false);

      setIsActive(false);
    } else {
      setIsActive_List(false);
    }
  };
  return (
    <section className="admin-page">
      <div className="container">
        <div
          style={{
            width: isOpen ? "350px" : "50px",
            transition: "display 0.3s ease",
          }}
          className="sidebar"
        >
          <div className="top_section">
            <Link
              to="/home"
              style={{ display: isOpen ? "block" : "none" }}
              className="logo"
            >
              FisGS
            </Link>
            <div
              style={{ marginLeft: isOpen ? "150px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={UserImg}
                alt=""
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
              <span style={{ display: isOpen ? "block" : "none" }}>
                Minh Bảo
              </span>
            </div>
            <FaSignOutAlt style={{ display: isOpen ? "block" : "none" }} />
          </div>
          <Link
            to="/admin/home"
            className={`link ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <div className="icon">
                <FaHome />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Trang chủ
              </div>
            </div>
            {/* <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <FaHome />
            </div> */}
          </Link>
          {/* ---Thông báo---- */}
          <div
            className={`link ${isActive_Announce ? "active" : ""}`}
            onClick={handleClick_Announce}
            style={{}}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <div className="icon">
                <FaInbox />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Thông báo
              </div>
            </div>
            <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {isActive_Announce ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
          </div>
          {/* ----Tạo chủ đề---- */}
          <Link
            to="/admin/thongbao/tao"
            className="link"
            onClick={handleClick_Action}
            style={{
              transition: "display 0.3s ease",
              display: isActive_Announce ? "flex" : "none",
            }}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <div className="icon">
                <FaPlus />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Thao tác
              </div>
            </div>
          </Link>
          <Link
            to="/admin/thongbao/dangbai"
            className="link"
            style={{
              display: isActive_Announce ? "flex" : "none",
              transition: "display 0.3s ease",
            }}
            onClick={handleClick_Post}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <div className="icon">
                <FaHighlighter />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Đăng bài
              </div>
            </div>
            {/* <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <FaHome />
            </div> */}
          </Link>
          {/* ---Đơn---- */}
          <div
            className={`link ${isActive_Request ? "active" : ""}`}
            onClick={handleClick_Request}
            style={{}}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <div className="icon">
                <FaRegFileAlt />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Đơn
              </div>
            </div>
            <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {isActive_Request ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
          </div>
          <Link
            to="/admin/don/danhsach"
            className="link"
            onClick={handleClick_List}
            style={{
              transition: "display 0.3s ease",
              display: isActive_Request ? "flex" : "none",
            }}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <div className="icon">
                <FaPlus />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Danh sách đơn
              </div>
            </div>
          </Link>
        </div>
        <main>{children}</main>
      </div>
    </section>
  );
};

export default NavbarAdmin;
