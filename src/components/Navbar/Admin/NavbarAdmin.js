import React from "react";
import "./NavbarAdmin.scss";
import { FaBars, FaHome, FaSignOutAlt } from "react-icons/fa";
import UserImg from "../../../assets/userprofile.jpg";
import { Link } from "react-router-dom";
const NavbarAdmin = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  return (
    <section className="admin-page">
      <div className="container">
        <div style={{ width: isOpen ? "350px" : "50px" }} className="sidebar">
          <div className="top_section">
            <p style={{ display: isOpen ? "block" : "none" }} className="logo">
              FisGS
            </p>
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
        </div>
        <main>{children}</main>
      </div>
    </section>
  );
};

export default NavbarAdmin;
