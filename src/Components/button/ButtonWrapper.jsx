import React from "react";

const ButtonWrapper = ({ children, className, onClick, onMouseEnter }) => {
  return (
    <button className={className} onClick={onClick} onMouseEnter={onMouseEnter}>
      {children}
    </button>
  );
};

export default ButtonWrapper;
