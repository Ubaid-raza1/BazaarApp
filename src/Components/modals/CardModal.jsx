import React, { useEffect } from "react";
import Button from "../button/Button";
import StarIcons from "../starIcons/StarIcons";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SHOP } from "../../reducer/Action";

const CardModal = ({ CardData, open, setOpen }) => {
  const [count, setCount] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  !!count || !!open
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  const Plus = () => {
    dispatch({ type: SHOP, payload: { count: count + 1, ...CardData } });
  };
  const Minus = () => {
    dispatch({ type: SHOP, payload: { count: count - 1, ...CardData } });
  };
  useEffect(() => {
    const currentItem = state?.cardCount?.find(
      (item) => item?.id === CardData?.id
    );
    console.log(currentItem?.count);
    setCount(currentItem?.count || 0);
  }, [state?.cardCount]);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className="CardModalFirst"
        style={{ display: !!open ? "block" : "none" }}
      ></div>
      <div
        className="CardModalSecond"
        style={{ display: !!open ? "flex" : "none" }}
      >
        <div className="CardModalBody">
          <div className="CardModalSecondImg">
            <img src={CardData?.cardImg} alt="logo" />
          </div>
          <div className="closeIcon">
            <AiOutlineClose id="CloseIcon" onClick={() => setOpen(false)} />
          </div>
          <div className="CardModalSecondBody">
            <h2>{CardData?.title}</h2>
            <p>CATEGORY: Cosmatic</p>
            <h1>{CardData?.prizeCurrent}</h1>
            <div className="CardModalSecondStar">
              <span>
                <StarIcons />
              </span>
              (50)
            </div>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </p>
            <hr />

            <div>
              {!!count ? (
                <span className="AddCart">
                  <Button icon={<FaMinus />} onClick={Minus} />
                  <span>{count}</span>
                  <Button icon={<FaPlus />} onClick={Plus} />
                </span>
              ) : (
                <Button
                  value="Add to Cart"
                  className="AddCartBtn"
                  onClick={Plus}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardModal;
