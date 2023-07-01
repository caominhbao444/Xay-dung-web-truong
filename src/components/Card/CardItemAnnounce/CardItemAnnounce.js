import React from "react";
import "./CardItemAnnounce.scss";
import {
  FaHome,
  FaBullhorn,
  FaArrowCircleLeft,
  FaPinterestP,
} from "react-icons/fa";
const CardItemAnnounce = () => {
  return (
    <div className="annouce-card-item">
      <h5>
        THÔNG BÁO GIA HẠN HỌC THỜI GIAN NỘP HỌC PHÍ HỌC KỲ 3/2022-2023 (TB
        22/2023-PTC)
      </h5>
      <span style={{ fontSize: "13px", fontStyle: "italic" }}>
        [Phòng Tài chính] - 19/06/2023
      </span>
    </div>
  );
};

export default CardItemAnnounce;
