import React from "react";

const ModalMapHelper = ({ user }) => {
  return (
    <div className="modalParaMain">
      {user?.map((item) => (
        <p className="modalPara">{item}</p>
      ))}
    </div>
  );
};

export default ModalMapHelper;
