import React from "react";
import { topCategoryData } from "../../data/TopCategory";
import TopCategoryCard from "../cards/TopCategoryCard";
import CardCoursel from "./CardCoursel";
import SlidersItems from "./SlidersItems";

const ThirdSlider = ({ activeIndex }) => {
  return (
    <div className="thirdSliderMain">
      <CardCoursel style={{ transform: `translateX(${activeIndex}%)` }}>
        <SlidersItems id="thirdSliderWidth">
          <TopCategoryCard topCategoryData={topCategoryData} />
        </SlidersItems>
      </CardCoursel>
    </div>
  );
};

export default ThirdSlider;
