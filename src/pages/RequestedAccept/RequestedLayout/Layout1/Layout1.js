import React from "react";
import "./Layout1.scss";
import { Link } from "react-router-dom";
const Layout1 = () => {
  return (
    <section className="layout1">
      <div className="header">
        <h4>Thông tin chi tiết</h4>
      </div>
      <div className="body">
        <div className="item">
          <div className="item-first">
            <p>Họ và tên:</p>
          </div>
          <div className="item-second">
            <p>Cao Minh Bảo</p>
          </div>
          <div className="item-third">
            <p>Mã người học:</p>
          </div>
          <div className="item-fourth">
            <p>Cao Minh Bảo</p>
          </div>
        </div>
        <div className="item">
          <div className="item-first">
            <p>Khoa:</p>
          </div>
          <div className="item-second">
            <p>Cao Minh Bảo</p>
          </div>
          <div className="item-third">
            <p>Ngành:</p>
          </div>
          <div className="item-fourth">
            <p>Cao Minh Bảo</p>
          </div>
        </div>
        <div className="item">
          <div className="item-first">
            <p>Lớp:</p>
          </div>
          <div className="item-second">
            <p>Cao Minh Bảo</p>
          </div>
          <div className="item-third">
            <p>Số điện thoại:</p>
          </div>
          <div className="item-fourth">
            <p>Cao Minh Bảo</p>
          </div>
        </div>
        <div className="item">
          <div className="item-first">
            <p>Năm học/Học kỳ nộp đơn:</p>
          </div>
          <div className="item-second">
            <p>Cao Minh Bảo</p>
          </div>
          <div className="item-third">
            <p>Loại điểm:</p>
          </div>
          <div className="item-fourth">
            <p>Điểm trung bình tích lũy</p>
          </div>
        </div>
        <div className="item">
          <div className="item-first">
            <p>Li do:</p>
          </div>
          <div className="item-fifth">
            <p>Em can bang diem de nop cho cong ty thuc tap dang ung tuyen</p>
          </div>
        </div>
        <div className="footer">
          <Link to="/danopdon" className="btn-back">
            Quay lại
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Layout1;
