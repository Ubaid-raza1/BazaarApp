import React from "react";
import { moreItem } from "../data/MoreItem";
import Card from "../Components/cards/Card";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
const id = { cardWidth: "cardWidth2" };
const MoreForYou = () => {
  return (
    <div className="forMoreMain">
      <IconTxtHeader text="More For You" />
      <div className="forMoreCards">
        <Card productData={moreItem} id={id} />;
      </div>
    </div>
  );
};

export default MoreForYou;
