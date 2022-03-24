/* eslint-disable react/prop-types */
import React from "react";
import store from "../store";

function ReadOnlyRow  (props){
  return (
    <tr>
      <td>{props.contact.campaign_name}</td>
      <td>{props.contact.type_of}</td>
      <td>{props.contact.company_name}</td>
      <td>
        <button
          type="button"
          onClick={() => {
              const al =prompt('Type here');
              console.log(al);
              store.dispatch({type:'HANDLE_EDIT_CLICK',payload:{idnew:props.contact.id,dat:al}});
            
          }
        }
        >
          Edit
        </button>
                <button type="button" onClick={() => store.dispatch({type:'HANDLE_DELETE_CLICK',payload:props.contact.id})} >
          Delete
        </button>
      </td>
    </tr>
  );
}


export default ReadOnlyRow;