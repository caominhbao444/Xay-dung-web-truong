import React from "react";
import {
  FaShareAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaRocketchat,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Footer.scss";
import Logo from "../../assets/logo.png";
function Footer() {
  return (
    <footer>
      <div className="footer-first">
        <div className="logo">
          <img src={Logo} alt="" />
          <h5>ĐẠI HỌC TÔN ĐỨC THẮNG</h5>
        </div>
        <div className="list-social">
          <FaShareAlt className="icon" />
          <span>Kết nối với TDTU:</span>
          <FaFacebook className="icon-fb" />
          <FaInstagram className="icon-ins" />
          <FaYoutube className="icon-yu" />
        </div>
      </div>
      <div className="footer-second">
        <h4>Liên hệ:</h4>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h5>Phòng đại học</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <FaPhoneAlt className="icon" />
            <span>028.3775.5052</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <FaRocketchat className="icon" />
            <span>phongdaihoc@tdtu.edu.vn</span>
          </div>
        </div>
      </div>
      <div className="footer-third">
        <h4 style={{ opacity: "0" }}>Liên hệ:</h4>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h5>Văn phòng tư vấn và hỗ trợ</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <FaPhoneAlt className="icon" />
            <span>028.2247.7215</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <FaRocketchat className="icon" />
            <span>tuvanhocduong@tdtu.edu.vn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
