import React, { useState } from "react";
import {
  mobilePhone,
  mobilePhoneBrand,
  mobilePhoneShop,
} from "../data/MobilePhone";
import Card from "../Components/cards/Card";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import "./screen.css";
import BrandAndShop from "../Components/cardButtons/BrandAndShop";
import CardModal from "../Components/modals/CardModal";

const id = { cardWidth: "cardWidth3" };
const cardButtonWidth = { widthButton: "widthButtondSec1" };

const MobilePhones = () => {
  const [CardModalData, setCardModalData] = useState();
  const [open, setOpen] = useState(false);

  !!open
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  const getCardData = (CardData) => {
    setCardModalData(CardData);
    setOpen(true);
  };

  return (
    <>
      <div className="carMain mobile">
        <BrandAndShop
          brand={mobilePhoneBrand}
          shop={mobilePhoneShop}
          id={cardButtonWidth}
        />
        <div>
          <IconTxtHeader text="Mobile Phone" />
          <div className="carCard">
            {mobilePhone.map((item) => {
              return (
                <Card
                  productData={item}
                  id={id}
                  itemId={item?.id}
                  getCardData={getCardData}
                />
              );
            })}
          </div>
        </div>
      </div>
      {!!open && (
        <CardModal open={open} setOpen={setOpen} CardData={CardModalData} />
      )}
    </>
  );
};

export default MobilePhones;
