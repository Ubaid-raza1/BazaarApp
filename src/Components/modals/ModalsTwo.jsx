import React, { useState } from "react";
import FourComponentModalList from "../helper/modalHelp/FourComponentModalList";
import ModalsTwoList from "../helper/modalHelp/ModalsTwoList";
import ModalWrapper from "./ModalWrapper";

const ModalsTwo = ({ item, setVisible, visible }) => {
  const [modalsTwoData, setModalsTwoData] = useState();
  const [name, setName] = useState();
  const [modalTwoVisible, setModalTwoVisible] = useState(false);

  const modaldata = item?.subItem;
  const check = (data, name) => {
    setModalsTwoData(data);
    setName(name);
    setModalTwoVisible(true);
  };
  let classNameSet =
    item?.name === "Pages"
      ? "ModalsTwoPage"
      : item?.name === "User Account"
      ? "ModalsTwoUserAccount"
      : "ModalsTwoVendorAccount";

  const checkVisible = () => {
    setModalTwoVisible(false);
    setVisible(false);
  };
  return (
    <div onMouseLeave={checkVisible}>
      <div className="ModalsTwoMain">
        <ModalWrapper
          className={classNameSet}
          style={{
            display: item?.id === visible ? "block" : "none",
          }}
        >
          <ModalsTwoList
            setModalTwoVisible={setModalTwoVisible}
            check={check}
            item={modaldata}
          />
        </ModalWrapper>
      </div>
      <div
        className={`${name} ModalsTowMainUnder`}
        onMouseOver={() => setModalTwoVisible(true)}
      >
        {!!modalTwoVisible && (
          <FourComponentModalList
            item={modalsTwoData}
            visible={visible}
            setVisible={setVisible}
          />
        )}
      </div>
    </div>
  );
};

export default ModalsTwo;
