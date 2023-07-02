import React from "react";
import "./Loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <div class="loader">
        <div class="loader-text">Đang tải...</div>
        <div class="loader-bar"></div>
      </div>
    </div>
  );
};

export default Loading;
