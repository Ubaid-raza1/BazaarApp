import React from "react";
import SimpleCard from "../Components/cards/SimpleCard";
import { simpleCardDataOne, simpleCardDataTwo } from "../data/SimpleCard";

const SimpleCards = () => {
  return (
    <div className="simpleCardMain">
      <div>
        <SimpleCard productData={simpleCardDataOne} />
      </div>
      <div>
        <SimpleCard productData={simpleCardDataTwo} />
      </div>
    </div>
  );
};

export default SimpleCards;
