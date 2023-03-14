import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import FourSlider from "../Components/sliders/FourSlider";

const BigDiscounts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Next = () => {
    if (activeIndex > -51) setActiveIndex(activeIndex - 17);
    // else setActiveIndex(0);
  };

  const Prev = () => {
    if (activeIndex < 0) setActiveIndex(activeIndex + 17);
    // else setActiveIndex(-74.64);
  };
  return (
    <div className="bigDiscountMain">
      <IconTxtHeader text="Big Discount" Icon={""} />
      <div className="bigDiscountCard">
        <FourSlider activeIndex={activeIndex} />
        <div className="topCardIndicator">
          <BsArrowLeftCircleFill id="PrevIcon" onClick={Prev} />
          <BsArrowRightCircleFill id="NextIcon" onClick={Next} />
        </div>
      </div>
    </div>
  );
};

export default BigDiscounts;
