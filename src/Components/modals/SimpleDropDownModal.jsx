import React, { useState } from "react";
import SimpleModalList from "../helper/modalHelp/SimpleModalList";
import DropDownModalTwo from "./DropDownModalTwo";
import ModalWrapper from "./ModalWrapper";

const SimpleDropDownModal = ({
  SimpleDropDownData,
  setModalVisible,
  modalVisible,
  sticky,
}) => {
  const [element, setElement] = useState();
  const [visible, setVisible] = useState(false);
  const check = (data) => {
    setElement(data);
    setVisible(true);
  };
  const checkVisible = () => {
    setModalVisible(false);
    setVisible(false);
  };
  return (
    <div onMouseLeave={checkVisible}>
      <div className="simpleDropDownModalMain">
        <ModalWrapper
          className={sticky ? "simpleDropDownModalTwo" : "simpleDropDownModal"}
          style={{ display: modalVisible ? "block" : "none" }}
        >
          <SimpleModalList items={SimpleDropDownData} check={check} />
        </ModalWrapper>
      </div>
      {!!visible && (
        <DropDownModalTwo
          sticky={sticky}
          Items={element}
          setModalVisible={setModalVisible}
        />
      )}
    </div>
  );
};

export default SimpleDropDownModal;
