import React from "react";
import "./AnnounceAll.scss";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { FaAngleRight, FaHome, FaSearch } from "react-icons/fa";
import Pagination from "../../../components/Pagination/Pagination";
import { FloatButton } from "antd";
const listType = [
  {
    index: 1,
    name: "Tất cả",
    value: "1",
  },
  {
    index: 2,
    name: "Tin tức cũ",
    value: "2",
  },
  {
    index: 3,
    name: "Bảo hiểm y tế",
    value: 3,
  },
  {
    index: 4,
    name: "Học vụ",
    value: 4,
  },
  {
    index: 5,
    name: "Lịch thi - danh sách thi",
    value: "5",
  },
  {
    index: 6,
    name: "Sự kiện",
    value: "6",
  },
  {
    index: 7,
    name: "Đăng ký môn học",
    value: "7",
  },
  {
    index: 8,
    name: "Thời khóa biểu",
    value: "8",
  },
  {
    index: "9",
    name: "Tốt nghiệp",
    value: "9",
  },
  {
    index: "10",
    name: "Sự kiện sắp diễn ra",
    value: "10",
  },
];
const listAnnouce = [
  {
    id: 1,
    name: "THÔNG BÁO V.V THAY ĐỔI THÔNG TIN NHÂN SỰ PHỤ TRÁCH CÔNG TÁC SINH VIÊN TẠI KHOA",
    date: "01/07/2023",
    cultury: "Công nghệ thông tin",
    content: `Kể từ ngày 01/7/2023, thầy Nguyễn Duy Khánh sẽ thôi công tác tại Khoa Công nghệ thông tin, do đó, các công tác do thầy Khánh phụ trách gồm các nội dung liên quan đến Công tác sinh viên, các học phần Tập sự nghề nghiệp, Kiến tập công nghiệp, Dự án CNTT1 sẽ được bàn giao lại cho Khoa.

    Mọi thông tin cần liên hệ, sinh viên gửi email đến cô Cao Phi Phụng (caophiphung@tdtu.edu.vn) hoặc Khoa CNTT (it@tdtu.edu.vn) để được hỗ trợ.`,
  },
  {
    id: 2,
    name: "Kiểm tra ghi nhận các hoạt động Khoa CNTT tổ chức",
    date: "27/06/2023",
    cultury: "Công nghệ thông tin",
    content: `Khoa CNTT thông báo đến các em về việc ghi nhận tham gia hoạt động trên hệ thống thông tin sinh viên các hoạt động sau:
    1. Hoạt động Hội thao truyền thống Khoa CNTT ngày 19/6-26/6/2023
    2. Hoạt động Cũ người mới ta và Ngày Hội cho em ngày 11/6-24/6/2023
    
    Sinh viên kiểm tra và phản hồi qua email thầy Khánh (nguyenduykhanh@tdtu.edu.vn) đến 15h00 ngày 30/06/2023.
    
    Sau thời gian trên, Khoa CNTT sẽ không giải quyết thêm bất kỳ phản hồi nào liên quan đến các hoạt động đã tổ chức trên.
    
    Trân trọng./.`,
  },
  {
    id: 3,
    name: "Kiểm tra ghi nhận các hoạt động Khoa CNTT tổ chức",
    date: "27/06/2023",
    cultury: "Công nghệ thông tin",
    content: `Khoa CNTT thông báo đến các em về việc ghi nhận tham gia hoạt động trên hệ thống thông tin sinh viên các hoạt động sau:
    1. Hoạt động Hội thao truyền thống Khoa CNTT ngày 19/6-26/6/2023
    2. Hoạt động Cũ người mới ta và Ngày Hội cho em ngày 11/6-24/6/2023
    
    Sinh viên kiểm tra và phản hồi qua email thầy Khánh (nguyenduykhanh@tdtu.edu.vn) đến 15h00 ngày 30/06/2023.
    
    Sau thời gian trên, Khoa CNTT sẽ không giải quyết thêm bất kỳ phản hồi nào liên quan đến các hoạt động đã tổ chức trên.
    
    Trân trọng./.`,
  },
  {
    id: 4,
    name: "Kiểm tra ghi nhận các hoạt động Khoa CNTT tổ chức",
    date: "27/06/2023",
    cultury: "Công nghệ thông tin",
    content: `Khoa CNTT thông báo đến các em về việc ghi nhận tham gia hoạt động trên hệ thống thông tin sinh viên các hoạt động sau:
    1. Hoạt động Hội thao truyền thống Khoa CNTT ngày 19/6-26/6/2023
    2. Hoạt động Cũ người mới ta và Ngày Hội cho em ngày 11/6-24/6/2023
    
    Sinh viên kiểm tra và phản hồi qua email thầy Khánh (nguyenduykhanh@tdtu.edu.vn) đến 15h00 ngày 30/06/2023.
    
    Sau thời gian trên, Khoa CNTT sẽ không giải quyết thêm bất kỳ phản hồi nào liên quan đến các hoạt động đã tổ chức trên.
    
    Trân trọng./.`,
  },
  {
    id: 5,
    name: "Kiểm tra ghi nhận các hoạt động Khoa CNTT tổ chức",
    date: "27/06/2023",
    cultury: "Công nghệ thông tin",
    content: `Khoa CNTT thông báo đến các em về việc ghi nhận tham gia hoạt động trên hệ thống thông tin sinh viên các hoạt động sau:
    1. Hoạt động Hội thao truyền thống Khoa CNTT ngày 19/6-26/6/2023
    2. Hoạt động Cũ người mới ta và Ngày Hội cho em ngày 11/6-24/6/2023
    
    Sinh viên kiểm tra và phản hồi qua email thầy Khánh (nguyenduykhanh@tdtu.edu.vn) đến 15h00 ngày 30/06/2023.
    
    Sau thời gian trên, Khoa CNTT sẽ không giải quyết thêm bất kỳ phản hồi nào liên quan đến các hoạt động đã tổ chức trên.
    
    Trân trọng./.`,
  },
  {
    id: 6,
    name: "Kiểm tra ghi nhận các hoạt động Khoa CNTT tổ chức",
    date: "27/06/2023",
    cultury: "Công nghệ thông tin",
    content: `Khoa CNTT thông báo đến các em về việc ghi nhận tham gia hoạt động trên hệ thống thông tin sinh viên các hoạt động sau:
    1. Hoạt động Hội thao truyền thống Khoa CNTT ngày 19/6-26/6/2023
    2. Hoạt động Cũ người mới ta và Ngày Hội cho em ngày 11/6-24/6/2023
    
    Sinh viên kiểm tra và phản hồi qua email thầy Khánh (nguyenduykhanh@tdtu.edu.vn) đến 15h00 ngày 30/06/2023.
    
    Sau thời gian trên, Khoa CNTT sẽ không giải quyết thêm bất kỳ phản hồi nào liên quan đến các hoạt động đã tổ chức trên.
    
    Trân trọng./.`,
  },
];
const AnnounceAll = () => {
  const [announceName, setAnnounceName] = React.useState("");
  const [announceContent, setAnnounceContent] = React.useState("");
  const [announceDate, setAnnounceDate] = React.useState("");
  const [announceType, setAnnounceType] = React.useState("");
  const [announceFaculty, setAnnounceFaculty] = React.useState("");
  const handleFind = () => {
    console.log("Type la", announceType);
    console.log("Name la", announceName);
    console.log("Noi dung la", announceContent);
    console.log("Ngay la", announceDate);
    console.log("Khoa la", announceFaculty);
  };
  return (
    <section className="annouceallpage">
      <Breadcrumbs
        separator={<FaAngleRight fontSize="small" />}
        aria-label="breadcrumb"
        style={{
          height: "40px",
          padding: "10px 20px",
          lineHeight: "20px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#ffffff",
          boxShadow: "#EDEDED 0px 2px 2px 0px",
        }}
      >
        <Link
          underline="hover"
          to="/thongbao"
          style={{
            textDecoration: "none",
            color: "#777777",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaHome />
          <span
            className="text-bread"
            style={{ textTransform: "uppercase", fontSize: "13px" }}
          >
            Trang chủ
          </span>
        </Link>
        <Link
          underline="hover"
          to="/thongbao"
          style={{
            textDecoration: "none",
            color: "#777777",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span
            className="text-bread"
            style={{ textTransform: "uppercase", fontSize: "13px" }}
          >
            Danh sách thông báo
          </span>
        </Link>
      </Breadcrumbs>
      <section className="annouce-body">
        <section className="content-container">
          <div className="item-first">
            <div className="announce-name">
              <div
                style={{
                  width: "10%",
                  backgroundColor: "#efefef",
                  display: "flex",
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaSearch
                  style={{
                    borderRight: "1px solid #e5e5e5",
                    color: "#777777",
                    cursor: "pointer",
                  }}
                />
              </div>
              <input
                placeholder="Tìm kiếm theo tên thông báo"
                style={{
                  display: "block",
                  width: "90%",
                  border: "none",
                  padding: "7px 5px 7px 10px",
                  outline: "none",
                }}
                value={announceName}
                onChange={(e) => setAnnounceName(e.target.value)}
              ></input>
            </div>
            <div className="announce-category">
              <select
                name="type"
                className="type"
                value={announceType}
                onChange={(e) => setAnnounceType(e.target.value)}
              >
                <option value="1" className="option">
                  Chọn thể loại
                </option>
                {listType.map((item, index) => {
                  return (
                    <option
                      value={item.value}
                      key={item.index}
                      className="option"
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="announce-date">
              <input
                type="date"
                className="input-date"
                value={announceDate}
                onChange={(e) => setAnnounceDate(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="item-second">
            <div className="announce-content">
              <div
                style={{
                  width: "10%",
                  backgroundColor: "#efefef",
                  display: "flex",
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaSearch
                  style={{
                    borderRight: "1px solid #e5e5e5",
                    color: "#777777",
                    cursor: "pointer",
                  }}
                />
              </div>
              <input
                placeholder="Tìm kiếm theo nội dung thông báo"
                style={{
                  display: "block",
                  width: "90%",
                  border: "none",
                  padding: "7px 5px 7px 10px",
                  outline: "none",
                }}
                value={announceContent}
                onChange={(e) => setAnnounceContent(e.target.value)}
              ></input>
            </div>
            <div className="announce-cultury">
              <select
                name="faculty"
                className="type"
                value={announceFaculty}
                onChange={(e) => setAnnounceFaculty(e.target.value)}
              >
                <option value="1" className="option">
                  Chọn Phòng/Khoa
                </option>
                {listType.map((item, index) => {
                  return (
                    <option
                      value={item.value}
                      key={item.index}
                      className="option"
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="announce-button">
              <button onClick={handleFind}>
                <FaSearch />
                Tìm kiếm
              </button>
            </div>
          </div>
          <section className="list-announce">
            {listAnnouce.map((item, index) => {
              return (
                <div
                  className="announce-item"
                  style={{
                    backgroundColor: item.id % 2 === 0 ? "#f9f9f9" : "#f9fadc",
                  }}
                  key={item.index}
                >
                  <h4>{item.name}</h4>
                  <span className="content">
                    Kể từ ngày {item.content.slice(0, 100)}..
                  </span>
                  <div className="detail">
                    <span style={{ color: "#777777", fontSize: "13px" }}>
                      Khoa {item.cultury} | Ngày đăng {item.date}
                    </span>
                    <div className="btn-detail">Chi tiết thông báo</div>
                  </div>
                </div>
              );
            })}
            <Pagination />
          </section>
        </section>
      </section>
      <FloatButton.BackTop />
    </section>
  );
};

export default AnnounceAll;
