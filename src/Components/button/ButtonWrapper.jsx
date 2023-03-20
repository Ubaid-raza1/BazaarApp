import React from "react";

const ButtonWrapper = ({
  children,
  className,
  onClick,
  onMouseEnter,
  style,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      style={style}
    >
      {children}
    </button>
  );
};

export default ButtonWrapper;
