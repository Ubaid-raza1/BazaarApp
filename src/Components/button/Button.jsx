import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const Button = ({ value, icon, className, img, onClick, style }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick} style={style}>
      <img src={img} alt="" />
      {value}
      {icon}
    </ButtonWrapper>
  );
};

export default Button;
