import React from "react";
import NavbarWrapper from "./NavbarWrapper";
import Button from "../button/Button";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ImPhone } from "react-icons/im";
import "./navbars.css";

const className = {
  navMain: "firstNav",
};

const FirstNavbar = () => {
  return (
    <NavbarWrapper className={className}>
      
      <div className="firstNavRight-side">
       
        <div className="rightFirstNavText">
          <span className="rightIcon">
            <ImPhone id="rightIcon" />
          </span>
          <span className="rightTxt">+88012 3456 7894</span>
        </div>
        <div className="rightFirstNavText">
          <span className="rightIcon">
            <AiOutlineMail id="rightIcon" />
          </span>
          <span className="rightTxt">support@ui-lib.com</span>
        </div>
      </div>
      <div className="firstNavLeft-side">
        <span className=" faNaLi">
          <a href="#">Theme FAQ"s</a>
        </span>
        <span className="firstNavLink">
          <a href="#">?Need Help</a>
        </span>
        <span className="firNavBtn2">
          <Button value="EN" icon={<FaAngleDown />} className="firstNavBtn" />
        </span>
        <span className="firNavBtn1">
          <Button value="USD" icon={<FaAngleDown />} className="firstNavBtn" />
        </span>
      </div>
    </NavbarWrapper>
  );
};

export default FirstNavbar;
