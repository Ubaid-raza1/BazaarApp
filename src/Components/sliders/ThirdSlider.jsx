import React from "react";
import { topCategoryData } from "../../data/TopCategory";
import CardCoursel from "./CardCoursel";
import SlidersItems from "./SlidersItems";

const ThirdSlider = ({ activeIndex }) => {
  return (
    <div className="thirdSliderMain">
      <CardCoursel style={{ transform: `translateX(${activeIndex}%)` }}>
        <SlidersItems style={{ width: "168%" }}>
          {topCategoryData?.map((item) => {
            return (
              <div className="topCategiesImgTxt">
                <img src={item?.img} alt="category" />
                <div className="topCategoriesTxt">
                  <span id="topCategoriesTxt1">{item?.text}</span>
                  <span id="topCategoriesTxt2">3k order this week</span>
                </div>
              </div>
            );
          })}
        </SlidersItems>
      </CardCoursel>
    </div>
  );
};

export default ThirdSlider;
