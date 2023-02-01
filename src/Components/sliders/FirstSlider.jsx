import React from "react";
import SlidersCoursel from "./SlidersCoursel";
import SlidersItems from "./SlidersItems";
import "./sliders.css";
import SliderHelper from "./SliderHelper";

const firstSlider = () => {
  const head = `50% off For Your
  First Shopping`;
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis
  consequat eu, quam etiam at quis ut convalliss.`;
  return (
    <div >
      <SlidersCoursel>
        <SlidersItems>
          <SliderHelper head={head} txt={text} />
        </SlidersItems>
        <SlidersItems>
          <SliderHelper head={head} txt={text} />
        </SlidersItems>
      </SlidersCoursel>
    </div>
  );
};

export default firstSlider;
