import React from "react";
import FourComponentModalList from "../helper/modalHelp/FourComponentModalList";
import ModalWrapper from "./ModalWrapper";

const Modals = ({ item, setVisible, visible }) => {
  return (
    <div className="modalsMain" onMouseLeave={() => setVisible(false)}>
      <ModalWrapper
        className="modal"
        style={{ display: item?.id === visible ? "block" : "none" }}
      >
        <FourComponentModalList
          item={item?.items?.home?.map((item) => ({ name: item }))}
        />
      </ModalWrapper>
    </div>
  );
};

export default Modals;
