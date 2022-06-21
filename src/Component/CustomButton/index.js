import React from "react";

const Button = (props) => {
  console.log("ddf", props);
  return (
    <button
      className={props.style}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
