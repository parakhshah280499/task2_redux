import React from 'react';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import {Fragment} from "react";
import { connect } from 'react-redux';


 function Divide(props) {
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
              {props.editCampaignID === contact.id ? (
                <EditableRow
                //   editFormData={props.editFormData}
                //   handleEditFormChange={props.handleEditFormChange}
                //   handleCancelClick={props.handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
                  contact={contact}
                //   handleEditClick={props.handleEditClick}
                //   handleDeleteClick={props.handleDeleteClick}
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

function mapStateToProps(state)
{
    return {
        campaign:state.campaign,
        editFormData:state.editFormData,
        editCampaignID:state.editCampaignID
    }
}

export default connect (mapStateToProps)(Divide)
