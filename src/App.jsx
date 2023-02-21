import React from "react";
import FirstNavbar from "./Components/navbars/FirstNavbar";
import SecondNavbar from "./Components/navbars/SecondNavbar";
import ThirdNavbar from "./Components/navbars/ThirdNavbar";
import Navbar from "./Components/navbars/Navbar"
import "./App.css";
import FirstSlider from "./Components/sliders/FirstSlider";
import Cars from "./screen/Cars";
import MobilePhones from "./screen/MobilePhones";
import OpticsWatch from "./screen/OpticsWatch";
import Categories from "./screen/Categories";
import MoreForYou from "./screen/MoreForYou";
import SimpleCard from "./screen/SimpleCards";
import Footer from "./screen/Footer";
import FlashDeals from "./screen/FlashDeals";
import TopCategories from "./screen/TopCategories";
import TopRatings from "./screen/TopRatings";
import NewArrivals from "./screen/NewArrivals";
import BigDiscounts from "./screen/BigDiscounts";
import ImageScreen from "./screen/ImageScreen";

const App = () => {
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
        <SimpleCard />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
