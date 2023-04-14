import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import FullScreenSidebarNestedData from "./FullScreenSidebarNestedData";
import { getSidebarDataThree } from "../helper/sideBarHelper/helperSidebar";

const FullScreenSidebarDataTwo = ({ item, FullScreenData }) => {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      <p
        onClick={() => setToogle((prev) => !prev)}
        style={{ color: toogle ? "#D23F57" : "black" }}
      >
        <span>{item?.name}</span>
        <span
          style={{
            transform: `rotate(${toogle ? "180deg" : "0deg"})`,
          }}
        >
          {item?.iconDown}
        </span>
      </p>
      {FullScreenData && (
        <div
          className="FullScreenSidebarTwo"
          style={{ display: toogle ? "block" : "none" }}
        >
          {FullScreenData?.map((ele) => {
            const fullScreenDataNested = getSidebarDataThree(ele);
            return (
              <>
                {ele?.name ? (
                  <p>{ele?.name}</p>
                ) : (
                  <FullScreenSidebarNestedData
                    ele={ele}
                    fullScreenDataNested={fullScreenDataNested}
                  />
                )}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FullScreenSidebarDataTwo;
