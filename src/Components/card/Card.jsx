import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../button/Button";
import "./card.css";
import { FaPlus } from "react-icons/fa";
// BsFillEyeFill fontAwesome this icon use eye icon
// BsFillHeartFill fontAwesome this icon use heart icon

const Card = ({ productData, id }) => {
  return (
    <>
      {productData?.map((item) => {
        return (
          <div className="card" id={id?.cardWidth}>
            <div className="cardBody">
              <div className="cradImgTxt">
                <img src={item?.cardImg} alt="cardimg" />
                <span className="cardOffer">
                  <span id="cardOfferPercen">{item?.off}</span> off
                </span>
              </div>
            </div>
            <div className="cardFooter">
              <div className="cardTxt">
                <span>{item?.title}</span>
                <span className="cardStar">
                  <FaStar id="cardStar" />
                  <FaStar id="cardStar" />
                  <FaStar id="cardStar" />
                  <FaStar id="cardStar" />
                  <FaStar id="cardStar" />
                </span>
                <div>
                  <span id="dolarTxt">{item?.prizeCurrent}</span>
                  <span>
                    <s>{item?.prizeClose}</s>
                  </span>
                </div>
              </div>
              <div className="CardBtn">
                <Button icon={<FaPlus />} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Card;
