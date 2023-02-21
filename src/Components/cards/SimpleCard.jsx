import React from "react";
import "./card.css";

const SimpleCard = ({ productData }) => {
  // console.log(productData);
  return (
    <>
      {productData?.map((item) => {
        return (
          <div className="simpleCard">
            <div className="simpleCardIcon">{item?.icon}</div>
            <div className="simpleCardTxts">
              <h4 className="simpleCardTitle">{item?.text}</h4>
              <div className="simpleCardPara">
                We offer competitive prices <br /> on our 100 million plus
                <br />
                product any range.
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SimpleCard;
