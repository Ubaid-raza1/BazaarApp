import React from "react";
import { topRating } from "../../data/TopRatingOrFeatureBrands";
import "./card.css";
import StarIcons from "../starIcons/StarIcons";

const TopRatingCard = () => {
  return (
    <>
      {topRating?.map((item) => {
        return (
          <div className="RatingCard">
            <img src={item?.img} alt="ratingCard" />
            <div className="RatingTxt">
              <span>
                <StarIcons />
                (0)
              </span>
              <span>{item?.text}</span>
              <span>{item?.price}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopRatingCard;
