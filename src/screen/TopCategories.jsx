import React from "react";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import { topCategoryData } from "../data/TopCategory";

const TopCategories = () => {
  return (
    <div className="topCategoriesMain">
      <IconTxtHeader text="Top Categories" Icon={""} />
      <div className="topCategories">
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
    </div>
  );
};

export default TopCategories;
