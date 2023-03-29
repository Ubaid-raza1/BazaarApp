import React, { useRef } from "react";
import CardCoursel from "./CardCoursel";
import SlidersItems from "./SlidersItems";
import { flashDeal } from "../../data/FlashDeal";
import Card from "../cards/Card";
import { useEffect } from "react";
import { useState } from "react";
import { getCardWidth } from "../helper/SliderHelp/SecondSliderHelper";

const SecondSlider = ({ activeIndex, getCardData }) => {
  const id = { cardWidth: "cardWidth1" };
  const ref = useRef(null);
  const [width, setWidth] = useState(undefined);
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
    <div className="SecondSliderMain" ref={ref}>
      <CardCoursel style={{ transform: `translateX(${activeIndex}%)` }}>
        <SlidersItems>
          {flashDeal?.map((item) => {
            return (
              <Card
                getCardData={getCardData}
                productData={item}
                id={id}
                itemId={item?.id}
                width={width}
              />
            );
          })}
        </SlidersItems>
      </CardCoursel>
    </div>
  );
};

export default SecondSlider;
