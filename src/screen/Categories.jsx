import React from "react";
import { firstCategories, secondCategories } from "../data/Categories";
import { BsFillGridFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="mainCategories">
      <div className="categoryTxtIcon">
        <div className="categoryUnderTxtIcon1">
          <span className="categoryIcon">
            <BsFillGridFill id="categoryIcon1" />
          </span>
          <span className="categoryTitle">Categories</span>
        </div>
        <div className="categoryUnderTxtIcon2">
          <span>View All</span>
          <span>
            <FaAngleRight id="categoryIcon2" />
          </span>
        </div>
      </div>
      <div className="firstCategory">
        {firstCategories?.map((item) => {
          return (
            <div className="CategoryUnder">
              <span>
                <img src={item.img} alt="firstCategory" />
              </span>
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
      <div className="secondCategory">
        {secondCategories?.map((item) => {
          return (
            <div className="CategoryUnder">
              <span>
                <img src={item.img} alt="secondCategory" />
              </span>
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
