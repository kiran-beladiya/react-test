import * as actionTypes from './actionTypes';
import { updateObject } from './updateObject';

const initialState = {
    error: false,
    contacts: []
}

const fetchUsersFailed = (state, action) => {
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
        case actionTypes.FETCH_USERS_FAILED: return fetchUsersFailed(state, action);
        case actionTypes.FETCH_USERS: return setContacts(state, action);
        default: return state;
    }
};

export default rootReducer;