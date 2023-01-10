import React from "react";
import Card from "../Components/card/Card";
import { flashDeal } from "../data/FlashDeal";
import "./screen.css";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

// BsLightningChargeFill
const id = { cardWidth: "cardWidth1" };
const FlashDeals = () => {
  return (
    <div className="flashDealMain">
      <div className="flashDealHeader">
        <div className="flashDealTxt">
          <span className="flashDealUnderIcon">
            <BsLightningChargeFill id="chargerIcon"/>
          </span >
          <span className="flashDealUnderTxt">Flash Deals</span>
        </div>
        <div className="flashDealTxtIcon">
          View all <FaAngleRight />
        </div>
      </div>
      <div className="flashDeal">
        <Card productData={flashDeal} id={id} />
      </div>
    </div>
  );
};

export default FlashDeals;
