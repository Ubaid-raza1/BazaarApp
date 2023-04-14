import React from "react";
import FeatureBrandCards from "../Components/cards/FeatureBrandCards";
import TopRatingCard from "../Components/cards/TopRatingCard";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import { featuresBrands } from "../data/TopRatingOrFeatureBrands";
import { topRatingOne, topRatingTwo } from "../data/TopRatingOrFeatureBrands";
import { GiAlliedStar,GiStarFormation } from "react-icons/gi";

const className = {
  cardWidth: "featureBrandCard",
  imageWidth: "fetureBrandImgWidth",
};

const TopRatings = () => {
  return (
    <div className="topRatingOrFeaturesBrands">
      <div className="topRatingMain">
        <IconTxtHeader text="Top Rating" Icon={<GiAlliedStar id="HeaderIconTwo"/>} />
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
        <IconTxtHeader text="Featured Brands" Icon={<GiStarFormation id="HeaderIconThree"/>} />
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
