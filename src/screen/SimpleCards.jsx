import React from "react";
import SimpleCard from "../Components/card/SimpleCard";
import { simpleCardData } from "../data/SimpleCard";

const SimpleCards = () => {
 
  return (
    <div>
      <SimpleCard productData={simpleCardData} />
    </div>
  );
};

export default SimpleCards;
