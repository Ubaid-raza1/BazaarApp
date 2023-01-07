import React from "react";
import Button from "../Components/button/Button";
import Card from "../Components/card/Card";
import { Car, carBtnTxtImg } from "../data/Car";
import "./screen.css";
import { FaAngleRight } from "react-icons/fa";
const id = { cardWidth: "cardWidth3" };
const Cars = () => {
  return (
    <div className="cardMain">
      <div className="cardButton">
        <div className="cardBtn1">
          {carBtnTxtImg?.map((item) => {
            return <Button value={item.text} img={item.img} />;
          })}
        </div>
        <div className="cardBtn2">
          <Button value="View All Brands" />
        </div>
      </div>
      <div>
        <div className="cardHeader">
          <div className="cardTitle">Cars</div>
          <div className="cardTxtIcon">
            View all <FaAngleRight />
          </div>
        </div>
        <div className="cardCard">
          <Card productData={Car} id={id}/>;
        </div>
      </div>
    </div>
  );
};

export default Cars;
