import data from "./data.json";
import store from "./store";

// const initialState = {
//     flag:false,
//     campaign:data,
//     editFormData:{
//         campaign_name: "",
//         type_of: "",
//         company_name: "",
//       },
//       editCampaignID:null,
// }

const initialState = {
    
    campaign:data
    
}




function myReducer (state=initialState,action) {
    const {type,payload} =action;
    switch(type) {

       

            case 'HANDLE_DELETE_CLICK':
                const newContacts2 = [...state.campaign];

                const index2 = state.campaign.findIndex((contact) => contact.id === payload);

                newContacts2.splice(index2, 1);
                
                return {
                    
                    campaign:newContacts2
                }
        


        
        default : return state

    }
}

// function myReducer (state=initialState,action) {
//     const {type,payload} =action;
//     switch(type) {

//         // case 'TOGGLE':
//         //     // console.log(state.flag);
//         //     if(state.flag===false)
//         //         return{
//         //             ...state,
//         //             flag:true
//         //         }
//         //         return {
//         //             ...state,
//         //             flag:false
//         //         }

//         // case 'HANDLE_EDIT_FORM_CHANGE':
//         //  const fieldName = p;
//         //  const fieldValue = event.target.value;

//         //   const newFormData = { ...editFormData };
//         //   newFormData[fieldName] = fieldValue;

//         // setEditFormData(newFormData);
//         //     }

//         case 'HANDLE_EDIT_FORM_SUBMIT':
//             const editedContact = {
//                 id: state.editCampaignID,
//                 campaign_name: state.editFormData.campaign_name,
//                 type_of: state.editFormData.type_of,
//                 company_name: state.editFormData.company_name,
//               };

//               const newContacts = [...state.campaign];

//               const index = state.campaign.findIndex((contact) => contact.id === state.editCampaignID);
          
//               newContacts[index] = editedContact;
          
//             //   setCampaign(newContacts);
//             //   setEditCampaignID(null);
//             return {
//                 ...state, 
//                 campaign:newContacts,
//                 editCampaignID:null
//             }
           
//           case 'HANDLE_EDIT_CLICK' :
//             // setEditCampaignID(contact.id);

//             const formValues = {
//               campaign_name: payload.campaign_name,
//               type_of: payload.type_of,
//               company_name: payload.company_name,
//             };
        
//             // setEditFormData(formValues);
//               return {
//                 ...state,
//                 editCampaignID:payload.id,
//                 editFormData:formValues
//               }

//             case 'HANDLE_CANCEL_CLICK' :
//                 return {
//                     ...state,
//                     editCampaignID:null
//                 }

//             case 'HANDLE_DELETE_CLICK':
//                 const newContacts2 = [...state.campaign];

//                 const index2 = state.campaign.findIndex((contact) => contact.id === payload);

//                 newContacts2.splice(index2, 1);

//                 return {
//                     ...state,
//                     campaign:newContacts2
//                 }
        


        
//         default : return state

//     }
// }

export default myReducer
