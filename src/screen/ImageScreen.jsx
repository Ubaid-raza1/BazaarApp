import React from "react";
import { imagesSec } from "../data/ImageSec";

const ImageScreen = () => {
  return (
    <div className="secondImgMain">
      <div className="secondImg">
        {imagesSec.map((item) => {
          return <img src={item?.img} alt="logo" />;
        })}
      </div>
    </div>
  );
};

export default ImageScreen;
