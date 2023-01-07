import React, { useState } from "react";
import {
  mobilePhoneBrand,
  mobilePhoneShop,
  mobilePhone,
} from "../data/MobilePhone";
import Button from "../Components/button/Button";
import Card from "../Components/card/Card";
import { FaAngleRight } from "react-icons/fa";
import "./screen.css";
const id = { cardWidth: "cardWidth3" };
const MobilePhones = () => {
  const [toggle, setToggle] = useState(true);
  const Brand = () => setToggle(true);
  const Shop = () => setToggle(false);
  return (
    <div className="cardMain">
      <div className="cardButton" style={{ width: toggle ? "77%" : "80%" }}>
        <div className="cardHeaderTxt">
          <h3
            className="cardBrandTxt"
            style={{ color: toggle ? "black" : "silver" }}
            onClick={Brand}
          >
            Brands
          </h3>
          <h3 className="cardSlash">|</h3>
          <h3
            className="cardShopTxt"
            onClick={Shop}
            style={{ color: toggle ? "silver" : "black" }}
          >
            Shops
          </h3>
        </div>
        <div className="cardBtn1">
          {toggle
            ? mobilePhoneBrand?.map((item) => {
                return <Button value={item.text} img={item.img} />;
              })
            : mobilePhoneShop?.map((item) => {
                return <Button value={item.text} img={item.img} />;
              })}
        </div>
        <div className="cardBtn2">
          <Button value={toggle ? "View All Brands" : "View All Shops"} />
        </div>
      </div>
      <div>
        <div className="cardHeader">
          <div className="cardTitle">Mobile Phones</div>
          <div className="cardTxtIcon">
            View all <FaAngleRight />
          </div>
        </div>
        <div className="cardCard">
          <Card productData={mobilePhone} id={id} />;
        </div>
      </div>
    </div>
  );
};

export default MobilePhones;
