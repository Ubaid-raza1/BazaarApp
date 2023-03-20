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
  txt
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
        <span id="thirdNavTxt">{txt}</span>
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
