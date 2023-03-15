import React from "react";
import FirstNavbar from "../../Components/navbars/FirstNavbar";
import Navbar from "../../Components/navbars/Navbar";
import SecondNavbar from "../../Components/navbars/SecondNavbar";
import ThirdNavbar from "../../Components/navbars/ThirdNavbar";
import Footer from "../../screen/Footer";
import "./shoppingPage.css";
import ShoppingCard from "../../Components/cards/ShoppingCard";
import { useSelector } from "react-redux";
import Button from "../../Components/button/Button";
import Input from "../../Components/input/Input";
import Textarea from "../../Components/textarea/Textarea";
import SelectOption from "../../Components/selectOption/SelectOption";
import ShoppingCartHelper from "../../Components/helper/shoppingCartHelper/ShoppingCartHelper";

const ShoppingPage = () => {
  const state = useSelector((state) => state);

  return (
    <div className="ShopingPage">
      <div className="navbars">
        <FirstNavbar />
        <Navbar />
        <SecondNavbar />
        <ThirdNavbar />
      </div>
      <div className="shoppingMain">
        <div className="ShoppingHeader">
          <ShoppingCartHelper txt="1. Cart" />
          <div className="shoppingCartLine"></div>
          <ShoppingCartHelper txt="2. Details" />
          <div className="shoppingCartLine"></div>
          <ShoppingCartHelper txt="3. Payment" />
          <div className="shoppingCartLine"></div>
          <ShoppingCartHelper txt="4. Review" />
        </div>
        <div className="ShoppingCartAndFormMain">
          <div className="ShoppingCart">
            <ShoppingCard arr={state?.cardCount} />
          </div>

          <div className="Shopping">
            <div className="shoppingTotal">
              <span>Total:</span>
              <span>$3000</span>
            </div>
            <hr />
            <div>
              <div className="shoppingTitle">
                <span>Additional Comments</span>
                <span>Note</span>
              </div>
              <div className="shoppingFormOne">
                <div className="inputDiv">
                  <span>
                    <Textarea cols="30" rows="7" />
                  </span>
                  <hr />
                  <Input placeholder="Voucher" />
                </div>
                <Button value="Apply Voucher" className="shoppingBtn" />
              </div>
              <hr />
            </div>
            <div>
              <div className="shoppingTitleTwo">Shipping Estimates</div>
              <div className="shoppingFormTwo">
                <div className="inputDiv">
                  <SelectOption />
                  <SelectOption />
                  <Input placeholder="Zip Code" />
                </div>
                <div className="shoppingButton">
                  <Button value="Calculate Shipping" className="shoppingBtn" />
                  <Button value="Checkout Now" className="shoppingBtnTwo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ShoppingPage;
