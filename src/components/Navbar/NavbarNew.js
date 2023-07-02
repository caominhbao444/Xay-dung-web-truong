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
  FaAngleLeft,
  FaAngleDown,
  FaUserFriends,
  FaRegImage,
  FaRegWindowRestore,
  FaSchool,
  FaQrcode,
} from "react-icons/fa";
import UserImg from "../../assets/userprofile.jpg";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const listKhoa = [
  { name: "Khoa Công nghệ thông tin", path: "/thongbao/khoa/congnghethongtin" },
  { name: "Khoa Điện - Điện tử", path: "/thongbao/khoa/diendientu" },
  { name: "Khoa Giáo dục quốc tế", path: "/thongbao/khoa/giaoducquocte" },
  { name: "Khoa Lao động công đoàn", path: "/thongbao/khoa/laodongcongdoan" },
  { name: "Khoa Luật", path: "/thongbao/khoa/luat" },
  { name: "Khoa Quản trị kinh doanh", path: "/thongbao/khoa/quantrikinhdoanh" },
];
const listPhongban = [
  { name: "Công ty TDT", path: "/thongbao/khoa/congtytdt" },
  { name: "Phòng CTHSSV", path: "/thongbao/khoa/cthssv" },
  { name: "Phòng Đại học", path: "/thongbao/khoa/phongdaihoc" },
  { name: "Phòng Tài chính", path: "/thongbao/khoa/phongtaichinh" },
];
const NavbarNew = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [separation, setSeparation] = useState(false);
  const [title, setTitle] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isActive, setIsActive] = useState(true);
  const [isActiveSecond, setIsActiveSecond] = useState(false);
  const [isActiveSecondDonvi, setIsActiveSecondDonvi] = useState(false);
  const [isActiveSecondDonvi_Khoa, setIsActiveSecondDonvi_Khoa] =
    useState(false);
  const [isActiveSecondDonvi_PhongBan, setIsActiveSecondDonvi_PhongBan] =
    useState(false);
  const [isActiveSecondChude, setIsActiveSecondChude] = useState(false);
  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      setIsActiveSecond(false);
      setIsActiveSecondDonvi(false);
      setIsActiveSecondDonvi_Khoa(false);
      setIsActiveSecondDonvi_PhongBan(false);
    } else {
      setIsActive(false);
    }
  };
  const handleClickSecond = () => {
    if (!isActiveSecond) {
      setIsActive(false);
      setIsActiveSecond(true);
      setIsActiveSecondDonvi_Khoa(false);
      setIsActiveSecondDonvi_PhongBan(false);
    } else {
      setIsActiveSecond(false);
      setIsActiveSecondDonvi(false);
    }
  };
  const handleClickSecondItemFirst = () => {
    if (!isActiveSecondDonvi) {
      setIsActiveSecondDonvi(true);
    } else {
      setIsActiveSecondDonvi(false);
    }
  };
  const handleClick_Khoa = () => {
    if (!isActiveSecondDonvi_Khoa) {
      setIsActiveSecondDonvi_Khoa(true);
    } else {
      setIsActiveSecondDonvi_Khoa(false);
    }
  };
  const handleClick_Phongban = () => {
    if (!isActiveSecondDonvi_PhongBan) {
      setIsActiveSecondDonvi_PhongBan(true);
    } else {
      setIsActiveSecondDonvi_PhongBan(false);
    }
  };
  const handleClickScroll = () => {
    setIsActiveSecond(false);
    setIsActiveSecondDonvi(false);

    window.scrollTo(0, 0);
  };
  const menuItem = [
    {
      path: "/thongbao",
      name: "Trang chủ",
      icon: <FaHome />,
    },
    {
      path: "/danopdon",
      name: "Phân loại thông báo",
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
    <NavbarNewContainer>
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
            to="/thongbao"
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
          <div
            className={`link ${isActiveSecond ? "active" : ""}`}
            onClick={handleClickSecond}
            style={{}}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <div className="icon">
                <FaUserAlt />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Phân loại theo thông báo
              </div>
            </div>
            <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {isActiveSecond ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
          </div>
          {/* Đơn vị area */}
          <div
            className="link_item"
            style={{
              display: isActiveSecond ? "flex" : "none",
            }}
            onClick={handleClickSecondItemFirst}
          >
            <div style={{ display: "flex", gap: "15px", paddingLeft: "31px" }}>
              <div className="icon">
                <FaRegImage />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Đơn vị
              </div>
            </div>
            <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {isActiveSecondDonvi ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
          </div>
          {/* Khoa area */}
          <div
            className="link"
            style={{
              display: isActiveSecondDonvi ? "flex" : "none",
            }}
            onClick={handleClick_Khoa}
          >
            <div style={{ display: "flex", gap: "15px", paddingLeft: "31px" }}>
              <div className="icon">
                <FaSchool />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Khoa
              </div>
            </div>
            <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {isActiveSecondDonvi_Khoa ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
          </div>
          {listKhoa.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                className="link"
                style={{
                  display:
                    isActiveSecondDonvi_Khoa &&
                    isActiveSecond &&
                    isActiveSecondDonvi
                      ? "flex"
                      : "none",
                }}
                onClick={handleClickScroll}
              >
                <div
                  style={{ display: "flex", gap: "15px", paddingLeft: "31px" }}
                >
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Phòng ban */}
          <div
            className="link"
            style={{
              display: isActiveSecondDonvi && isActiveSecond ? "flex" : "none",
            }}
            onClick={handleClick_Phongban}
          >
            <div style={{ display: "flex", gap: "15px", paddingLeft: "31px" }}>
              <div className="icon">
                <FaQrcode />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Phòng ban
              </div>
            </div>
            <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {isActiveSecondDonvi_PhongBan ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
          </div>
          {/* list phòng ban */}
          {listPhongban.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                className="link"
                style={{
                  display:
                    isActiveSecondDonvi_PhongBan &&
                    isActiveSecond &&
                    isActiveSecondDonvi
                      ? "flex"
                      : "none",
                }}
                onClick={handleClickScroll}
              >
                <div
                  style={{ display: "flex", gap: "15px", paddingLeft: "31px" }}
                >
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Chủ đề area */}
          <div
            className="link_item"
            style={{
              display: isActiveSecond ? "flex" : "none",
            }}
          >
            <div style={{ display: "flex", gap: "15px", paddingLeft: "31px" }}>
              <div className="icon">
                <FaUserFriends />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Chủ đề
              </div>
            </div>
            <div
              className="icon"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {isActiveSecondChude ? <FaAngleDown /> : <FaAngleLeft />}
            </div>
          </div>
          {/* Tất cả thông báo */}
          <div
            className="link_item"
            style={{
              display: isActiveSecond ? "flex" : "none",
            }}
          >
            <div style={{ display: "flex", gap: "15px", paddingLeft: "31px" }}>
              <div className="icon">
                <FaRegWindowRestore />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Tất cả thông báo
              </div>
            </div>
          </div>
          {/* Chủ đề area */}
          <div
            to="/phanloai"
            className="link"
            activeclassName="active"
            style={{ display: separation === true ? "block" : "none" }}
          >
            <div className="icon" style={{ opacity: "0" }}>
              <FaUserAlt />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Chủ đề
            </div>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </NavbarNewContainer>
  );
};

const NavbarNewContainer = styled.section`
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
    transition: all 0.3s;
    cursor: pointer;
    justify-content: space-between;
  }
  .link:hover {
    background: #e74c3c;
    color: #fff;
    transition: all 0s;
  }
  .link_item {
    display: flex;
    color: #2b2823;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.3s;
    cursor: pointer;
    justify-content: space-between;
    background-color: #e5e6ca;
  }
  .link_item:hover {
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
export default NavbarNew;
