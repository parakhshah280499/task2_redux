/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import {Fragment} from "react";
import store from '../store';



 function Divide(props) {
    const state = store.getState()
     console.log(state.campaign.length)
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
          {state.campaign.map((contact) => (
            <Fragment>
              {props.editCampaignID === contact.id ? (
                <EditableRow
               
                />
              ) : (
                <ReadOnlyRow
                  contact={contact}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </form>
  </div>
  )
}

export default Divide