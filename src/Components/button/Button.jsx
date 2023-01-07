import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const Button = ({ value, icon, className, img }) => {
  return (
    <ButtonWrapper className={className}>
      <img src={img} alt="" />
      {value}
      {icon}
    </ButtonWrapper>
  );
};

export default Button;
