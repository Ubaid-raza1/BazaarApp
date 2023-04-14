import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import FourSlider from "../Components/sliders/FourSlider";
import { BiGift } from "react-icons/bi";

const BigDiscounts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Next = () => {
    if (window.innerWidth < 370) {
      if (activeIndex > -860) setActiveIndex(activeIndex - 108);
    } else if (window.innerWidth < 650) {
      if (activeIndex > -363.5) setActiveIndex(activeIndex - 52);
    } else if (window.innerWidth < 950) {
      if (activeIndex > -127.5) setActiveIndex(activeIndex - 25.5);
    } else if (window?.innerWidth > 950) {
      if (activeIndex > -51) setActiveIndex(activeIndex - 17);
    }
    // else setActiveIndex(0);
  };

  const Prev = () => {
    if (window.innerWidth < 370) {
      if (activeIndex < 0) setActiveIndex(activeIndex + 108);
    } else if (window.innerWidth < 650) {
      if (activeIndex < 0) setActiveIndex(activeIndex + 52);
    } else if (window.innerWidth < 950) {
      if (activeIndex < 0) setActiveIndex(activeIndex + 25.5);
    } else if (window?.innerWidth > 950) {
      if (activeIndex < 0) setActiveIndex(activeIndex + 17);
    }
    // if (activeIndex < 0) setActiveIndex(activeIndex + 17);
    // else setActiveIndex(-74.64);
  };
  return (
    <div className="bigDiscountMain">
      <IconTxtHeader text="Big Discount" Icon={<BiGift id="HeaderIcon"/>} />
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
