import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DropDowntwo } from "../../data/DropDownData";

const FullScreenSideBar = ({ indexTwo, setIndexTwo }) => {
  const [getData, setGetData] = useState();
  const [toogle, setToogle] = useState(false);
  const check = (data) => {
    setGetData(data);
    setToogle((prev) => !prev);
  };
  return (
    <div
      className="fullScreenSideBarMain"
      style={{ transform: `scaleX(${indexTwo})` }}
    >
      <div>
        <div className="fullScreenSideBarData">
          <div className="fullScreenSideBarCloseIcon">
            <AiOutlineClose onClick={() => setIndexTwo(0)} />
          </div>
          {DropDowntwo?.map((item) => {
            return (
              <>
                <>
                  <div
                    className="fullScreenSideBarName"
                    onClick={() => check(item)}
                  >
                    {item?.name} {item?.icon}
                  </div>
                </>
                <>
                  {item?.name === "Home" && (
                    <div
                      className="fullScreenSideBarChild"
                      style={{
                        display: item?.name === "Home" ? "block" : "none",
                      }}
                    >
                      {getData?.items?.home?.map((ele) => (
                        <p>{ele}</p>
                      ))}
                    </div>
                  )}
                  {item?.name === "Mega Menu" && (
                    <div
                      style={{
                        display:
                          getData?.name === "Mega Menu" ? "block" : "none",
                      }}
                      className="fullScreenSideBarChild"
                    >
                      Mega Menu
                    </div>
                  )}
                  {item?.name === "Full Screen Menu" && (
                    <div className="fullScreenSideBarChild">ubaid Raza 3</div>
                  )}
                  {item?.name === "Pages" && (
                    <div className="fullScreenSideBarChild">ubaid Raza 4</div>
                  )}
                  {item?.name === "User Account" && (
                    <div className="fullScreenSideBarChild">ubaid Raza 5</div>
                  )}
                  {item?.name === "Vendor Account" && (
                    <div className="fullScreenSideBarChild">ubaid Raza 6</div>
                  )}
                </>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FullScreenSideBar;
