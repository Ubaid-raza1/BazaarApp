import React from "react";
import "./card.css";
import StarIcons from "../starIcons/StarIcons";

const TopRatingCard = ({item}) => {
  return (
    <>
      {item?.map((item) => {
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
