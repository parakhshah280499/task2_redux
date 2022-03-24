/* eslint-disable react/prop-types */
import React from "react";
// import store from "../store";
import { connect } from 'react-redux';

function ReadOnlyRow(props) {
  return (
    <tr>
      <td>{props.contact.campaign_name}</td>
      <td>{props.contact.type_of}</td>
      <td>{props.contact.company_name}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            console.log("edit pressed" ,props.edit_dispatch)
            props.edit()
            // store.dispatch({ type: 'HANDLE_EDIT_CLICK', payload: { idnew: props.contact.id, dat: al } });

          }
          }
        >
          Edit
        </button>
        <button type="button" onClick={() => { console.log("delete pressed");props.deletee()}} >
          Delete
        </button>
      </td>
    </tr>
  );
}

// Why using const doesnt work and function works

// const edit_dispatch = () => (dispatch,props) => {
//   console.log("XXXX")
//   const al = prompt('Type here');
//   console.log(al);
//   dispatch({ type: 'HANDLE_EDIT_CLICK', payload: { idnew: props.contact.id, dat: al } });
// }

function edit_dispatch (dispatch,props) {
  // console.log("XXXX")
  const al = prompt('Type here');
  console.log(al);
  dispatch({ type: 'HANDLE_EDIT_CLICK', payload: { idnew: props.contact.id, dat: al } });
}

function delete_dispatch(dispatch,props){
  dispatch({ type: 'HANDLE_DELETE_CLICK', payload: props.contact.id })
}


const mapDispatchToProps = (dispatch,props)=> 
{
  return {
  edit : ()=>{edit_dispatch(dispatch,props)},
  deletee : ()=>{delete_dispatch(dispatch, props)}
}
}

const mapStateToProps = state => ( 
{
      campaign:state.campaign
}
)
export default connect(mapStateToProps,mapDispatchToProps)(ReadOnlyRow);