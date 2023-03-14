import React from "react";

const CardCoursel = ({ children, width, style }) => {
  return (
    <div className="cardCoursel">
      <div className="cardInner" style={style}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: width });
        })}
      </div>
    </div>
  );
};

export default CardCoursel;
