import React from "react";
import FeatureBrandCards from "../Components/cards/FeatureBrandCards"
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import { bigDiscount } from "../data/BigDiscount";

const className = { cardWidth: "bigDiscount" };

const BigDiscounts = () => {
  return <div className="bigDiscountMain">
    <IconTxtHeader text="Big Discount" Icon={""}/>
    <div className="bigDiscountCard">
      <FeatureBrandCards productData={bigDiscount} className={className}/>
    </div>
  </div>;
};

export default BigDiscounts;
