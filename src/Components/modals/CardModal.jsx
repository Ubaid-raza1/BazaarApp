import React from "react";
import img from "../../images/budiCar.webp";
import Button from "../button/Button";
import StarIcons from "../starIcons/StarIcons";
import { AiOutlineClose } from "react-icons/ai";

const CardModal = ({ CardData, open, setOpen }) => {
  //   console.log("CardData++++++>", CardData);
  console.log(open, "state===>");
  return (
    <>
      <div
        onClick={() => console.log("ubaid s",false)}
        className="CardModalFirst"
        style={{ display: !!open ? "block" : "none", backgroundColor: "red" }}
      ></div>
      <div
        className="CardModalSecond"
        style={{ display: !!open ? "flex" : "none" }}
      >
        <div className="CardModalBody">
          <div className="CardModalSecondImg">
            <img src={CardData?.cardImg} alt="logo" />
          </div>
          <div className="closeIcon">
            <AiOutlineClose id="CloseIcon" onClick={() => setOpen(false)} />
          </div>
          <div className="CardModalSecondBody">
            <h2>{CardData?.title}</h2>
            {/* <h2>Budi 2017</h2> */}
            <p>CATEGORY: Cosmatic</p>
            {/* <h1>$299.00</h1> */}
            <h1>{CardData?.prizeCurrent}</h1>
            <div className="CardModalSecondStar">
              <span>
                <StarIcons />
              </span>
              (50)
            </div>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </p>
            <hr />

            <div>
              <Button value="Add to Cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardModal;
