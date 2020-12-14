import * as actionTypes from './actionTypes';
import { updateObject } from './updateObject';

const initialState = {
    error: false,
    contacts: []
}

const fetchContactsFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const setContacts = (state, action) => {
    return updateObject(state, {
        contacts: action.payload,
        error: false
    });
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CONTACTS_FAILED: return fetchContactsFailed(state, action);
        case actionTypes.FETCH_CONTACTS: return setContacts(state, action);
        default: return state;
    }
};

export default rootReducer;