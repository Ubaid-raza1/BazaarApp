import React from "react";
import { imagesSec } from "../data/ImageSec";

const ImageScreen = () => {
  return (
    <div className="secondImgMain">
      <div className="secondImg">
        {imagesSec.map((item) => {
          return (
            <div className="secondImgDiv">
              <img src={item?.img} alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageScreen;
