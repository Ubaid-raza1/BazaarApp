import React from "react";
import ModalSameCls from "../helper/modalHelp/ModalSameCls";
import ModalWrapper from "./ModalWrapper";
import ManModalImg from "../../images/manModal-img.webp";

const DropDownModalTwo = ({ Items, setModalVisible, sticky }) => {
  return (
    <div className="DropDownModalTwoMain">
      <ModalWrapper
        className={sticky ? "DropDownModalChildOne" : "DropDownModalChild"}
        // onMouseLeave={() => setModalVisible((prev)=>!prev)}
      >
        {Items?.map((i) => {
          return (
            <div>
              <div className="DropDownModalHeight">
                <ModalSameCls item={i} />
              </div>
              <div className="DropDownModalTwoRight">
                <div className="DropDownModalTwoRightTxt">
                  <h2 id="DropDownModalTwoRightHead">Big Sale Upto 60% Off</h2>
                  <p id="DropDownModalTwoRightPara1">
                    Handcrafted from genieune italian Leather
                  </p>
                  <p id="DropDownModalTwoRightPara2">SHOP NOW</p>
                </div>
                <div className="DropDownModalTwoRightImg">
                  <img src={ManModalImg} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </ModalWrapper>
    </div>
  );
};

export default DropDownModalTwo;
