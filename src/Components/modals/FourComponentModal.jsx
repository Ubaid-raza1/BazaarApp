import React from "react";
import FourComponentModalList from "../helper/modalHelp/FourComponentModalList";
import ModalWarraper from "../modals/ModalWrapper";

const FourComponentModal = ({ item, setVisible, visible }) => {
  const modaldata = item?.megaMenu;
  return (
    <div
      className="FourComponentModalMain"
      onMouseLeave={() => setVisible(false)}
    >
      <ModalWarraper
        className="FourComponentModal"
        style={{ display: item?.id === visible ? "block" : "none" }}
      >
        <div className="FourComponentModalUnderMain">
          <div className="FourComponentModalUnderTxt FourComponentModalDivColor">
            <FourComponentModalList item={modaldata?.home} />
          </div>
          <div className="FourComponentModalUnderTxt">
            <FourComponentModalList item={modaldata?.userAccount} />
          </div>
          <div className="FourComponentModalUnderTxt FourComponentModalDivColor">
            <div>
              <FourComponentModalList item={modaldata?.vendorAccount} />
            </div>
            <div>
              <FourComponentModalList item={modaldata?.product} />
            </div>
            <div>
              <FourComponentModalList item={modaldata?.order} />
            </div>
          </div>
          <div className="FourComponentModalUnderTxt">
            <div>
              <FourComponentModalList item={modaldata?.salePage} />
            </div>
            <div>
              <FourComponentModalList item={modaldata?.shop} />
            </div>
          </div>
        </div>
      </ModalWarraper>
    </div>
  );
};

export default FourComponentModal;
