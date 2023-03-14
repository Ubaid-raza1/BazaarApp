import React from "react";
import CardCoursel from "./CardCoursel";
import SlidersItems from "./SlidersItems";
import { flashDeal } from "../../data/FlashDeal";
import Card from "../cards/Card";

const SecondSlider = ({ activeIndex }) => {
  const id = { cardWidth: "cardWidth1" };
  return (
    <div className="SecondSliderMain">
      <CardCoursel style={{ transform: `translateX(${activeIndex}%)` }}>
        <SlidersItems style={{ width: "148%" }}>
          {flashDeal?.map((item) => {
            return <Card productData={item} id={id} itemId={item?.id} />;
          })}
          {flashDeal?.map((item) => {
            return <Card productData={item} id={id} itemId={item?.id} />;
          })}
        </SlidersItems>
      </CardCoursel>
    </div>
  );
};

export default SecondSlider;
