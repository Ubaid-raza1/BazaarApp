import React from "react";
import Button from "../button/Button";
import "./CardButton.css"

const CardButtons = ({ buttonProducts }) => {
  return (
    <div className="cardButton">
      <div className="cardBtn1">
        {buttonProducts?.map((item) => {
          return <Button value={item.text} img={item.img} />;
        })}
      </div>
      <div className="cardBtn2">
        <Button value="View All Brands" />
      </div>
    </div>
  );
};

export default CardButtons;
