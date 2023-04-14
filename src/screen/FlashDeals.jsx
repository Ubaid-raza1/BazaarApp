import React, { useState } from "react";
import "./screen.css";
import { BsLightningChargeFill } from "react-icons/bs";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import SecondSlider from "../Components/sliders/SecondSlider";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import CardModal from "../Components/modals/CardModal";

const FlashDeals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [CardModalData, setCardModalData] = useState();
  const [open, setOpen] = useState(false);

  !!open
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  const getCardData = (CardData) => {
    setCardModalData(CardData);
    setOpen(true);
  };

  const Next = () => {
    if (window.innerWidth < 500) {
      if (activeIndex > -87.5) setActiveIndex(activeIndex - 12.5);
      else setActiveIndex(0);
    } else if (window.innerWidth < 650) {
      if (activeIndex > -75) setActiveIndex(activeIndex - 12.5);
      else setActiveIndex(0);
    } else if (window.innerWidth >= 960) {
      if (activeIndex > -50) setActiveIndex(activeIndex - 12.5);
      else setActiveIndex(0);
    } else if (window.innerWidth < 960) {
      if (activeIndex > -62.5) setActiveIndex(activeIndex - 12.5);
      else setActiveIndex(0);
    }
  };

  const Prev = () => {
    if (window.innerWidth < 500) {
      if (activeIndex < 0) setActiveIndex(activeIndex + 12.5);
      else setActiveIndex(-87.5);
    } else if (window.innerWidth < 650) {
      if (activeIndex < 0) setActiveIndex(activeIndex + 12.5);
      else setActiveIndex(-75);
    } else if (window.innerWidth >= 960) {
      if (activeIndex < 0) setActiveIndex(activeIndex + 12.5);
      else setActiveIndex(-50);
    } else if (window.innerWidth < 960) {
      if (activeIndex < 0) setActiveIndex(activeIndex + 12.5);
      else setActiveIndex(-62.5);
    }
  };

  return (
    <>
      <div className="flashDealMain">
        <IconTxtHeader Icon={<BsLightningChargeFill id="HeaderIcon"/>} text="Flash Deal" />
        <div className="flashDeal">
          <SecondSlider activeIndex={activeIndex} getCardData={getCardData} />
          <div className="cardIndicator">
            <BsArrowLeftCircleFill id="PrevIcon" onClick={Prev} />
            <BsArrowRightCircleFill id="NextIcon" onClick={Next} />
          </div>
        </div>
      </div>
      {!!open && <CardModal open={open} setOpen={setOpen} CardData={CardModalData} />}
    </>
  );
};

export default FlashDeals;
