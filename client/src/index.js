import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "../src/store";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider theme={{ hashed: false }}>
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);
