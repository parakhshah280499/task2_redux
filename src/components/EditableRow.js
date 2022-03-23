// import React from "react";
import { connect } from "react-redux";


// function EditableRow  (props) {
//   return (
//     <tr>
//       <td>
//         <input
//           type="text"
//           required="required"
//           placeholder="Enter a name..."
//           name="campaign_name"
//           value={props.editFormData.campaign_name}
//           // onChange={handleEditFormChange}
//         ></input>
//       </td>
//       <td>
//       </td>
//       <td>
//       </td>
//       <td>
//         <button type="submit">Save</button>
//         {/* <button type="button" onClick={handleCancelClick}>
//           Cancel
//         </button> */}
//       </td>
//     </tr>
//   );
// };

// function mapStateToProps(state)
// {
//   return {
//     editFormData:state.editFormData
//   }
// }

// export default connect(mapStateToProps)(EditableRow);


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
          // onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      </td>
      <td>
      </td>
      <td>
        <button type="submit">Save</button>
        {/* <button type="button" onClick={handleCancelClick}>
          Cancel
        </button> */}
      </td>
    </tr>
  );
}

function mapStateToProps(state)
{
  return {
  editFormData:state.editFormData
  }
}

export default connect(EditableRow)(mapStateToProps);
