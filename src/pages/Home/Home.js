import { Link, useNavigate } from "react-router-dom";
import "./Home.scss";
import Logo from "../../assets/logo.png";
import {
  FaHome,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShareAlt,
  FaShoppingBag,
  FaThList,
  FaSignOutAlt,
  FaNewspaper,
} from "react-icons/fa";
import Thongbao1 from "../../assets/thongbao1.jpg";
import Thongbao2 from "../../assets/thongbao2.jpg";
import Thongbao3 from "../../assets/thongbao3.jpg";
import Thongbao4 from "../../assets/thongbao4.jpg";
import Quyche from "../../assets/quy-che.png";
import Daotao from "../../assets/dao-tao.png";
import Hoctap from "../../assets/hoc-tap.png";
import Ctsv from "../../assets/ctsv.png";
import Hocphi from "../../assets/hoc-phi.png";
import Tuvan from "../../assets/tu-van.png";
import Khaosat from "../../assets/khao-sat.png";
import Nopdon from "../../assets/nop-don.png";
import CardItem from "../../components/Card/CardItemHome/CardItem";
import CardNews from "../../components/Card/Card/CardNews";
import useAuth from "../../hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
const listData = [
  {
    img: Quyche,
    title: "QUY ĐỊNH - QUY CHẾ",
    path: "/quydinh",
  },
  {
    img: Daotao,
    title: "ĐÀO TẠO",
    path: "/quydinh",
  },
  {
    img: Hoctap,
    title: "QUẢN LÝ HỌC TẬP",
    path: "/quydinh",
  },
  {
    img: Ctsv,
    title: "CÔNG TÁC SINH VIÊN",
    path: "/quydinh",
  },
  {
    img: Hocphi,
    title: "HỌC PHÍ - PHÍ DỊCH VỤ",
    path: "/quydinh",
  },
  {
    img: Tuvan,
    title: "TƯ VẤN - HỖ TRỢ",
    path: "/quydinh",
  },
  {
    img: Khaosat,
    title: "KHẢO SÁT",
    path: "/quydinh",
  },
  {
    img: Nopdon,
    title: "NỘP ĐƠN",
    path: "/nopdon",
  },
];
const listDataNews = [
  {
    title: `Đăng ký tham dự buổi chuyên đề trực tuyến "Sốt xuất huyết
    Dengue và những điều cần lưu ý"`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham dự buổi chuyên đề trực tuyến "Sốt xuất huyết
    Dengue và những điều cần lưu ý"`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham dự buổi chuyên đề trực tuyến "Sốt xuất huyết
    Dengue và những điều cần lưu ý"`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham dự buổi chuyên đề trực tuyến "Sốt xuất huyết
    Dengue và những điều cần lưu ý"`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham dự buổi chuyên đề trực tuyến "Sốt xuất huyết
    Dengue và những điều cần lưu ý"`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham dự buổi chuyên đề trực tuyến "Sốt xuất huyết
    Dengue và những điều cần lưu ý"`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham dự buổi chuyên đề trực tuyến "Sốt xuất huyết
    Dengue và những điều cần lưu ý"`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham dự buổi chuyên đề trực tuyến "Sốt xuất huyết
    Dengue và những điều cần lưu ý"`,
    date: "13/06/2023",
  },
  {
    title: `Danh sách thi cuối kỳ HK 2/2022-2023 (Sinh viên khóa tuyển sinh 2022)`,
    date: "13/06/2023",
  },
  {
    title: `ĐĂNG KÝ THAM GIA CỔ VŨ VÒNG BÁN KẾT CUỘC THI NÉT ĐẸP SINH VIÊN TRƯỜNG ĐẠI HỌC TÔN ĐỨC THẮNG LẦN 4, NĂM HỌC 2022 - 2023 (09/6/2023)`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham gia hiến máu tình nguyện`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham gia hiến máu tình nguyện`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham gia hiến máu tình nguyện`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham gia hiến máu tình nguyện`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham gia hiến máu tình nguyện`,
    date: "13/06/2023",
  },
  {
    title: `Đăng ký tham gia hiến máu tình nguyện`,
    date: "13/06/2023",
  },
];
const listNews = [
  {
    title:
      "ĐỐI THOẠI SINH VIÊN TRƯỜNG ĐẠI HỌC TÔN ĐỨC THẮNG NĂM HỌC 2022 - 2023",
    img: Thongbao1,
    content:
      "Chiều ngày 8/6/2023, Trường Đại học Tôn Đức Thắng đã tổ chức buổi đối thoại sinh viên năm học 2022 - 2023.",
  },
  {
    title:
      "TRƯỜNG ĐẠI HỌC TÔN ĐỨC THẮNG PHÁT TRIỂN THÊM NHIỀU HOẠT ĐỘNG HỢP TÁC QUỐC TẾ MỚI",
    img: Thongbao2,
    content:
      "Trong chuyến công tác Châu Âu từ ngày 24/5 đến ngày 2/6/2023, Nhà trường đã làm việc và trao đổi thêm nhiều chương trình hợp tác tiềm năng với các đối tác và trường đại học uy tín ...",
  },
  {
    title:
      "LÃNH ĐẠO TRƯỜNG ĐẠI HỌC TÔN ĐỨC THẮNG THĂM VÀ LÀM VIỆC VỚI ĐẠI SỨ QUÁN VIỆT NAM TẠI CỘNG HÒA SÉC, LIÊN HIỆP HỘI NGƯỜI VIỆT NAM TẠI CHÂU ÂU",
    img: Thongbao3,
    content:
      "Chiều ngày 01/06/2023, lãnh đạo Trường Đại học Tôn Đức Thắng đã đến thăm và làm việc với Đại sứ quán Việt Nam tại Cộng hòa Séc.",
  },
  {
    title: "TẾT THIẾU NHI NĂM 2023 TẠI TRƯỜNG ĐẠI HỌC TÔN ĐỨC THẮNG",
    img: Thongbao4,
    content:
      "Chiều ngày 01/06/2023, Công đoàn cơ sở Trường Đại học Tôn Đức Thắng đã tổ chức chương trình giao lưu và trao Học bổng Nguyễn Đức Cảnh cho các cháu thiếu nhi ...",
  },
];
const Home = () => {
  const { username, fullname, faculty, roleName } = useAuth();

  const navigate = useNavigate();
  const handleNews = () => {
    navigate("/thongbao");
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleRedux = () => {};
  return (
    <section className="homepage">
      <header className="header-homepage">
        <img src={Logo} alt="" width={70} height={50} />
        <h2>CỔNG THÔNG TIN SINH VIÊN</h2>
      </header>
      <section className="banner">
        <span className="text-name">Cao Minh Bảo (518H0473)</span>
        <Link
          to="/admin/home"
          style={{
            display: roleName === "admin" ? "flex" : "none",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaHome className="icon" />
          <span className="text-logout">Quản lý hệ thống</span>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          <FaHome className="icon" />
          <span className="text-logout">Đăng xuất</span>
        </div>
      </section>
      <section className="carousel">
        <section className="carousel-slides">
          <p>
            Xem kết quả dự xét học bổng học kỳ 1 năm học 2022 -2023 tại đây.
          </p>
          <p>
            Thực hiện đánh giá chất lượng tiếp thu bài giảng (16/3/2022 -
            27/3/2022). Nhấn tại đây.
          </p>
          <p>Cập nhật thông tin phòng chống COVID-19 tại đây</p>
        </section>
      </section>
      <section className="event">
        <section className="body-container">
          <section className="left-container">
            <div className="card-container">
              {listData.map((item, index) => {
                return (
                  <CardItem
                    title={item.title}
                    img={item.img}
                    key={index}
                    path={item.path}
                    index={index}
                  />
                );
              })}
            </div>
            <div className="news-area">
              <div className="header-news-area">
                <FaNewspaper className="icon-news" />
                <h2>TIN TỨC</h2>
              </div>
              <div className="body-news-area">
                {listNews.map((item, index) => {
                  return (
                    <CardNews
                      title={item.title}
                      img={item.img}
                      content={item.content}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <section className="right-container">
            <div className="header-news" onClick={handleNews}>
              <FaNewspaper className="icon-news" />
              <h2>THÔNG BÁO</h2>
            </div>
            <div className="body-news">
              <div className="body-news-header">
                <div className="tab-header">Thông báo mới</div>
                <div className="tab-header">Thông báo quan trọng</div>
              </div>
              <div className="body-news-content">
                {listDataNews.map((item, index) => {
                  if (index < 10) {
                    return (
                      <div className="news-item" key={index}>
                        <h4>{item.title}</h4>
                        <span>{item.date}</span>
                      </div>
                    );
                  }
                })}
                <div className="last-item">
                  <span>Xem thêm</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      {/* <Link to="/thongbao">Thông báo</Link>
      <Link to="/nopdon">Đơn</Link> */}
    </section>
  );
};

export default Home;
