import React from "react";
import FeatureBrandCards from "../cards/FeatureBrandCards";
import SlidersItem from "../sliders/SlidersItems";
import { bigDiscount } from "../../data/BigDiscount";
import CardCoursel from "./CardCoursel";

const FourSlider = ({ activeIndex }) => {
  const className = { cardWidth: "bigDiscount" };
  return (
    <div className="fourSliderMain">
      <CardCoursel style={{ transform: `translateX(${activeIndex}%)` }}>
        <SlidersItem style={{ width: "151%" }}>
          <FeatureBrandCards productData={bigDiscount} className={className} />
        </SlidersItem>
      </CardCoursel>
    </div>
  );
};

export default FourSlider;
