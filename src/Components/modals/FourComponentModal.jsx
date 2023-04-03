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
            <FourComponentModalList item={modaldata[0]?.home} />
          </div>
          <div className="FourComponentModalUnderTxt">
            <FourComponentModalList item={modaldata[1].userAccount} />
          </div>
          <div className="FourComponentModalUnderTxt FourComponentModalDivColor">
            <div>
              <FourComponentModalList item={modaldata[2]?.vendorAccount} />
            </div>
            <div>
              <FourComponentModalList item={modaldata[3]?.product} />
            </div>
            <div>
              <FourComponentModalList item={modaldata[4]?.order} />
            </div>
          </div>
          <div className="FourComponentModalUnderTxt">
            <div>
              <FourComponentModalList item={modaldata[5]?.salePage} />
            </div>
            <div>
              <FourComponentModalList item={modaldata[6]?.shop} />
            </div>
          </div>
        </div>
      </ModalWarraper>
    </div>
  );
};

export default FourComponentModal;
