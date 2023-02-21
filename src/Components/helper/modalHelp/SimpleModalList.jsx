import React from "react";

const SimpleModalList = ({ items, check }) => {
  return (
    <div>
      <ul>
        {items?.Items?.map((ele) => {
          return (
            <li
              onMouseOver={() => check(ele?.ManSubItem)}
              className={ele?.name === "Man" && "liActive"}
            >
              {ele?.name}
              {ele?.faAngleRight}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SimpleModalList;
