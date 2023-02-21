import React from "react";

const FullScreenModalListTwo = ({ head, item }) => {
  return (
    <div className="FullScreenModalListTwo">
      <h6 className="FullScreenModalListTwoHeader">{head}</h6>
      <ul>
        {item?.map((Ele,i) => {
          return <li key={i}>{Ele?.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default FullScreenModalListTwo;
