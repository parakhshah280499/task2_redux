import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import store from "./store";

console.log(store)
console.log(store.getState())

ReactDOM.render(
    <App />,
  
  document.getElementById("root")
);
