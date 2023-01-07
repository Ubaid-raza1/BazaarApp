import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import {  FaAngleRight } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import "./button.css"
// 

const IconButton = ({className}) => {
  return (
    <ButtonWrapper className={className}>
      <div className="thirdIconTxtNavbar">
        <span id="thirdNavIc"><BsFillGridFill id="iconBtnNav"/></span>
        <span id="thirdNavTxt">Categories</span>
      </div>
      <div className="thirdFaAngelLeftNavbarIcon">
        <FaAngleRight />
      </div>
    </ButtonWrapper>
  );
};

export default IconButton;
