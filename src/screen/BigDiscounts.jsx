import React from "react";
import FeatureBrandCards from "../Components/card/FeatureBrandCards"
import { bigDiscount } from "../data/BigDiscount";

const className = { cardWidth: "bigDiscount" };

const BigDiscounts = () => {
  return <div className="bigDiscountMain">
    <div className="bigDiscountCard">
      <FeatureBrandCards productData={bigDiscount} className={className}/>
    </div>
  </div>;
};

export default BigDiscounts;
