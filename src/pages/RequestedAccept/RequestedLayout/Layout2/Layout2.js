import React from "react";
import "./Layout2.scss";
import { API_TypeOfScoreTable } from "../../../FakeApi/FakeApi";
import { Link, useNavigate } from "react-router-dom";
const Layout2 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/danopdon");
    window.scrollTo(0, 0);
  };
  return (
    <section className="layout2">
      <section className="header">
        <h4>Thông tin chi tiết</h4>
      </section>
      <section className="body">
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
            <p>Hệ đào tạo:</p>
          </div>
          <div className="item-second">
            <p>Cao Minh Bảo</p>
          </div>
          <div className="item-third">
            <p>Khoa:</p>
          </div>
          <div className="item-fourth">
            <p>Cao Minh Bảo</p>
          </div>
        </div>
        <div className="item">
          <div className="item-first">
            <p>Ngành:</p>
          </div>
          <div className="item-second">
            <p>Cao Minh Bảo</p>
          </div>
          <div className="item-third">
            <p>Chuyên ngành:</p>
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
            <p>Khối lớp:</p>
          </div>
          <div className="item-fourth">
            <p>Điểm trung bình tích lũy</p>
          </div>
        </div>
        <div className="item">
          <div className="item-first">
            <p>Số điện thoại:</p>
          </div>
          <div className="item-second">
            <p>Cao Minh Bảo</p>
          </div>
          <div className="item-third">
            <p>Năm học/Học kỳ nộp đơn:</p>
          </div>
          <div className="item-fourth">
            <p>Điểm trung bình tích lũy</p>
          </div>
        </div>
        <table>
          <tr>
            <th>STT</th>
            <th>Loại bảng điểm</th>
            <th>Số bảng</th>
            <th>Số tiền</th>
          </tr>
          {API_TypeOfScoreTable.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.index}</td>
                <td>{item.name}</td>
                <td>
                  <p>5.000</p>
                </td>
                <td>
                  <p>56644</p>
                </td>
              </tr>
            );
          })}
        </table>
        <div className="item">
          <div className="item-first">
            <p>Tổng tiền:</p>
          </div>
          <div className="item-fifth">
            <p>Cao Minh Bảo</p>
          </div>
        </div>
        <div className="item">
          <div className="item-first">
            <p>Lí do:</p>
          </div>
          <div className="item-fifth">
            <p>Cao Minh Bảo</p>
          </div>
        </div>
        <div className="footer">
          <button to="/danopdon" onClick={handleBack} className="btn-back">
            Quay lại
          </button>
        </div>
      </section>
    </section>
  );
};

export default Layout2;
