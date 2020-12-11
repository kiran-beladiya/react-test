import * as actionTypes from './actionTypes';
import axios from '../utils/Api';
import { token } from '../constants';

export const contactsList = () => {
    return (dispatch) => {
        axios.defaults.headers.common['Authorization'] = token;
        console.log(token)
        axios.get('contacts')
            .then(response => {
                debugger
                dispatch({
                    type: actionTypes.FETCH_USERS,
                    payload: response
                });
            })
            .catch(error => {
                debugger
                dispatch({
                    type: actionTypes.FETCH_USERS_FAILED,
                    payload: error
                });
            })
    };
};