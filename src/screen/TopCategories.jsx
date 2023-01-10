import React from "react";
import category1 from "../images/category-1.webp";
import category2 from "../images/category-2.webp";
import category3 from "../images/category-3.webp";
import { BsFillGridFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

const TopCategories = () => {
  return (
    <div className="topCategoriesMain">
      <div className="flashDealHeader">
        <div className="flashDealTxt">
          <span className="flashDealUnderIcon">
            <BsFillGridFill id="categoryIcon1" />
          </span>
          <span className="flashDealUnderTxt">Top Categories</span>
        </div>
        <div className="flashDealTxtIcon">
          View all <FaAngleRight />
        </div>
      </div>
      <div className="topCategories">
        <div className="topCategoriesImgTxt">
          <div className="topCategoriesImgSection ubaid">
          <img src={category1} alt="category" />
          <div className="topCategoriesTxt">
            <span id="topCategoriesTxt1">HeadPhone</span>
            <span id="topCategoriesTxt2">3k order this week</span>
          </div>
          </div>
        </div>
        <div className="topCategoriesImgTxt">
        <div className="topCategoriesImgSection">
          <img src={category2} alt="category" />
          <div className="topCategoriesTxt">
            <span id="topCategoriesTxt1">HeadPhone</span>
            <span id="topCategoriesTxt2">3k order this week</span>
          </div>
          </div>
        </div>
        <div className="topCategoriesImgTxt">
        <div className="topCategoriesImgSection">
          <img src={category3} alt="category" />
          <div className="topCategoriesTxt">
            <span id="topCategoriesTxt1">HeadPhone</span>
            <span id="topCategoriesTxt2">3k order this week</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
