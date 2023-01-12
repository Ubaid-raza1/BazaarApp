import React from "react";
import FeatureBrandCards from "../Components/card/FeatureBrandCards";
import TopRatingCard from "../Components/card/TopRatingCard";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import { featuresBrands } from "../data/TopRatingOrFeatureBrands";

const className = { cardWidth: "featureBrandCard" };

const TopRatings = () => {
  return (
    <div className="topRatingOrFeaturesBrands">
      <div className="topRatingMain">
        <IconTxtHeader text="Top Rating" Icon={""} />
        <div className="topRating">
          <div className="topRatingCard">
            <TopRatingCard />
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
