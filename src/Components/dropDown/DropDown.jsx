import React, { useState } from "react";
import "./DropDown.css";
import { DropDown as dropData } from "../../data/DropDownData";
import DropDownModal from "../modals/DropDownModal";
import DropDownHelper from "../helper/dropDownHelper/DropDownHelper";
import SimpleDropDownModal from "../modals/SimpleDropDownModal";

const DropDown = ({ DropButton, txt, sticky }) => {
  const [toggle, setToggle] = useState(false);
  const [dropDownDataCheck, setDropDownDataCheck] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const check = (id) => {
    const arr = dropData.find((item) => {
      return item?.id === id && (item?.subItems || item?.Items);
    });
    setDropDownDataCheck(arr);
  };
  const checkVisible = () => {
    setToggle((prev) => !prev);
    setModalVisible(false);
  };
  return (
    <div className="dropdown">
      <DropButton
        className={sticky ? "thirdNavBtnTwo" : "thirdNavBtn"}
        txt={txt}
        onClick={checkVisible}
        toggle={toggle}
      />

      <div
        className={sticky ? "dropdown-contentTwo" : "dropdown-content"}
        style={{ display: toggle ? "block" : "none" }}
      >
        <DropDownHelper
        
          data={dropData}
          check={check}
          setModalVisible={setModalVisible}
        />
      </div>
      <DropDownModal
        sticky={sticky}
        DropDownData={dropDownDataCheck}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <SimpleDropDownModal
        sticky={sticky}
        SimpleDropDownData={dropDownDataCheck}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default DropDown;
