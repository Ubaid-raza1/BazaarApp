import React from "react";
import "./sliders.css";

const SlidersItems = ({ children, style }) => {
  return (
    <div className="carousel-item" style={style}>
      {children}
    </div>
  );
};

export default SlidersItems;
