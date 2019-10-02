import * as types from '../helpers/actionTypes/authActionType'

export const auth = (flag) => ({
    type: types.AUTH,
    flag
});

export const emitAuth = (login, password) => {
    return (dispatch) => {
        //TODO: Check credentials by API call
        const apiResult = true; // Fake
        dispatch(auth(apiResult))
    }
};