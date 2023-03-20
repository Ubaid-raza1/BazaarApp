import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { DELETE, SHOP } from "../../reducer/Action";
import Button from "../button/Button";

const ShoppingCard = ({ arr }) => {
  const dispatch = useDispatch();
  const Plus = (item) => {
    dispatch({ type: SHOP, payload: { count: item.count++, ...item } });
  };
  const Minus = (item) => {
    if (item?.count > 1) {
      dispatch({ type: SHOP, payload: { count: item.count--, ...item } });
    }
  };
  const Delete = (id) => {
    dispatch({ type: DELETE, payload: id });
  };
  return (
    <>
      {arr?.map((item) => {
        return (
          <div className="cart">
            <div className="cartImg">
              <img src={item?.cardImg} alt="" />
              
            </div>
            <div className="cartData">
              <div className="cratTitleICon">
                <h3>{item?.title}</h3>
                <div>
                  <AiOutlineClose onClick={() => Delete(item?.id)} />
                </div>
              </div>
              <p>
                {`$${item?.prizeCurrent} X ${item?.count}`}
                <span>{`$${item?.prizeCurrent}`}</span>
              </p>
              <div className="cartPlusMinus">
                <Button icon={<FaMinus />} onClick={() => Minus(item)} className={item?.count < 2 && "Minus"}/>
                <span>{item?.count}</span>
                <Button icon={<FaPlus />} onClick={() => Plus(item)}  />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShoppingCard;
