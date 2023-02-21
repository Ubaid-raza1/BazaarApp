import React from "react";

const FullScreenModalList = ({ check, item }) => {
  return (
    <div className="FullScreenModalList">
      <ul>
        {item?.fullScreen?.map((Ele) => {
          return (
            <li onMouseOver={() => check(Ele?.item)}>
              {Ele?.name}
              {Ele?.icon}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FullScreenModalList;
