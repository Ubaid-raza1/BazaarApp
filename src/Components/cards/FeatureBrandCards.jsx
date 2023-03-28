import React from "react";

const FeatureBrandCards = ({ productData, className, width }) => {
  return (
    <>
      {productData?.map((item) => {
        return (
          <div className={className.cardWidth} style={{ width: width }}>
            <img src={item?.img} alt="" id={className?.imageWidth} />
            <div className="featureBrandTxt">{item?.text}</div>
            <div className="featureBrandTxt">{item?.price}</div>
            <div className="bigDiscountPrizeList">
              <span>{item?.discountPrice}</span>
              <span>
                <s>{item?.originalPrice}</s>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeatureBrandCards;
