import React from "react";
import Card from "../Components/cards/Card";
import { flashDeal } from "../data/FlashDeal";
import "./screen.css";
import { BsLightningChargeFill } from "react-icons/bs";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";


const id = { cardWidth: "cardWidth1" };

const FlashDeals = () => {
  return (
    <div className="flashDealMain">
      <IconTxtHeader Icon={<BsLightningChargeFill />} text="Flash Deal" />
      <div className="flashDeal">
        <Card productData={flashDeal} id={id} />
      </div>
    </div>
  );
};

export default FlashDeals;
