import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Inventory from "./inventory";
import data from "./inventory/data.json";

function App() {
  return <Inventory data={data} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
