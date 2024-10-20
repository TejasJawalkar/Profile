import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/common/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home.jsx";
import styles from "./Components/Styles/Sidebar.module.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
