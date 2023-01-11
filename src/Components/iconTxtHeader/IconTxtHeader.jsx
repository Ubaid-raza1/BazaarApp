import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./IconTxtHeader.css"

const IconTxtHeader = ({ text, Icon }) => {
  return (
    <div className="IconTxtHeader">
      <div className="IconTxts">
        <span className="TxtHeaderIcon">{Icon}</span>
        <span className="IconTxt">{text}</span>
        
      </div>
      <div className="TxtHeaderIconUnder">
        View all <FaAngleRight />
      </div>
    </div>
  );
};

export default IconTxtHeader;
