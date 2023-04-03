import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DropDowntwo } from "../../data/DropDownData";
import { getSidebarData } from "../helper/sideBarHelper/helperSidebar";
import FullScreenSidebarData from "./FullScreenSidebarData";

const FullScreenSideBar = ({ indexTwo, setIndexTwo }) => {
  indexTwo === 1
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  return (
    <div
      className="fullScreenSideBarMain"
      style={{ transform: `scaleX(${indexTwo})` }}
    >
      <div className="fullScreen">
        <div className="fullScreenSideBarData">
          <div className="fullScreenSideBarCloseIcon">
            <AiOutlineClose onClick={() => setIndexTwo(0)} />
          </div>
          {DropDowntwo?.map((item) => {
            const sidebarData = getSidebarData(item);
            return (
              <FullScreenSidebarData sidebarData={sidebarData} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FullScreenSideBar;

{
  /* <>
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
</> */
}
