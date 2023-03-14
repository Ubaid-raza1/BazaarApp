import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import ThirdSlider from "../Components/sliders/ThirdSlider";

const TopCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Next = () => {
    if (activeIndex > -68) setActiveIndex(activeIndex - 34);
  };

  const Prev = () => {
    if (activeIndex < 0) setActiveIndex(activeIndex + 34);
  };
  return (
    <div className="topCategoriesMain">
      <IconTxtHeader text="Top Categories" Icon={""} />
      <div className="topCategories">
        <ThirdSlider activeIndex={activeIndex} />
        <div className="topCardIndicator">
          <BsArrowLeftCircleFill id="PrevIcon" onClick={Prev} />
          <BsArrowRightCircleFill id="NextIcon" onClick={Next} />
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
