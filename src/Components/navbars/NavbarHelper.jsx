import React from "react";
import { FaAngleDown } from "react-icons/fa";

const NavbarHelper = ({ Text}) => {
  return (
    <div className="mainHeaderValue">
      <div className="headerIconTxt">
        <span className="headertxt">{Text}</span>
        <span className="headerIcon">
          <FaAngleDown />
        </span>
      </div>
    </div>
  );
};

export default NavbarHelper;
