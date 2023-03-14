import React, { useState } from "react";
import "./sliders.css";
import { useSwipeable } from "react-swipeable";
const SlidersCoursel = ({ children, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const UpdateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const halders = useSwipeable({
    onSwipedLeft: () => {
      UpdateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      UpdateIndex(activeIndex - 1);
    },
  });

  return (
    
    <div {...halders} className="carousel">
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: width });
        })}
      </div>
      <div className="indicator">
        {React.Children.map(children, (child, index) => {
          return (
            <input
              name="ubaid"
              onClick={() => {
                UpdateIndex(index);
              }}
              type="radio"
              checked={activeIndex === index ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SlidersCoursel ;
