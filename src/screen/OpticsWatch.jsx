import React, { useState } from "react";
import Card from "../Components/cards/Card";
import BrandAndShop from "../Components/cardButtons/BrandAndShop";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import {
  opticsWatch,
  opticsWatchBrand,
  opticsWatchShop,
} from "../data/OpticsWatch";
import "./screen.css";
import CardModal from "../Components/modals/CardModal";

const id = { cardWidth: "cardWidth3" };
const cardButtonWidth = { widthButton: "widthButtondSec2" };

const OpticsWatch = () => {
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
      <div className="carMain opticsWatch">
        <BrandAndShop
          brand={opticsWatchBrand}
          shop={opticsWatchShop}
          id={cardButtonWidth}
        />
        <div>
          <IconTxtHeader text="Optics / Watch" />
          <div className="carCard">
            {opticsWatch.map((item) => {
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

export default OpticsWatch;
