import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const Button = ({ value, icon, className, img, onClick }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      <img src={img} alt="" />
      {value}
      {icon}
    </ButtonWrapper>
  );
};

export default Button;
