import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import FeatureBrandCards from "../Components/card/FeatureBrandCards";
import TopRatingCard from "../Components/card/TopRatingCard";
import { featuresBrands } from "../data/TopRatingOrFeatureBrands";

const className = { cardWidth: "featureBrandCard" };

const TopRatings = () => {
  return (
    <div className="topRatingOrFeaturesBrands">
      <div>
        <div className="categoryTxtIcon">
          <div className="categoryUnderTxtIcon1">
            <span className="categoryIcon">
              <BsFillGridFill id="categoryIcon1" />
            </span>
            <span className="categoryTitle">Top Ratings</span>
          </div>
          <div className="categoryUnderTxtIcon2">
            <span>View All</span>
            <span>
              <FaAngleRight id="categoryIcon2" />
            </span>
          </div>
        </div>
        <div className="topRating">
          <div className="topRatingCard">
            <TopRatingCard />
          </div>
        </div>
      </div>
      <div>
        <div className="categoryTxtIcon">
          <div className="categoryUnderTxtIcon1">
            <span className="categoryIcon">
              <BsFillGridFill id="categoryIcon1" />
            </span>
            <span className="categoryTitle">Featured Brands</span>
          </div>
          <div className="categoryUnderTxtIcon2">
            <span>View All</span>
            <span>
              <FaAngleRight id="categoryIcon2" />
            </span>
          </div>
        </div>

        <div className="FeaturesBrands">
          <div className="featureBrand">
            <div className="featureCard">
              <FeatureBrandCards productData={featuresBrands} className={className}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatings;
