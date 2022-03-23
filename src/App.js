// import React, { useState, Fragment } from "react";
// import "./App.css";
// import data from "./data.json";
// import ReadOnlyRow from "./components/ReadOnlyRow";
// import EditableRow from "./components/EditableRow";
// import { connect } from 'react-redux'
// import { Provider } from 'react-redux'
import store from './store.js'
// import myReducer from "./reducer";


// function App(props) {

//   return (
//     <Provider store={store}>
//     {/* onSubmit={handleEditFormSubmit} */}
//       <form >
//         <table>
//           <thead>
//             <tr>
//               <th>Campaign Name</th>
//               <th>Type</th>
//               <th>Company Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((contact) => (
//               <Fragment>
//                 {props.editCampaignID === contact.id ? (
//                   <EditableRow
//                   editFormData={props.editFormData}
//                   />
//                 ) : (
//                   <ReadOnlyRow
//                     contact={contact}
//                     // handleEditClick={handleEditClick}
//                     // handleDeleteClick={handleDeleteClick}
//                   />
//                 )}
//               </Fragment>
//             ))}
//           </tbody>
//         </table>
//       </form>
//        </Provider>
  
//   );
// }

// function mapStateToProps(state)
// {
//   return {
//     editCampaignID:state.editCampaignID,
//     // campaign:state.campaign,
//   }
// }

// export default connect(mapStateToProps)(App);

// import React from 'react'
// import './App.css'
// import { Provider } from 'react-redux'
// import store from './store.js'
// import Togg from './components/Togg'

// class App extends React.Component {
//   render () {
//     const card = (
//               <Provider store = {store}>
//                 <div> 
//                 </div>
//                 <Togg />

//                 </Provider>
//     ) 

//     return card
//   }
// }

// export default App

import React, { useState, Fragment } from "react";
import "./App.css";
// import data from "./data.json";
// import ReadOnlyRow from "./components/ReadOnlyRow";
// import EditableRow from "./components/EditableRow";
import { connect, Provider } from 'react-redux'
import Divide from './components/Divide.js';


function App (props) {

  return (
    <div>aa</div>
    
  );
}

function mapStateToProps(state)
{
  return {
    editCampaignID:state.editCampaignID,
    campaign:state.campaign,
  }
}



export default App;
// export default connect(mapStateToProps)(App);