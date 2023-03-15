import React, { useState } from "react";
import "./screen.css";
import { BsLightningChargeFill } from "react-icons/bs";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import SecondSlider from "../Components/sliders/SecondSlider";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const id = { cardWidth: "cardWidth1" };

const FlashDeals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Next = () => {
    if (activeIndex > -74) setActiveIndex(activeIndex - 18.5);
    else setActiveIndex(0);
  };

  const Prev = () => {
    if (activeIndex < 0) setActiveIndex(activeIndex + 18.5);
    else setActiveIndex(-74);
  };

  return (
    <div className="flashDealMain">
      <IconTxtHeader Icon={<BsLightningChargeFill />} text="Flash Deal" />
      <div className="flashDeal">
        <SecondSlider activeIndex={activeIndex} />
        <div className="cardIndicator">
          <BsArrowLeftCircleFill id="PrevIcon" onClick={Prev} />
          <BsArrowRightCircleFill id="NextIcon" onClick={Next} />
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
