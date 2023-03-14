import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import imges from "../../images/cap.webp";
import Button from "../button/Button";

const ShoppingCard = ({ arr }) => {
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
                  <AiOutlineClose />
                </div>
              </div>
              <p>
                {`$${item?.prizeCurrent} X ${item?.count}`}
                <span>{`$${item?.prizeCurrent}`}</span>
              </p>
              <div className="cartPlusMinus">
                <Button icon={<FaMinus />} />
                <span>{item?.count}</span>
                <Button icon={<FaPlus />} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShoppingCard;
