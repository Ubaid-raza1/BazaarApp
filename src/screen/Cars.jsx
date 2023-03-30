import React, { useState } from "react";
import Card from "../Components/cards/Card";
import { Car, carBtnTxtImg } from "../data/Car";
import "./screen.css";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import CardButtons from "../Components/cardButtons/CardButtons";
import CardModal from "../Components/modals/CardModal";

const id = { cardWidth: "cardWidth3" };

const Cars = () => {
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
      <div className="carMain car">
        <CardButtons buttonProducts={carBtnTxtImg} />
        <div>
          <IconTxtHeader text="Car" />
          <div className="carCard">
            {Car.map((item) => {
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

export default Cars;
