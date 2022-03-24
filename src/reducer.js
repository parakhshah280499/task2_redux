/* eslint-disable no-case-declarations */
import data from "./data.json";

const initialState = {

    campaign: data

}


function myReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'HANDLE_DELETE_CLICK':
            const newContacts2 = [...state.campaign];

            const index2 = state.campaign.findIndex((contact) => contact.id === payload);

            newContacts2.splice(index2, 1);

            return {

                campaign: newContacts2
            }

        case 'HANDLE_EDIT_CLICK':
            const newContacts3 = [...state.campaign];

            const index3 = state.campaign.findIndex((contact) => contact.id === payload.idnew);

            newContacts3[index3].campaign_name = payload.dat;

            return {
                campaign: newContacts3
            }



        default: return state

    }
}

export default myReducer
