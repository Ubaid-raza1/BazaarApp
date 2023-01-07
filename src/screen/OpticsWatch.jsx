import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Button from "../Components/button/Button";
import Card from "../Components/card/Card";
import {
  opticsWatch,
  opticsWatchBrand,
  opticsWatchShop,
} from "../data/OpticsWatch";
import "./screen.css";

const id = { cardWidth: "cardWidth3" };

const OpticsWatch = () => {
  const [toggle, setToggle] = useState(true);
  const Brand = () => setToggle(true);
  const Shop = () => setToggle(false);
  return (
    <div className="cardMain">
      <div className="cardButton" style={{ width: toggle ? "82%" : "88%" }}>
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
            ? opticsWatchBrand?.map((item) => {
                return <Button value={item.text} img={item.img} />;
              })
            : opticsWatchShop?.map((item) => {
                return <Button value={item.text} img={item.img} />;
              })}
        </div>
        <div className="cardBtn2">
          <Button value={toggle ? "View All Brands" : "View All Shops"} />
        </div>
      </div>
      <div>
        <div className="cardHeader">
          <div className="cardTitle">Optics / Watch</div>
          <div className="cardTxtIcon">
            View all <FaAngleRight />
          </div>
        </div>
        <div className="cardCard">
          <Card productData={opticsWatch} id={id} />;
        </div>
      </div>
    </div>
  );
};

export default OpticsWatch;
