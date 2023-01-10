import React from "react";

const FeatureBrandCards = ({ productData,className }) => {
  return (
    <>
      {productData?.map((item) => {
        return (
          <div className={className?.cardWidth}>
            <img src={item?.img} alt="" />
            <div className="featureBrandTxt">{item?.text}</div>
            <div className="featureBrandTxt">{item?.price}</div>
            <div className="featureBrandTxt">{item?.discountPrice}</div>
            <div className="featureBrandTxt">{item?.originalPrice}</div>
          </div>
        );
      })}
    </>
  );
};

export default FeatureBrandCards;
