import React from "react";
import { topRating } from "../../data/TopRatingOrFeatureBrands";
import { FaStar } from "react-icons/fa";
import "./card.css";

const TopRatingCard = () => {
  return (
    <>
      {topRating?.map((item) => {
        return (
          <div className="RatingCard">
            <img src={item?.img} alt="ratingCard" />
            <div className="RatingTxt">
              <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
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
