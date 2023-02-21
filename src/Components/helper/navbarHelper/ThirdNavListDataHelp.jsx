import React from "react";

const ThirdNavListDataHelp = ({ item, setVisible, check }) => {
  return (
    <div className="headerIconTxt">
      <ul>
        {item?.map((item) => {
          return (
            <li
              onMouseOver={() => check(item?.id)}
              onMouseOverCapture={() => setVisible(item?.id)}
            >
              <span id="headertxt">{item?.name}</span>
              <span>{item?.icon}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
// <div
//
//   onClick={check}
//   onMouseOverCapture={() => setVisible(true)}
// >
//   <span className="headertxt">{item?.name}</span>
//   <span className="headerIcon">{item?.icon}</span>
// </div>
export default ThirdNavListDataHelp;
