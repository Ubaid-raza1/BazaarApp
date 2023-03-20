import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BsGrid, BsHouseDoor } from "react-icons/bs";
import FooterNavbarHelper from "../helper/navbarHelper/FooterNavbarHelper";
import { useSelector } from "react-redux";

const FooterNavbar = () => {
  const item = useSelector((state) => state?.cardCount);
  return (
    <div className="FooterNavbarMain">
      <div className="FooterNav">
        <FooterNavbarHelper
          icon={<BsHouseDoor id="footerIcon" />}
          txt="Home"
          path="/"
        />
        <FooterNavbarHelper icon={<BsGrid id="footerIcon" />} txt="Category" />
        <FooterNavbarHelper
          icon={<AiOutlineShopping id="footerIcon" />}
          txt="Cart"
          path="/cart"
          item={item}
        />
        <FooterNavbarHelper
          icon={<FaRegUser id="footerIcon" />}
          txt="Account"
        />
      </div>
    </div>
  );
};

export default FooterNavbar;
