import React from "react";
import { useState } from "react";
import FullScreenSidebarDataTwo from "./FullScreenSidebarDataTwo";
import { getSidebarDataTwo } from "../helper/sideBarHelper/helperSidebar";

const FullScreenSidebarData = ({ sidebarData, item }) => {
  const [toogle, setToogle] = useState(false);
  return (
    <>
      <div
        className="fullScreenSideBarName"
        onClick={() => setToogle((prev) => !prev)}
        style={{ color: toogle ? "#D23F57" : "black" }}
      >
        <span>{item?.name}</span>
        <span
          style={{
            transform: `rotate(${toogle ? "180deg" : "0deg"})`,
          }}
        >
          {item?.icon}
        </span>
      </div>
      {sidebarData && (
        <div
          className="fullScreenData"
          style={{ display: toogle ? "block" : "none" }}
        >
          {sidebarData.map((item) => {
            const FullScreenData = getSidebarDataTwo(item);
            return (
              <FullScreenSidebarDataTwo
                item={item}
                FullScreenData={FullScreenData}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default FullScreenSidebarData;
