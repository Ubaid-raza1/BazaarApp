import React from "react";
import shoesImage from "../../images/shoes.png";
import Button from "../button/Button";

const SliderHelper = ({ head, txt }) => {
  return (
    <div className="fristSlider">
      <div className="sliderTxt">
        <h1>{head}</h1>
        <p>{txt}</p>
      <div className="firstBtn">
        <Button value="Shop Now" />
      </div>
      </div>
      <div className="sliderImg">
        <img src={shoesImage} alt="shoesImg" />
      </div>
    </div>
  );
};

export default SliderHelper;
