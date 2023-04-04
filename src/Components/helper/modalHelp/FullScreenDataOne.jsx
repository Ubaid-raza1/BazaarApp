import React from "react";
import FullScreenModalListTwo from "./FullScreenModalListTwo";
import { getFullScreenData } from "../navbarHelper/FullScreenDataHelper";

const FullScreenDataOne = ({ data }) => {
  
  return (
    <div className="FullScreenDataOne">
      {data?.map((item) => {
        const fullScreen = getFullScreenData(item);

        return (
          <div className="FullScreenDataFirst">
            <div className="FullScreenModalListTwo">
              <h6 className="FullScreenModalListTwoHeader">{item?.head}</h6>
            </div>
            <ul>
              {fullScreen &&
                fullScreen?.map((item) => {
                  return <li>{item?.name}</li>;
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FullScreenDataOne;
