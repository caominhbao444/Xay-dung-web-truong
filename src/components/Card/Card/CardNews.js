import React from "react";
import "./CardNews.scss";
const CardNews = (props) => {
  return (
    <section className="card-news">
      <img src={props.img} alt="" />
      <h5>{props.title}</h5>
      <p>{props.content}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <span>Xem thêm</span>
      </div>
    </section>
  );
};

export default CardNews;
