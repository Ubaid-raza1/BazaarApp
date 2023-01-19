import React from "react";
import { FaRegUser, FaBars } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import Logo from "../../images/bazaarSecondNavLogo.svg";

const Navbar = () => {
  return (
    <div className="NavbarMain">
      
      <div className="navFirstFaBarsIcon">
        <FaBars />
      </div>
      <div className="navFirstImg">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navFirstIcons">
        <AiOutlineSearch />
        <FaRegUser />
        <AiOutlineShopping />
      </div>
    </div>
  );
};

export default Navbar;
