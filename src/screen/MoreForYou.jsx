import React from "react";
import { moreItem } from "../data/MoreItem";
import Card from "../Components/card/Card";
const id = { cardWidth: "cardWidth1" };
const MoreForYou = () => {
  return (
    <div className="forMoreMain">
      <div className="forMoreMainTxt"></div>
      <div className="forMoreCards">
        <Card productData={moreItem} id={id} />;
      </div>
    </div>
  );
};

export default MoreForYou;
