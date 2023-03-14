import React from "react";
import Button from "../button/Button";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import "./navbars.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const className = {
  navMain: "firstNav",
};

const FirstNavbar = () => {
  return (
    <div className="firstNavMain">
      <div className="firstNav">
        <div className="firstNavLeft">
          <div className="firstNavLogo">HOT</div>
          <div className="firstNavTxt">Free Express Shipping</div>
        </div>
        <div className="firstNavRight">
          <div className="firstNavBtnSec">
            <Button value="EN" icon={<FaAngleDown id="FaAgelDown"/>} className="firstNavBtn" />
          </div>
          <div className="firstNavIcons">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
          <div className="firstNavPlusIcon">
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNavbar;
