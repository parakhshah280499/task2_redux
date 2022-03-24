import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
console.log(store)
console.log(store.getState())


// const renders = ()=>{

//   console.log("CALING RENDER")
//   ReactDOM.render(
//     <App />,
  
//   document.getElementById("root")
// );

//   }

// renders()

// store.subscribe(renders)

ReactDOM.render(
    <App />,
  
  document.getElementById("root")
)

export default App;