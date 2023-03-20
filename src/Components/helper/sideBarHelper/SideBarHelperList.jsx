import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "../../sideBar/Sidebar.css";

const SideBarHelperList = ({ arr, Plus, Minus, Delete }) => {
  return (
    <>
      {arr?.map((Ele) => {
        return (
          <div className="sidebarShopData" key={Ele?.id}>
            <span id="sidebarShopIcon">
              <span id="sidebarShopPlusIcon">
                <FaPlus onClick={() => Plus(Ele)} />
              </span>
              <span>{Ele?.count}</span>
              <span id={Ele?.count > 1 ? "sidebarShopPlusIcon" : "minus"}>
                <FaMinus onClick={() => Minus(Ele)} />
              </span>
            </span>
            <span id="sidebarShopImg">
              <img src={Ele?.cardImg} alt="img" />
            </span>
            <span id="sidebarShopTxts">
              <span id="sideShopTxtTitle">{Ele?.title}</span>
              <span id="sideShopTxt">{`$${Ele?.prizeCurrent} X ${Ele?.count}`}</span>
              <span id="sideShopTxtAmmount">
                {`$${(Ele?.prizeCurrent * Ele?.count).toFixed(2)}`}
              </span>
            </span>
            <span id="sidebarShopCloseIcon">
              <AiOutlineClose onClick={() => Delete(Ele?.id)} />
            </span>
          </div>
        );
      })}
    </>
  );
};

export default SideBarHelperList;
