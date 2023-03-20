import React from "react";
import "./Modal.css";
import ModalSameCls from "../helper/modalHelp/ModalSameCls";
import ModalWrapper from "./ModalWrapper";

const DropDownModal = ({
  DropDownData,
  setModalVisible,
  modalVisible,
  sticky,
}) => {
  return (
    <div
      className="DropDownModalMain"
      onMouseLeave={() => setModalVisible(false)}
    >
      <ModalWrapper
        className={sticky ? "DropDownModalTwo" : "DropDownModal"}
        style={{ display: modalVisible ? "block" : "none" }}
      >
        {DropDownData?.subItems?.map((i) => {
          return (
            <div
              className={
                DropDownData.name === "Fashion" ? "modaldiv" : "modaldiv2"
              }
            >
              <div
                className={
                  DropDownData.name === "Fashion"
                    ? "modalLeftSide"
                    : "modalLeftSide2"
                }
              >
                <div className="modalheightSet">
                  <ModalSameCls item={i} />
                  <ModalSameCls item={i} />
                </div>
              </div>
              <div
                className={
                  DropDownData.name === "Fashion"
                    ? "modalRightSide"
                    : "modalRightSide2"
                }
              >
                <img src={DropDownData?.img} alt="" />
              </div>
            </div>
          );
        })}
      </ModalWrapper>
    </div>
  );
};

export default DropDownModal;
