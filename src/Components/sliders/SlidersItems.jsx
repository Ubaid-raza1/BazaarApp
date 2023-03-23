import React from "react";
import "./sliders.css";

const SlidersItems = ({ children, style, id }) => {
  return (
    <div className="carousel-item" style={style} id={id}>
      {children}
    </div>
  );
};

export default SlidersItems;
