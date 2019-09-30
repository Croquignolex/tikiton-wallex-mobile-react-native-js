import * as types from '../helpers/actionTypes/forgetPassworActionType'

export const fillEmail = (email) => ({
    type: types.FILL_EMAIL,
    email
});

export const sendCode = (email) => ({
    type: types.SEND_CODE,
    email
});
