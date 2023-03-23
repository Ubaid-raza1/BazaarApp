import React, { useEffect, useState } from "react";
import { FaRegUser, FaBars } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import Logo from "../../images/bazaarSecondNavLogo.svg";
import Sidebar from "../sideBar/Sidebar";
import { useSelector } from "react-redux";
import FullScreenSideBar from "../sideBar/FullScreenSideBar";

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [sticky, setSticky] = useState(false);
  const [indexTwo, setIndexTwo] = useState(0);
  const Item = useSelector((state) => state?.cardCount);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={`${sticky ? "NavbarMainOne" : "NavbarMain"}`}>
      <div className="navFirstFaBarsIcon">
        <FaBars id="NavfaBar" onClick={() => setIndexTwo(1)} />
      </div>
      <div className="navFirstImg">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navFirstIcons">
        <AiOutlineSearch id="faSearch" />
        <FaRegUser id="faUser" />
        <span className="shoopingIcon">
          <AiOutlineShopping id="faShop" onClick={() => setIndex(1)} />
          {!!Item?.length && (
            <span className="sidebarItemValue">{Item?.length}</span>
          )}
        </span>
      </div>
      <Sidebar setIndex={setIndex} index={index} />
      <FullScreenSideBar setIndexTwo={setIndexTwo} indexTwo={indexTwo} />
    </div>
  );
};

export default Navbar;
