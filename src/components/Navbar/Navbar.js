import React, { useState } from "react";
import {
  FaHome,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaSignOutAlt,
} from "react-icons/fa";
import styled from "styled-components";
import UserImg from "../../assets/userprofile.jpg";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/nopdon",
      name: "Trang chủ",
      icon: <FaHome />,
    },
    {
      path: "/danopdon",
      name: "Danh sách đơn đã nộp",
      icon: <FaUserAlt />,
    },
    {
      path: "/dondangxuly",
      name: "Danh sách đơn đang xử lý",
      icon: <FaRegChartBar />,
    },
    {
      path: "/dondaxuly",
      name: "Danh sách đơn đã xử lý",
      icon: <FaCommentAlt />,
    },
  ];
  return (
    <NavbarContainer>
      <div className="container">
        <div style={{ width: isOpen ? "350px" : "50px" }} className="sidebar">
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
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.section`
  .container {
    display: flex;
  }
  main {
    width: 100%;
  }
  .sidebar {
    background: #f9fadc;
    color: #2b2823;
    min-height: 100vh;
    width: 350px;
    transition: all 0s;
  }
  .top_section {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    line-height: 20px;
  }
  .logo {
    font-size: 20px;
  }
  .bars {
    display: flex;
    font-size: 20px;
    margin-left: 150px;
    cursor: pointer;
  }
  .link {
    display: flex;
    color: #2b2823;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0s;
    border-top: 1px dashed red;
    border-bottom: 1px dashed red;
  }
  .link:hover {
    background: #e74c3c;
    color: #fff;
    transition: all 0s;
  }
  .active {
    background: #e74c3c;
    color: #fff;
  }
  .icon,
  .link_text {
    font-size: 16px;
  }
`;
export default Navbar;
