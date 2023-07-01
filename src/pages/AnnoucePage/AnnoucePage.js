import { Breadcrumbs } from "@mui/material";
import React, { useRef } from "react";
import {
  FaHome,
  FaBullhorn,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import allImg from "../../assets/allannouce.jpg";
import oldImg from "../../assets/oldannounce.jpg";
import yteImg from "../../assets/yteannounce.jpg";
import hocvuImg from "../../assets/hocvuannouce.jpg";
import eventImg from "../../assets/eventannouce.jpg";
import lichthiImg from "../../assets/lichthiannouce.jpg";

import "./AnnoucePage.scss";
import CardItemAnnounce from "../../components/Card/CardItemAnnounce/CardItemAnnounce";
import CardItemAnnouceNew from "../../components/Card/CardItemAnnouceNew/CardItemAnnouceNew";
const AnnoucePage = () => {
  const containerRef = useRef(null);
  const scrollToLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    }
  };

  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    }
  };
  return (
    <section className="annoucepage">
      <Breadcrumbs
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
          <span className="text-bread">Trang chủ</span>
        </Link>
      </Breadcrumbs>
      <section className="annouce-body">
        <section className="gird-container" ref={containerRef}>
          <div className="item">
            <img
              src={allImg}
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h5>Tất cả</h5>
            <p>53 Tin chưa đọc</p>
          </div>
          <div className="item">
            <img
              src={oldImg}
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h5>Tin tức cũ</h5>
            <p>53 Tin chưa đọc</p>
          </div>
          <div className="item">
            <img
              src={yteImg}
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h5>Bảo hiểm y tế</h5>
            <p>53 Tin chưa đọc</p>
          </div>
          <div className="item">
            <img
              src={hocvuImg}
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h5>Học vụ</h5>
          </div>
          <div className="item">
            <img
              src={eventImg}
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h5>Sự kiện</h5>
          </div>
          <div className="item">
            <img
              src={lichthiImg}
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h5>Lịch thi</h5>
          </div>
        </section>
        <div className="btn-container">
          <button onClick={scrollToLeft}>
            <FaArrowCircleLeft style={{ display: "block" }} />
          </button>
          <button onClick={scrollToRight}>
            <FaArrowCircleRight style={{ display: "block" }} />
          </button>
        </div>
        <section className="annouce-item-container">
          <section className="annouce-item-left">
            <header
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "10px",
                borderBottom: "1px solid #E5e5e5",
              }}
            >
              <h3>
                <FaStar className="icon-star" />
                Thông báo quan trọng
              </h3>
              <span>Xem tất cả</span>
            </header>
            <section className="annouce-list-container">
              <CardItemAnnounce />
              <CardItemAnnounce />
              <CardItemAnnounce />
              <CardItemAnnounce />
              <CardItemAnnounce />
              <CardItemAnnounce />
            </section>
          </section>
          <section className="annouce-item-right">
            <header
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "10px",
                borderBottom: "1px solid #E5e5e5",
              }}
            >
              <h3>
                <FaStar className="icon-star" />
                Thông báo mới
              </h3>
              <span>Xem tất cả</span>
            </header>
            <section className="annouce-list-container">
              <CardItemAnnouceNew isOdd={false} />
              <CardItemAnnouceNew isOdd={true} />
              <CardItemAnnouceNew isOdd={false} />
              <CardItemAnnouceNew isOdd={true} />
              <CardItemAnnouceNew isOdd={false} />
              <CardItemAnnouceNew isOdd={true} />
              <CardItemAnnouceNew isOdd={false} />
              <CardItemAnnouceNew isOdd={true} />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AnnoucePage;
