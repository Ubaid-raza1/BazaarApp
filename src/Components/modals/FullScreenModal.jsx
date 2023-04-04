import React, { useState } from "react";
import FullScreenDataOne from "../helper/modalHelp/FullScreenDataOne";
import FullScreenModalList from "../helper/modalHelp/FullScreenModalList";
import ModalWrapper from "./ModalWrapper";

const FullScreenModal = ({ item, setVisible, visible }) => {
  const [fullScreenData, setFullScreenData] = useState();

  console.log("fullscreenModal<======>", fullScreenData);
  return (
    <div className="FullScreenModalMain" onMouseLeave={() => setVisible(false)}>
      <ModalWrapper className="FullScreenModal">
        <div className="fullScreen">
          <div
            className="fullScreenLeft"
            style={{
              display: visible ? "block" : "none",
            }}
          >
            <FullScreenModalList
              item={item}
              setFullScreenData={setFullScreenData}
            />
          </div>
          <div
            className="fullScreenRight"
            style={{ display: visible ? "block" : "none" }}
          >
            <FullScreenDataOne data={fullScreenData} />
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
};

export default FullScreenModal;
