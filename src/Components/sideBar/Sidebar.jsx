import React, { useEffect } from "react";
import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Sidebar.css";
import { DELETE, SHOP } from "../../reducer/Action";
import { useState } from "react";

const Sidebar = ({ setIndex, index }) => {
  const [count, setCount] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  const arr = state?.cardCount
    ?.filter((item, i, arr) => {
      return arr.findIndex((ele) => ele?.id === item?.id) === i;
    })
    .filter((ele) => {
      return ele?.count > 0;
    });
  const Plus = (id, item) => {
    dispatch({ type: SHOP, payload: { count: item.count++, ...item } });
  };
  const Minus = (id, item) => {
    dispatch({ type: SHOP, payload: { count: item.count--, ...item } });
  };

  const Delete = (id) => {
    dispatch({ type: DELETE, payload: id });
  };
  return (
    <div>
      <div
        className="sidebarMain"
        style={{ display: index === 1 ? "block" : "none" }}
        onClick={() => setIndex(0)}
      ></div>
      <div className="sidebar" style={{ transform: `scaleX(${index})` }}>
        <div className="sliderButton">
          <span>
            <AiOutlineShopping id="sidebarShopIcon" />0 item
          </span>
          <AiOutlineClose id="sidebarCloseIcon" onClick={() => setIndex(0)} />
        </div>
        {arr?.map((item) => {
          return (
            <div className="sidebarShopData">
              <span id="sidebarShopIcon">
                <span id="sidebarShopPlusIcon">
                  <FaPlus onClick={() => Plus(item?.id, item)} />
                </span>
                <span>{item?.count}</span>
                <span id={item?.count > 1 ? "sidebarShopPlusIcon" : "minus"}>
                  <FaMinus
                    onClick={() => Minus(item?.count > 1 && item?.id, item)}
                  />
                </span>
              </span>
              <span id="sidebarShopImg">
                <img src={item?.cardImg} alt="img" />
              </span>
              <span id="sidebarShopTxts">
                <span id="sideShopTxtTitle">{item?.title}</span>
                <span id="sideShopTxt">{`$${item?.prizeCurrent} X ${item?.count}`}</span>
                <span id="sideShopTxtAmmount">
                  {`$${item?.prizeCurrent * item?.count}`}
                </span>
              </span>
              <span id="sidebarShopCloseIcon">
                <AiOutlineClose onClick={() => Delete(item?.id)} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
