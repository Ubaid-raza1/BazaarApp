import React from "react";
import logo from "../images/bazarLogo.svg";
import playstore from "../images/playStore.png";
import appStore from "../images/appStore.png";
import { about, customerCare } from "../data/FooterData";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footerDiv">
        <div>
          <div className="footerTxtIcon">
            <div className="footerLogo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footerPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </div>
            <div className="footerIcon">
              <div className="footerIconPlayStore">
                <div id="footerPlayStoreImgTxt">
                  <div id="footerPlayStoreImg">
                    <img src={playstore} alt="" />
                  </div>
                  <div id="footerPlayStoreTxt">
                    <span id="smallTxt">Get it on</span>
                    <span>Google Play</span>
                  </div>
                </div>
              </div>
              <div className="footerIconPlayStore">
                <div id="footerPlayStoreImgTxt">
                  <div id="footerPlayStoreImg">
                    <img src={appStore} alt="" />
                  </div>
                  <div id="footerPlayStoreTxt">
                    <span id="smallTxt">Download on the</span>
                    <span>App Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerAbout">
            <div id="FooterAboutTitle">About</div>
            <div id="FooterAboutTxts">
              {about?.map((item) => {
                return <p id="FooterCustomerCarePara">{item?.text}</p>;
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="footerCustomerCare">
            <div id="FooterCustomerCareTitle">Customer Care</div>
            <div id="FooterCustomerCareTxts">
              {customerCare?.map((item) => {
                return <p id="FooterCustomerCarePara">{item?.text}</p>;
              })}
            </div>
          </div>
          <div className="footerContactUs">
            <div id="footerContactUsTitle">Contact Us</div>
            <p id="footerContactUsPara">
              70 Washington Square South, New York, NY 10012, United States
            </p>
            <p id="footerContactUsEmail">Email: uilib.help@gmail.com</p>
            <p id="footerContactUsPhoneNum">Phone: +1 1123 456 780</p>
            <div id="footerContactUsIcon">
              <span id="footerConatctIcon">
                <FaFacebookF id="footerConIcon" />
              </span>
              <span id="footerConatctIcon">
                <FaTwitter id="footerConIcon" />
              </span>
              <span id="footerConatctIcon">
                <FaYoutube id="footerConIcon" />
              </span>
              <span id="footerConatctIcon">
                <FaGoogle id="footerConIcon" />
              </span>
              <span id="footerConatctIcon">
                <FaInstagram id="footerConIcon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
