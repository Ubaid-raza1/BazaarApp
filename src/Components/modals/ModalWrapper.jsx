import React from "react";

const ModalWrapper = ({ children, className, style, onMouseOver,onMouseLeave }) => {
  return (
    <div
      className={className}
      style={style}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
