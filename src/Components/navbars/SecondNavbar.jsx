import React from "react";
import NavbarWrapper from "./NavbarWrapper";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import Input from "../input/Input";
import BazarLogo from "../../images/logo2.svg";
import Button from "../button/Button";
//

const className = {
  navMain: "secondNavBar",
};
const SecondNavbar = () => {
  return (
    <NavbarWrapper className={className}>
      <div className="secondNavLogo">
        <img src={BazarLogo} alt="bazarLogo" />
      </div>
      <div className="SecondNavInput">
       
        <span className="inputIcon">
          <span className="secondNavIcon">
            <AiOutlineSearch id="secondNavSearchIcon" />
          </span>
          <span className="secondNavInput">
            <Input placeholder="Searching For..." />
          </span>
        </span>
        <span>
          <Button
            value="All Categories"
            icon={<FaAngleDown />}
            className="secNavInpBtn"
          />
        </span>
      </div>

      <div className="secondNavIconSec">
      <span className="secNavIcon Avatar">
          <FaRegUser className="secIcon" />
        </span>
        <span className="secNavIcon">
          <AiOutlineShopping id="secIcon" />
        </span>
       
      </div>
    </NavbarWrapper>
  );
};

export default SecondNavbar;
