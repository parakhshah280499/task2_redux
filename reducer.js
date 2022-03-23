import data from "./data.json";

const initialState = {
    campaign:data,
    editFormData:{
        campaign_name: "",
        type_of: "",
        company_name: "",
      },
      editCampaignID:null,
}

function myReducer (state=initialState,action) {
    switch(action.type) {

        // case 'HANDLE_EDIT_FORM_CHANGE':
        //     const fieldName = state.campaign.getAttribute("name");
        //     const fieldValue = state.campaign.value;

        //     const newFormData = { ...state.editFormData };
        //     newFormData[fieldName] = fieldValue;

        //     // setEditFormData(newFormData);
        //     return {
        //         ...state,
        //         editFormData:newFormData
        //     }

        case 'HANDLE_EDIT_FORM_SUBMIT':
            const editedContact = {
                id: state.editCampaignID,
                campaign_name: state.editFormData.campaign_name,
                type_of: state.editFormData.type_of,
                company_name: state.editFormData.company_name,
              };

              const newContacts = [...state.campaign];

              const index = state.campaign.findIndex((contact) => contact.id === state.editCampaignID);
          
              newContacts[index] = editedContact;
          
            //   setCampaign(newContacts);
            //   setEditCampaignID(null);
            return {
                ...state, 
                campaign:newContacts,
                editCampaignID:null
            }
           
          case 'HANDLE_EDIT_CLICK' :
            // setEditCampaignID(contact.id);

            const formValues = {
              campaign_name: action.campaign_name,
              type_of: action.type_of,
              company_name: action.company_name,
            };
        
            // setEditFormData(formValues);
              return {
                ...state,
                editCampaignID:action.id,
                editFormData:formValues
              }

            case 'HANDLE_CANCEL_CLICK' :
                return {
                    ...state,
                    editCampaignID:null
                }

            case 'HANDLE_DELETE_CLICK':
                const newContacts2 = [...state.campaign];

                const index2 = state.campaign.findIndex((contact) => contact.id === action.contactId);

                newContacts2.splice(index2, 1);

                // setCampaign(newContacts);

                return {
                    ...state,
                    campaign:newContacts2
                }


        // case 'DELETE_BUTTON' : let newState = state
        //     if(action.payload.id === state.editId)
        //     {
        //         newState = {
        //             ...state,
        //             editId:''
        //         }
        //     }
        //     return newState

        // case 'EDIT_BUTTON' : return {...state,editId:action.payload}
        default : return state

    }
}

export default myReducer
