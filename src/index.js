import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import Header from "./Component/Header/Header";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename="/">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
