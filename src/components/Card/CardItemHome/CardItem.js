import React from "react";
import "./CardItem.scss";
import { useNavigate } from "react-router-dom";
const CardItem = (props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`${props.path}`);
    window.scrollTo(0, 0);
  };
  return (
    <section
      className="card-item"
      style={{
        backgroundColor:
          props.index === 1 ||
          props.index === 3 ||
          props.index === 4 ||
          props.index === 6
            ? "#e6e7e8"
            : "white",
      }}
      onClick={handleNavigate}
    >
      <img src={props.img} alt=""></img>
      <h3>{props.title}</h3>
    </section>
  );
};

export default CardItem;
