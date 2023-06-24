import React from "react";
import { Breadcrumbs, Grid } from "@mui/material";
import "./FormAverage.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAirbnb, FaHome, FaShare } from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Button from "../../../components/Button/Button";
const FormAverage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/nopdon");
    window.scrollTo(0, 0);
  };
  return (
    <section className="formaverage">
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
          to="/taodon/DonXinDiemTrungBinh"
          style={{ textDecoration: "none", color: "#777777" }}
          className="text-bread"
        >
          Xem xét điểm trung bình (học kỳ/tích lũy/môn học - CQ)
        </Link>
      </Breadcrumbs>
      <section className="form-body">
        <section className="form-container">
          <header>
            Xem xét điểm trung bình (học kỳ/tích lũy/môn học - CQ)
          </header>
          <section className="form-bottom">
            <section className="note-info">
              <h3>Hướng dẫn</h3>
              <div className="huongdan">
                <p>
                  Đơn xin xem xét điểm được áp dụng trong các trường hợp: điểm
                  trung bình tích lũy hay điểm trung bình học kỳ hay điểm trung
                  bình môn học.
                </p>
                <p>
                  Mục lý do: sinh viên nhập các thông tin như điểm trung bình
                  sinh viên tính, điểm trung bình nhà trường công bố, ngày công
                  bố, cách sinh viên tính điểm, số môn sinh viên tính điểm trung
                  bình, lý do.
                </p>
              </div>
            </section>
            <section className="note-warning">
              <h3>Lưu ý!</h3>
              <i>
                Nếu thông tin sinh viên cung cấp không phù hợp loại đơn (sinh
                viên ghi thông tin phúc khảo, xin bảng điểm, ...) thì đơn đó sẽ
                không được giải quyết.
              </i>
            </section>
            <section className="area-infor">
              <div className="input-container">
                <label htmlFor="">Họ tên</label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">Mã người học</label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">Khoa</label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">Ngành</label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">Lớp</label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">
                  Số điện thoại <span style={{ color: "red" }}>*</span>
                </label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">
                  Năm học/Học kỳ nộp đơn <span style={{ color: "red" }}>*</span>
                </label>
                <input></input>
              </div>
              <div className="input-container" style={{ opacity: "0" }}>
                <label htmlFor="">
                  Năm học/Học kỳ nộp đơn <span style={{ color: "red" }}>*</span>
                </label>
                <input></input>
              </div>
              <div className="input-container-scored">
                <label htmlFor="">
                  Loại điểm <span style={{ color: "red" }}>*</span>
                </label>
                <select name="cars" id="cars">
                  <option value="1">Điểm trung bình tích lũy</option>
                  <option value="mercedes">Điểm trung bình học kỳ</option>
                  <option value="audi">Điểm trung bình môn học</option>
                </select>
              </div>

              <div className="input-container-scored">
                <label htmlFor="">Lý do</label>

                <textarea
                  style={{
                    width: "75%",
                    resize: "none",
                    border: "1px solid #e5e5e5",
                    outline: "none",
                    padding: "10px",
                    boxSizing: "border-box",
                  }}
                ></textarea>
              </div>
              <div
                style={{
                  marginBottom: "0",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "25%",
                    justifyContent: "flex-end",
                    padding: "5px 10px",
                    alignItems: "center",
                  }}
                >
                  <input type="checkbox"></input>
                </div>

                <p
                  style={{
                    color: "#e74c3c",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Sinh viên đã đọc hướng dẫn và đồng ý với lưu ý.
                </p>
              </div>
            </section>
          </section>
          <section className="footer-form">
            <Button
              name={"Quay lại"}
              icon={FaAirbnb}
              backgroundColor="#e74c3c"
              color="white"
              onClick={handleBack}
            />
            <Button
              name={"Nộp đơn"}
              icon={FaShare}
              backgroundColor="#3a7157"
              color="white"
              onClick={() => alert("Nộp đơn")}
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default FormAverage;
