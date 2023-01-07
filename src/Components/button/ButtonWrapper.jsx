import React from "react";

const ButtonWrapper = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default ButtonWrapper;
