// import React from "react";
// import { connect } from 'react-redux';
// import data from '../data.json'

// function ReadOnlyRow (props,contact) {
//   // const dat = data;
//   console.log(contact.campaign_name);
//   return (
//     <tr>
//       <td>{contact.campaign_name}</td>
//       <td>{contact.type_of}</td>
//       <td>{contact.company_name}</td>
//       <td>
//         <button
//           type="button"
//           // onClick={(event) => handleEditClick(event, contact)}
//         >
//           Edit
//         </button>
//         <button type="button" onClick={() => props.dispatch({type:'HANDLE_DELETE_CLICK',payload:props.campaign.id})}>
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// }

// function mapStateToProps(state)
// {
//   return {
//     campaign:state.campaign
//   }
// }




// export default connect(mapStateToProps)(ReadOnlyRow);


import React from "react";
import { connect } from 'react-redux'

function ReadOnlyRow  (props){
  // console.log(props.dispatch())
  return (
    <tr>
      <td>{props.campaign.campaign_name}</td>
      <td>{props.campaign.type_of}</td>
      <td>{props.campaign.company_name}</td>
      <td>
        <button
          type="button"
          // onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        {/* <button type="button" onClick={() => handleDeleteClick(contact.id)}> */}
                <button type="button" onClick={() => props.dispatch({type:'HANDLE_DELETE_CLICK',payload:props.campaign.id})} >
          Delete
        </button>
      </td>
    </tr>
  );
}

function mapStateToProps(state)
{
    return {
      campaign:state.campaign
    }
}

export default connect(ReadOnlyRow)(mapStateToProps);
