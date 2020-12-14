import * as actionTypes from './actionTypes';
import axios from '../utils/Api';
import { token } from '../constants';

export const contactsList = () => {
    return (dispatch) => {
        axios.defaults.headers.common['Authorization'] = token;
        axios.get('contacts')
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_CONTACTS,
                    payload: response
                });
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.FETCH_CONTACTS_FAILED,
                    payload: error
                });
            })
    };
};