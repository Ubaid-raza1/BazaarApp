import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Store } from "./store/index";
import { Provider } from "react-redux";
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
