import React from "react";

const FullScreenModalList = ({ check, item, setFullScreenData }) => {
  return (
    <div className="FullScreenModalList">
      <ul>
        {item?.fullScreen?.map((Ele) => {
          return (
            <li onMouseOver={() => setFullScreenData(Ele.item)}>
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
