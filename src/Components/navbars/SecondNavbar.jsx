import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import Input from "../input/Input";
import BazarLogo from "../../images/logo2.svg";
import Button from "../button/Button";
import Sidebar from "../sideBar/Sidebar";
import { useSelector } from "react-redux";
import FooterNavbar from "./FooterNavbar";
//

const SecondNavbar = () => {
  const [index, setIndex] = useState(0);
  const check = () => setIndex(1);
  const Item = useSelector((state) => state?.cardCount);
  return (
    <>
      <div className="secondNavBar">
        <div className="secondNavLogo">
          <img src={BazarLogo} alt="bazarLogo" />
        </div>
        <div className="SecondNavInputMain">
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
        </div>
        <div className="secondNavIconSec">
          <span className="secNavIcon Avatar">
            <FaRegUser className="secIcon" />
          </span>
          <span className="secNavIcon">
            <AiOutlineShopping id="secIcon" onClick={check} />
            {!!Item?.length && (
              <span className="sidebarItemValue">{Item?.length}</span>
            )}
          </span>
        </div>
      </div>

      <Sidebar setIndex={setIndex} index={index} />
      
    </>
  );
};

export default SecondNavbar;
