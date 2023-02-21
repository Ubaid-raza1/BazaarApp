import React from "react";

const DropDownHelper = ({ data, check, setModalVisible }) => {
  return (
    <ul>
      {data?.map((item) => {
        return (
          <li
            onMouseOver={() => check(item?.id)}
            onMouseOverCapture={() => setModalVisible(true)}
          >
            {item?.name}
            {item?.icon}
          </li>
        );
      })}
    </ul>
  );
};

export default DropDownHelper;
