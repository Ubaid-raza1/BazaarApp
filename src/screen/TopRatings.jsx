import React from "react";
import FeatureBrandCards from "../Components/cards/FeatureBrandCards";
import TopRatingCard from "../Components/cards/TopRatingCard";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import { featuresBrands } from "../data/TopRatingOrFeatureBrands";
import { topRatingOne, topRatingTwo } from "../data/TopRatingOrFeatureBrands";

const className = {
  cardWidth: "featureBrandCard",
  imageWidth: "fetureBrandImgWidth",
};

const TopRatings = () => {
  return (
    <div className="topRatingOrFeaturesBrands">
      <div className="topRatingMain">
        <IconTxtHeader text="Top Rating" Icon={""} />
        <div className="topRating">
          <div className="topRatingCard">
            <div>
              <TopRatingCard item={topRatingOne} />
            </div>
            <div>
              <TopRatingCard item={topRatingTwo} />
            </div>
          </div>
        </div>
      </div>
      <div className="featuredBrandsMain">
        <IconTxtHeader text="Featured Brands" Icon={""} />
        <div className="FeaturesBrands">
          <div className="featureBrand">
            <div className="featureCard">
              <FeatureBrandCards
                productData={featuresBrands}
                className={className}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatings;
