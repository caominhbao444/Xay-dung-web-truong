import React from "react";
import "./CardItemAnnouceNew.scss";
const CardItemAnnouceNew = (props) => {
  return (
    <div
      className="annoucenew-card-item"
      style={{
        backgroundColor: props.isOdd === false ? " #f9fadc" : "",
        borderLeft: `2px solid `,
        borderColor: props.isOdd === false ? " #f9fadc" : "",
      }}
    >
      <h5 style={{ fontSize: "12px" }}>
        THÔNG BÁO GIA HẠN HỌC THỜI GIAN NỘP HỌC PHÍ HỌC KỲ 3/2022-2023 (TB
        22/2023-PTC)
      </h5>
      <span style={{ fontSize: "13px", fontStyle: "italic" }}>
        [Phòng Tài chính] - 19/06/2023
      </span>
      <p style={{ fontSize: "13px", color: "#777777" }}>
        Sinh viên xem Danh sách thi giữa kỳ HK 3/2022-2023 trong file đính kèm.
      </p>
    </div>
  );
};

export default CardItemAnnouceNew;
