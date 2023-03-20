import React from "react";
import "./selectOption.css";

const SelectOption = ({ data }) => {
  return (
    <select id="standard-select">
      {data?.map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </select>
  );
};

export default SelectOption;
