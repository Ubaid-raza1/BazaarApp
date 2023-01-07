import React from "react";
import IconButton from "../button/IconButton";
import NavbarHelper from "./NavbarHelper";
import NavbarWrapper from "./NavbarWrapper";

const className = {
  navMain: "thirdNavBar",
};

const thirdNavbar = () => {
  return (
    <NavbarWrapper className={className}>
       <div className="thirdNavRightSide">
        <IconButton className="thirdNavBtn"/>
      </div>
      <div className="thirdNavLeftSide">
        <NavbarHelper Text="Home" />
        <NavbarHelper Text="Mega Menu" />
        <NavbarHelper Text="Full Screen Menu" />
        <NavbarHelper Text="Pages" />
        <NavbarHelper Text="User Account" />
        <NavbarHelper Text="Vendor Account" />
      </div>
     
    </NavbarWrapper>
  );
};

export default thirdNavbar;
