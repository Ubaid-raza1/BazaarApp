import React from "react";
import ModalMapHelper from "./ModalMapHelper";

const ModalSameCls = ({ item }) => {
  // console.log("sameClassItems",item)
  return (
    <div className="modalUnderTxtMain">
      <ModalMapHelper user={item?.mainClothes} />
      <ModalMapHelper user={item?.accessories} />
      <ModalMapHelper user={item?.shoes} />
      <ModalMapHelper user={item?.bags} />
    </div>
  );
};

export default ModalSameCls;
