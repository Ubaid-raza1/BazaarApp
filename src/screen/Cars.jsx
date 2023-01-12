import React from "react";
import Card from "../Components/card/Card";
import { Car, carBtnTxtImg } from "../data/Car";
import "./screen.css";
import IconTxtHeader from "../Components/iconTxtHeader/IconTxtHeader";
import CardButtons from "../Components/cardButtons/CardButtons";

const id = { cardWidth: "cardWidth3" };

const Cars = () => {
  return (
    <div className="carMain car">
      <CardButtons buttonProducts={carBtnTxtImg} />
      <div>
        <IconTxtHeader text="Car" />
        <div className="carCard">
          <Card productData={Car} id={id} />;
        </div>
      </div>
    </div>
  );
};

export default Cars;
