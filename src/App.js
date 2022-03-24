/* eslint-disable no-unused-vars */

import store from './store.js'
import React from "react";
import "./App.css";
import { Provider } from 'react-redux'
import Divide from './components/Divide.js';


function App (props) {
  
  return (
    <Provider store={store}>
      <Divide/>
    </Provider>
    
  );
}


export default App;
