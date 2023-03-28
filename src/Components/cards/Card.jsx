import React, { useEffect } from "react";
import Button from "../button/Button";
import "./card.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import StarIcons from "../starIcons/StarIcons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHOP } from "../../reducer/Action";

const Card = ({ productData, id, itemId, width }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
    dispatch({ type: SHOP, payload: { count: count + 1, ...productData } });
  };

  const Minus = () => {
    if (count > 0) setCount(count - 1);
    dispatch({
      type: SHOP,
      payload: { count: count - 1, ...productData },
    });
  };

  useEffect(() => {
    const currentItem = state?.cardCount?.find((item) => item?.id === itemId);
    setCount(currentItem?.count || 0);
  }, [state?.cardCount]);
  return (
    <div className="card" style={{ width: width }} id={id?.cardWidth}>
      <div className="cardBody">
        <div className="cradImgTxt">
          <img src={productData?.cardImg} alt="cardimg" />
          <span className="cardOffer">
            <span id="cardOfferPercen">{productData?.off}</span> off
          </span>
        </div>
      </div>
      <div className="cardFooter">
        <div className="cardTxt">
          <span>{productData?.title}</span>
          <span className="cardStar">
            <StarIcons />
          </span>
          <div>
            <span id="dolarTxt">{`$${productData?.prizeCurrent}`}</span>
            <span>
              <s>{productData?.prizeClose}</s>
            </span>
          </div>
        </div>
        <div className="CardBtn">
          {count > 0 && (
            <>
              <Button icon={<FaMinus />} onClick={Minus} />
              <span>{count}</span>
            </>
          )}
          <Button icon={<FaPlus />} onClick={Plus} />
        </div>
      </div>
    </div>
  );
};
export default Card;
