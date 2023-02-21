import React, { useState } from "react";
import FourComponentModal from "../../modals/FourComponentModal";
import FullScreenModal from "../../modals/FullScreenModal";
import Modals from "../../modals/Modals";
import ModalsTwo from "../../modals/ModalsTwo";
import ThirdNavListDataHelp from "./ThirdNavListDataHelp";

const ThirdNavHelpList = ({ element }) => {
  const [navDropData, setNavDropData] = useState();
  const [visible, setVisible] = useState(false);

  const check = (id) => {
    const arr = element.find((item) => {
      return item?.id === id;
    });
    setNavDropData(arr);
  };

  return (
    <div className="mainHeaderValue">
      <ThirdNavListDataHelp
        item={element}
        check={check}
        setVisible={setVisible}
        setNavDropData={setNavDropData}
      />

      {!!navDropData?.isSingle && (
        <Modals setVisible={setVisible} visible={visible} item={navDropData} />
      )}
      {!!navDropData?.isFourComp && (
        <FourComponentModal
          item={navDropData}
          setVisible={setVisible}
          visible={visible}
        />
      )}
      {!!navDropData?.isTwoComp && (
        <ModalsTwo
          item={navDropData}
          setVisible={setVisible}
          visible={visible}
        />
      )}
      {!!navDropData?.isFullScreen && (
        <FullScreenModal
          item={navDropData}
          setVisible={setVisible}
          visible={visible}
        />
      )}
    </div>
  );
};

export default ThirdNavHelpList;
