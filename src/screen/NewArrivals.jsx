import React from "react";
import FeatureBrandCards from "../Components/cards/FeatureBrandCards";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import { newArivalTwo, newArivalOne, newArivalThree } from "../data/NewArivals";

const className = {
  cardWidth: "featureBrandCard2",
  imageWidth: "newArivalImgWidth",
};

const NewArrivals = () => {
  return (
    <div className="newArivalMain">
      <IconTxtHeader text="New Arrivals" />
      <div className="newArival">
        <div>
          <div>
            <FeatureBrandCards
              productData={newArivalOne}
              className={className}
            />
          </div>
          <div>
            <FeatureBrandCards
              productData={newArivalTwo}
              className={className}
            />
          </div>
        </div>
        <div>
          <FeatureBrandCards
            productData={newArivalThree}
            className={className}
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
