import React, { useRef, useEffect, useState } from "react";
import FeatureBrandCards from "../cards/FeatureBrandCards";
import SlidersItem from "../sliders/SlidersItems";
import { bigDiscount } from "../../data/BigDiscount";
import CardCoursel from "./CardCoursel";
import { getCardWidth } from "../helper/SliderHelp/FourSliderHelper";

const FourSlider = ({ activeIndex }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(undefined);
  const className = { cardWidth: "bigDiscount" };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWidth(getCardWidth(ref));
      },
      []
    );
  }, [ref?.current]);
  return (
    <div className="fourSliderMain" ref={ref}>
      <CardCoursel style={{ transform: `translateX(${activeIndex}%)` }}>
        <SlidersItem>
          <FeatureBrandCards productData={bigDiscount} width={width} className={className} />
        </SlidersItem>
      </CardCoursel>
    </div>
  );
};

export default FourSlider;
