import React from "react";
import FeatureBrandCards from "../Components/cards/FeatureBrandCards";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import { newArival } from "../data/NewArivals";

const className = {
  cardWidth: "featureBrandCard2",
  imageWidth: "newArivalImgWidth",
};

const NewArrivals = () => {
  return (
    <div className="newArivalMain">
      <IconTxtHeader text="New Arrivals" />
      <div className="newArival">
        <FeatureBrandCards productData={newArival} className={className} />
      </div>
    </div>
  );
};

export default NewArrivals;
