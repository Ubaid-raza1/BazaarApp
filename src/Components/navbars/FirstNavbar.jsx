import React, { useState } from "react";
import Button from "../button/Button";
import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa";
import "./navbars.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FirstNavbar = () => {
  const [activated, setActivated] = useState(false);
  return (
    <div className="firstNavMain">
      <div className="firstNav">
        <div className="firstNavLeft">
          <span>
            <div className="firstNavLogo">HOT</div>
            <div className="firstNavTxt">Free Express Shipping</div>
          </span>
          <span style={{ display: activated ? "block" : "none" }}>
            <div id="IconsActivated">
              <div className="firstNavBtnSecTwo">
                <Button
                  value="EN"
                  icon={<FaAngleDown id="FaAgelDown" />}
                  className="firstNavBtn"
                />
              </div>
              <div className="firstNavIconsTwo">
                <FaTwitter />
                <FaFacebookF />
                <FaInstagram />
              </div>
            </div>
          </span>
        </div>
        <div
          className="firstNavRight"
          style={{ alignItems: activated ? "start" : "center" }}
        >
          <div className="firstNavBtnSec">
            <Button
              value="EN"
              icon={<FaAngleDown id="FaAgelDown" />}
              className="firstNavBtn"
            />
          </div>
          <div className="firstNavIcons">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
          <div
            className="firstNavPlusIcon"
            onClick={() => setActivated((prev) => !prev)}
          >
            {!activated ? <FaPlus /> : <FaMinus />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNavbar;
