import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import { FaAngleRight } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import "./button.css";
//

const IconButton = ({
  className,
  onClick,
  onMouseEnter,
  toggle,
}) => {
  return (
    <ButtonWrapper
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <div className="thirdIconTxtNavbar">
        <span id="thirdNavIc">
          <BsFillGridFill id="iconBtnNav" />
        </span>
        <span id="thirdNavTxt">Categories</span>
      </div>
      <div
        className="thirdFaAngelLeftNavbarIcon"
        style={{ transform: !!toggle ? "rotate(90deg)" : "rotate(0deg)" }}
      >
        <FaAngleRight />
      </div>
    </ButtonWrapper>
  );
};

export default IconButton;
