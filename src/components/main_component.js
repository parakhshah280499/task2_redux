/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import {Fragment} from "react";
// import store from '../store';
import {connect} from 'react-redux';



 function Divide(props) {
    // const state = store.getState()
     console.log(props.campaign.length)
  return (
    <div className="app-container">
    <form>
      <table>
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Type</th>
            <th>Company Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.campaign.map((contact) => (
            <Fragment>
                <ReadOnlyRow
                  contact={contact}
                />
            </Fragment>
          ))}
        </tbody>
      </table>
    </form>
  </div>
  )
}

function mapStateToProps(state)
{
  return {
    campaign:state.campaign
  }
}

export default connect(mapStateToProps)(Divide)