import React from "react";

const TopCategoryCard = ({ topCategoryData }) => {
  return (
    <div className="TopCategoryMain">
      {topCategoryData?.map((item) => {
        return (
          <div className="topCategiesImgTxt">
            <img src={item?.img} alt="category" />
            <div className="topCategoriesTxt">
              <span id="topCategoriesTxt1">{item?.text}</span>
              <span id="topCategoriesTxt2">3k order this week</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopCategoryCard;
