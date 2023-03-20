import React from "react";
import FirstNavbar from "../../Components/navbars/FirstNavbar";
import Navbar from "../../Components/navbars/Navbar";
import SecondNavbar from "../../Components/navbars/SecondNavbar";
import ThirdNavbar from "../../Components/navbars/ThirdNavbar.jsx";
import BigDiscounts from "../../screen/BigDiscounts";
import Cars from "../../screen/Cars";
import Categories from "../../screen/Categories";
import FlashDeals from "../../screen/FlashDeals";
import ImageScreen from "../../screen/ImageScreen";
import MobilePhones from "../../screen/MobilePhones";
import MoreForYou from "../../screen/MoreForYou";
import NewArrivals from "../../screen/NewArrivals";
import OpticsWatch from "../../screen/OpticsWatch";
import SimpleCards from "../../screen/SimpleCards";
import TopCategories from "../../screen/TopCategories";
import TopRatings from "../../screen/TopRatings";
import FirstSlider from "../../Components/sliders/FirstSlider";
import Footer from "../../screen/Footer";
import "./home.css";
import { Link } from "react-router-dom";
import FooterNavbar from "../../Components/navbars/FooterNavbar";

const Home = () => {
  return (
    <div className="main">
      <div>
        <div className="navbars">
          <FirstNavbar />
          <Navbar />
          <SecondNavbar />
          <ThirdNavbar />
        </div>
        <FirstSlider />
      </div>
      <div className="second">
        <FlashDeals />
        <TopCategories />
        <TopRatings />
        <NewArrivals />
        <BigDiscounts />
        <Cars />
        <MobilePhones />
        <ImageScreen />
        <OpticsWatch />
        <Categories />
        <MoreForYou />
        <SimpleCards />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="FooterNavbar">
        <FooterNavbar />
      </div>
    </div>
  );
};

export default Home;
