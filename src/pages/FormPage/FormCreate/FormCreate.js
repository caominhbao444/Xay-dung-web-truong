import React from "react";
import "./FormCreate.scss";
import { Breadcrumbs, Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import * as MdIcons from "react-icons/md";
const title = { title: "Bảo" };
const FormCreate = () => {
  return (
    <section className="formcreate">
      <Breadcrumbs
        separator={<MdIcons.MdNavigateNext style={{ color: "#777777" }} />}
        aria-label="breadcrumb"
        style={{
          backgroundColor: "white",
          height: "40px",
          padding: "10px 20px",
          lineHeight: "20px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "flex-start",
          boxShadow: "#EDEDED 0px 2px 2px 0px",
        }}
      >
        <Link
          underline="hover"
          to="/nopdon"
          style={{ textDecoration: "none", color: "#777777" }}
          className="text-bread"
        >
          Trang chủ
        </Link>
        <Link
          underline="hover"
          color="#777777"
          to="/taodon/DonXinCapBangDiem"
          style={{ textDecoration: "none", color: "#777777" }}
          className="text-bread"
        >
          Đơn xin cấp bảng điểm
        </Link>
      </Breadcrumbs>
      <section className="form-body">
        <section className="form-container">
          <header>Đơn xin cấp bảng điểm</header>
          <section className="form-bottom">
            <section className="note-info">
              <h3>Hướng dẫn</h3>
              <div className="huongdan">
                <p>- Sinh viên sử dụng tiếng Việt có dấu</p>
                <p>
                  - Nhập số lượng bằng 0 cho loại bảng điểm mà bạn không xin cấp
                </p>
                <p>
                  - Thời gian trả đơn: Sau 16h00 vào thứ 2.4.6 hàng tuần tại
                  Phòng đại học (A005)
                </p>
                <p>
                  - Thời hạn nhận bảng điểm: trong vòng 2 tuần tính từ ngày trả
                  bảng điểm, nếu quá hạn sinh viên không đến nhận Phòng đại học
                  sẽ hủy bỏ bảng điểm sinh viên đã đăng ký (không trả vào các
                  ngày nghỉ lễ, tết...)
                </p>
                <p>
                  <b>Bảng điểm tích lũy</b>: Hiển thị điểm trung bình tất cả các
                  môn học trong chương trình đào tạo của ngành sinh viên đã học
                  và có điểm trung bình môn (những môn có cùng mã môn mà sinh
                  viên học nhiều lần, sẽ hiển thị điểm và tính điểm của lần học
                  cao nhất. Bảng điểm tích lũy có thể hiện số tín chỉ sinh viên
                  tích lũy và điểm trung bình tích lũy từ năm nhất đến học kỳ
                  kết thúc gần nhất).
                </p>
                <p>
                  <b>Bảng điểm học kỳ</b>: Thể hiện điểm (tất cả các cột điểm)
                  của những môn sinh viên học trong học kỳ và có thể hiện điểm
                  trung bình học kỳ.
                </p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default FormCreate;
