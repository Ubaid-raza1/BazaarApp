import React from "react";
import { useState } from "react";

const FullScreenSidebarNestedData = ({ ele, fullScreenDataNested }) => {
  const [toogle, setToogle] = useState(false);
  return (
    <>
      <p
        onClick={() => setToogle((prev) => !prev)}
        style={{ color: toogle ? "#D23F57" : "black" }}
      >
        <span>{ele?.head}</span>
        <span
          style={{
            transform: `rotate(${toogle ? "180deg" : "0deg"})`,
          }}
        >
          {ele?.iconDown}
        </span>
      </p>
      {fullScreenDataNested && (
        <div
          className="FullScreenSidebarTwo"
          style={{ display: toogle ? "block" : "none" }}
        >
          {fullScreenDataNested?.map((item) => (
            <p >{item?.name}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default FullScreenSidebarNestedData;
