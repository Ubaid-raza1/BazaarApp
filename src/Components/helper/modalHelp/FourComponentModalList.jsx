import React from "react";

const FourComponentModalList = ({ item, setVisible, visible }) => {
  console.log(item)
  return (
    <ul>
      {item?.map((ele) => (
        <li onMouseOverCapture={() => setVisible(visible)}>{ele?.name}</li>
      ))}
    </ul>
  );
};

export default FourComponentModalList;
