import * as types from '../helpers/actionTypes/authActionType'

export const auth = () => ({
    type: types.AUTH
});

export const guest = () => ({
    type: types.GUEST
});

/*export const setAuth = () => {
    return dispatch => {
        dispatch(auth())
    }
};

export const setGuest = () => {
    return dispatch => {
        dispatch(guest())
    }
};*/

