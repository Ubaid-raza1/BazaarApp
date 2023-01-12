import React from "react";
import { mobilePhone,mobilePhoneBrand,mobilePhoneShop } from "../data/MobilePhone";
import Card from "../Components/card/Card";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import "./screen.css";
import BrandAndShop from "../Components/cardButtons/BrandAndShop";

const id = { cardWidth: "cardWidth3" };
const cardButtonWidth = { widthButton: "widthButtondSec1" };


const MobilePhones = () => {
  return (
    <div className="carMain mobile">
      <BrandAndShop brand={mobilePhoneBrand} shop={mobilePhoneShop} id={cardButtonWidth}/>
      <div>
        <IconTxtHeader text="Mobile Phone" />
        <div className="carCard">
          <Card productData={mobilePhone} id={id} />;
        </div>
      </div>
    </div>
  );
};

export default MobilePhones;
