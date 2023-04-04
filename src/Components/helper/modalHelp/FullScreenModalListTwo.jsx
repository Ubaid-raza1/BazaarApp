import React from "react";
import { getFullScreenData } from "../navbarHelper/FullScreenDataHelper";
// import getFullScreenData   from "";

const FullScreenModalListTwo = ({ data }) => {
  console.log("=====>", data);
  const fullScreen = getFullScreenData(data);
  return (
    <div className="FullScreenModalListTwo">
      {/* <h6 className="FullScreenModalListTwoHeader">{head}</h6> */}
      <ul>
        {fullScreen &&
          fullScreen?.map((Ele, i) => {
            return <li key={i}>{Ele?.value}</li>;
          })}
        {/* {fullScreen?.map((Ele, i) => {
          return <li key={i}>{Ele?.value}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default FullScreenModalListTwo;
