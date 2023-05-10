import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App'
import { Reader } from "./components/Reader/Reader";
import publications from "./components/publications.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Reader items={publications} />
  </React.StrictMode>
);
