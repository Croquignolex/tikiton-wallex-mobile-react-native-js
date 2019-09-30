import * as types from '../helpers/actionTypes/loginActionType'

export const fillEmail = (email) => ({
    type: types.FILL_EMAIL,
    email
});

export const fillPassword = (password) => ({
    type: types.FILL_PASSWORD,
    password
});

export const login = (email, password) => ({
    type: types.LOGIN,
    email,
    password
});
