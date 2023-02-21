import React from "react";
import DropDown from "../dropDown/DropDown";
import ThirdNavHelpList from "../helper/navbarHelper/ThirdNavHelpList";
import { DropDowntwo } from "../../data/DropDownData";

const ThirdNavbar = () => {
  return (
    <div className="thirdNavBar">
      <div className="thirdNavRightSide">
        <DropDown />
      </div>
      <div className="thirdNavLeftSide">
        <ThirdNavHelpList element={DropDowntwo} />
      </div>
    </div>
  );
};

export default ThirdNavbar;
