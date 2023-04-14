import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill ,BsFillGridFill } from "react-icons/bs";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import ThirdSlider from "../Components/sliders/ThirdSlider";


const TopCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Next = () => {
    if (window.innerWidth < 650) {
      if (activeIndex > -416) {
        setActiveIndex(activeIndex - 104);
      }
    } else if (window.innerWidth < 950) {
      if (activeIndex > -153.6) {
        setActiveIndex(activeIndex - 51.2);
      }
    } else if (window.innerWidth > 950) {
      if (activeIndex > -68) {
        setActiveIndex(activeIndex - 34);
      }
    }
  };

  const Prev = () => {
    if (window.innerWidth < 650) {
      if (activeIndex < 0 && activeIndex < -1.42109e-14)
        setActiveIndex(activeIndex + 104);
    } else if (window.innerWidth < 950) {
      if (activeIndex < 0 && activeIndex < -1.42109e-14)
        setActiveIndex(activeIndex + 51.2);
    } else if (window.innerWidth > 950) {
      if (activeIndex < 0 && activeIndex < -1.42109e-14) setActiveIndex(activeIndex + 34);
    }
  };
  return (
    <div className="topCategoriesMain">
      <IconTxtHeader text="Top Categories" Icon={<BsFillGridFill id="HeaderIcon"/>} />
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
