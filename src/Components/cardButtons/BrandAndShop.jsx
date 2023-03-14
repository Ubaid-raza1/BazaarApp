import React, { useState } from "react";
import Button from "../button/Button";

const BrandAndShop = ({ brand, shop, id }) => {
  const [toggle, setToggle] = useState(true);
  const Brand = () => setToggle(true);
  const Shop = () => setToggle(false);
  return (
<div className="cardButton" id={id.widthButton}>
      <div className="cardHeaderTxt">
        <h3
          className="cardBrandTxt"
          style={{ color: toggle ? "black" : "silver" }}
          onClick={Brand}
        >
          Brands
        </h3>
        <h3 className="cardSlash">|</h3>
        <h3
          className="cardShopTxt"
          onClick={Shop}
          style={{ color: toggle ? "silver" : "black" }}
        >
          Shops
        </h3>
      </div>
      <div className="cardBtn1">
        {toggle
          ? brand?.map((item) => {
              return <Button value={item.text} img={item.img} />;
            })
          : shop?.map((item) => {
              return <Button value={item.text} img={item.img} />;
            })}
      </div>
      <div className="cardBtn2">
        <Button value={toggle ? "View All Brands" : "View All Shops"} />
      </div>
    </div>
  );
};

export default BrandAndShop;
