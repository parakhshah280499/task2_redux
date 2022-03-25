/* eslint-disable react/jsx-key */
import React,{Fragment} from "react";
import {connect} from "react-redux";

import ReadOnlyRow from "./ReadOnlyRow";

function CampaignTable(props) {
  const campaignList=props.campaign;
 
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
            {campaignList.map((campaignData) => (
              <Fragment>
                <ReadOnlyRow
                  campaignData={campaignData}
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

export default connect(mapStateToProps)(CampaignTable)