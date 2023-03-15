import React from "react";
import FullScreenModalListTwo from "./FullScreenModalListTwo";

const FullScreenDataOne = ({ data }) => {
  console.log(data);
  return (
    <div className="FullScreenDataOne">
      <div className="FullScreenDataFirst">
        {data?.headerOne === "Men's Fashion" ? (
          <>
            <FullScreenModalListTwo
              head={data?.headerOne}
              item={data?.manFashion}
            />
            <FullScreenModalListTwo
              head={data?.headerTwo}
              item={data?.womenFashion}
            />
            <FullScreenModalListTwo
              head={data?.headerThree}
              item={data?.girlsFashion}
            />
          </>
        ) : data?.headerOne === "Accessories & Supplies" ? (
          <>
            <FullScreenModalListTwo
              head={data?.headerOne}
              item={data?.accessories}
            />
            <FullScreenModalListTwo
              head={data?.headerTwo}
              item={data?.powerAccessories}
            />
            <FullScreenModalListTwo
              head={data?.headerThree}
              item={data?.gameAccessories}
            />
          </>
        ) : data?.headerOne === "Arts & Photography" ? (
          <>
            <FullScreenModalListTwo
              head={data?.headerOne}
              item={data?.artsPhotoGraphy}
            />
            <FullScreenModalListTwo
              head={data?.headerTwo}
              item={data?.bioGraphyMemorie}
            />
            <FullScreenModalListTwo
              head={data?.headerThree}
              item={data?.childrenBook}
            />
          </>
        ) : data?.headerOne === "Outdoor Recreation" ? (
          <>
            <FullScreenModalListTwo
              head={data?.headerOne}
              item={data?.outdoorRecreation}
            />
            <FullScreenModalListTwo
              head={data?.headerTwo}
              item={data?.sportsMedicine}
            />
            <FullScreenModalListTwo
              head={data?.headerThree}
              item={data?.sportsMedicine}
            />
          </>
        ) : data?.headerOne === "Accounting & Finance" ? (
          <>
            <FullScreenModalListTwo
              head={data?.headerOne}
              item={data?.accountingFinance}
            />
            <FullScreenModalListTwo
              head={data?.headerTwo}
              item={data?.antivirusSecurity}
            />
            <FullScreenModalListTwo
              head={data?.headerThree}
              item={data?.businessOffice}
            />
          </>
        ) : (
          <>
            <FullScreenModalListTwo
              head={data?.headerOne}
              item={data?.artsCrafts}
            />
            <FullScreenModalListTwo
              head={data?.headerTwo}
              item={data?.babyToddlerToys}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FullScreenDataOne;
