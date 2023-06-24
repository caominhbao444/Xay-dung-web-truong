import React from "react";

const Button = (props) => {
  const Icon = props.icon;
  console.log(Icon);
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5px",
        alignItems: "center",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        padding: "10px 15px",
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}
      onClick={props.onClick}
    >
      {Icon && <Icon />}
      {props.name}
    </button>
  );
};

export default Button;
