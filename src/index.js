import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
console.log(store)
console.log(store.getState())



ReactDOM.render(
    <App />,
  
  document.getElementById("root")
)

export default App;

// const renders = ()=>{

//   console.log("CALING RENDER")
//   ReactDOM.render(
//     <App />,
  
//   document.getElementById("root")
// );

//   }

// renders()

// store.subscribe(renders)