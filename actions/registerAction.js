import * as types from '../helpers/actionTypes/registerActionType'

export const toogleAgree = () => ({
    type: types.TOGGLE_AGREE
});

export const fillEmail = (email) => ({
    type: types.FILL_EMAIL,
    email
});

export const fillFirstName = (firstName) => ({
    type: types.FILL_FIRST_NAME,
    firstName
});

export const fillLastName = (lastName) => ({
    type: types.FILL_LAST_NAME,
    lastName
});

export const fillPassword = (password) => ({
    type: types.FILL_PASSWORD,
    password
});

export const register = (firstName, lastName, password, hasAgree) => ({
    type: types.REGISTER,
    firstName,
    lastName,
    password,
    hasAgree
});
