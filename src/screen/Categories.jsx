import React from "react";
import { firstCategories } from "../data/Categories";
import { BsFillGridFill } from "react-icons/bs";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";

const Categories = () => {
  return (
    <div className="mainCategories">
      <IconTxtHeader text="Categories" Icon={<BsFillGridFill id="HeaderIcon"/>} />
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
    </div>
  );
};

export default Categories;
