import React, { useState } from "react";
import { moreItem } from "../data/MoreItem";
import Card from "../Components/cards/Card";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import CardModal from "../Components/modals/CardModal";
const id = { cardWidth: "cardWidth2" };
const MoreForYou = () => {
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
      <div className="forMoreMain">
        <IconTxtHeader text="More For You" />
        <div className="forMoreCards">
          {moreItem.map((item) => {
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
      {!!open && (
        <CardModal open={open} setOpen={setOpen} CardData={CardModalData} />
      )}
    </>
  );
};

export default MoreForYou;
