/* eslint-disable react/prop-types */
import React from "react";

function EditableRow (props) {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="campaign_name"
          value={props.editFormData.campaign_name}
        ></input>
      </td>
      <td>
      </td>
      <td>
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
}


export default EditableRow