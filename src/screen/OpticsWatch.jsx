import React from "react";
import Card from "../Components/card/Card";
import BrandAndShop from "../Components/cardButtons/BrandAndShop";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import {
  opticsWatch,
  opticsWatchBrand,
  opticsWatchShop,
} from "../data/OpticsWatch";
import "./screen.css";

const id = { cardWidth: "cardWidth3" };

const OpticsWatch = () => {
  return (
    <div className="carMain">
     <BrandAndShop brand={opticsWatchBrand} shop={opticsWatchShop} />
      <div>
        <IconTxtHeader text="Optics / Watch" />
        <div className="carCard">
          <Card productData={opticsWatch} id={id} />;
        </div>
      </div>
    </div>
  );
};

export default OpticsWatch;
