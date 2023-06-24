import React, { useEffect, useState } from "react";
import "./FormCreate.scss";
import { Breadcrumbs, Grid } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaShare } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Button from "../../../components/Button/Button";

const FormCreate = () => {
  const [listData, setListData] = useState([
    {
      index: 1,
      name: "Bảng điểm tích lũy",
      inputValue: "",
      calculatedValue: 0,
    },
    {
      index: 2,
      name: "Bảng điểm tất cả các học kỳ",
      inputValue: "",
      calculatedValue: 0,
    },
    {
      index: 3,
      name: "Bảng điểm tích lũy ngành 1",
      inputValue: "",
      calculatedValue: 0,
    },
    {
      index: 4,
      name: "Bảng điểm tích lũy ngành 2",
      inputValue: "",
      calculatedValue: 0,
    },
    {
      index: 5,
      name: "Bảng điểm tích lũy tiếng Anh ngành 1",
      inputValue: "",
      calculatedValue: 0,
    },
    {
      index: 6,
      name: "Bảng điểm tích lũy tiếng Anh ngành 2",
      inputValue: "",
      calculatedValue: 0,
    },
  ]);
  const [totalValue, setTotalValue] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const sum = listData.reduce((acc, item) => acc + item.calculatedValue, 0);
    setTotalValue(sum);
  }, [listData]);
  const handleInputChange = (index, event) => {
    const value = event.target.value;
    const updatedListData = [...listData];
    updatedListData[index].inputValue = value;
    updatedListData[index].calculatedValue = value * 3000;
    setListData(updatedListData);
  };
  const handleBack = () => {
    navigate("/nopdon");
    window.scrollTo(0, 0);
  };
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
                <ul>
                  <li>
                    <p>
                      <b>Bảng điểm tất cả học kỳ</b>: Thể hiện tất cả các học kỳ
                      sinh viên có điểm môn học từ năm nhất đến học kỳ kết thúc
                      gần nhất trên cùng 1 bảng điểm (phân theo từng học kỳ).
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Bảng điểm học kỳ hiện tại</b>: Bảng điểm thể hiện điểm
                      của học kỳ kết thúc gần nhất của sinh viên.
                    </p>
                  </li>
                </ul>
                <p>
                  <b>Bảng điểm tích lũy ngành 1</b>: Hiện nay là bảng điểm tích
                  lũy.
                </p>
                <p>
                  <b>Bảng điểm tích lũy ngành 2</b>: Chỉ cấp khi sinh viên có
                  đăng ký học ngành 2.
                </p>
                <p>
                  <b>Bảng điểm tích lũy Tiếng Anh ngành 1</b>: Là bảng điểm tích
                  lũy thể hiện bằng Tiếng Anh.
                </p>
                <p>
                  <b>Bảng điểm tích lũy Tiếng Anh ngành 2</b>: Là bảng điểm tích
                  lũy ngành 2 thể hiện bằng Tiếng Anh.
                </p>
              </div>
            </section>
            <section className="note-warning">
              <h3>Lưu ý!</h3>
              <i>
                - Sinh viên vui lòng nhập đúng và đầy đủ các thông tin bên dưới.
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
                <label htmlFor="">Hệ đào tạo</label>
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
                <label htmlFor="">Chuyên ngành</label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">Lớp</label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">Khối lớp</label>
                <input></input>
              </div>
              <div className="input-container">
                <label htmlFor="">
                  Số điện thoại <span style={{ color: "red" }}>*</span>
                </label>
                <input></input>
              </div>
              <div className="input-container" style={{ opacity: "0" }}>
                <label htmlFor="">
                  Số điện thoại <span style={{ color: "red" }}>*</span>
                </label>
                <input></input>
              </div>{" "}
              <div className="input-container">
                <label htmlFor="">
                  Năm học/Học kỳ nộp đơn <span style={{ color: "red" }}>*</span>
                </label>
                <input></input>
              </div>
            </section>
            <section className="table-container">
              <table>
                <tr>
                  <th>STT</th>
                  <th>Loại bảng điểm</th>
                  <th>Số bảng</th>
                  <th>Số tiền</th>
                </tr>
                {listData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.index}</td>
                      <td>{item.name}</td>
                      <td>
                        <input
                          value={item.inputValue}
                          style={{ border: "1px solid #e5e5e5" }}
                          onChange={(event) => handleInputChange(index, event)}
                          type="number"
                        />
                      </td>
                      <td>
                        <input
                          disabled="disabled"
                          placeholder="3,000"
                          value={item.calculatedValue}
                        />
                      </td>
                    </tr>
                  );
                })}
              </table>
            </section>
            <section className="sum-area">
              <div className="input-container">
                <label htmlFor="">Tổng tiền</label>
                <div style={{ width: "100%", display: "flex" }}>
                  <input
                    disabled
                    value={totalValue}
                    style={{ width: "80%" }}
                  ></input>
                  <input
                    disabled
                    style={{ width: "20%", textAlign: "center" }}
                    placeholder="VND"
                  ></input>
                </div>
              </div>
            </section>
            <section className="reason-area">
              <div className="input-container">
                <label htmlFor="">Lý do</label>
                <div style={{ width: "100%", display: "flex" }}>
                  <textarea></textarea>
                </div>
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

export default FormCreate;
