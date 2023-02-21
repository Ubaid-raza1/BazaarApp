import React from "react";

const ModalsTwoList = ({ check, item}) => {
  return (
    <div className="ModalsTwoList">
      <ul>
        {item?.map((Ele) => {
          return (
            <li onMouseOver={() => check(Ele?.item, Ele?.name)}>
              {Ele?.name}
              {Ele?.icon}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModalsTwoList;
