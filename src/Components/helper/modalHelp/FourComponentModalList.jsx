import React from "react";

const FourComponentModalList = ({ item, setVisible, visible }) => {
  return (
    <ul>
      {item?.map((ele) => (
        <li onMouseOverCapture={() => setVisible(visible)}>{ele}</li>
      ))}
    </ul>
  );
};

export default FourComponentModalList;
