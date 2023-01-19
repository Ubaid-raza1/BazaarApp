import React from "react";
import IconButton from "../button/IconButton";
import NavbarHelper from "./NavbarHelper";

const thirdNavbar = () => {
  return (
    <div className="thirdNavBar">
      <div className="thirdNavRightSide">
        <IconButton className="thirdNavBtn" />
      </div>
      <div className="thirdNavLeftSide">
        <NavbarHelper Text="Home" />
        <NavbarHelper Text="Mega Menu" />
        <NavbarHelper Text="Full Screen Menu" />
        <NavbarHelper Text="Pages" />
        <NavbarHelper Text="User Account" />
        <NavbarHelper Text="Vendor Account" />
      </div>
    </div>
  );
};

export default thirdNavbar;
