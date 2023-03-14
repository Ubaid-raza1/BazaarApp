import React from "react";
import { Route, Routes as MyRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import ShopingPage from "../pages/shopingPage/ShoppingPage";

const Routes = () => {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<ShopingPage />} />
    </MyRoutes>
  );
};

export default Routes;
