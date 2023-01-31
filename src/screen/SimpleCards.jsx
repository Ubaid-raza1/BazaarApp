import React from "react";
import SimpleCard from "../Components/cards/SimpleCard";
import { simpleCardData } from "../data/SimpleCard";

const SimpleCards = () => {
 
  return (
    <div className="simpleCardMain">
      <SimpleCard productData={simpleCardData} />
    </div>
  );
};

export default SimpleCards;
