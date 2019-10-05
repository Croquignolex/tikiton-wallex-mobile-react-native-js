import { getStorageItem } from '../helpers/functions'

// Action types
export const AUTH = 'AUTH';
export const LOGIN = 'LOGIN';
export const USER_DATA = 'SET_USER_DATA';

/**
 *
 * @param flag
 * @returns {{flag: *, type: *}}
 */
export const auth = (flag) => ({
    flag,
    type: AUTH
});

/**
 *
 * @returns {{flag: *, type: *}}
 * @param email
 * @param password
 * @param flag
 */
export const login = (email, password, flag) => ({
    flag,
    email,
    password,
    type: LOGIN
});

/**
 *
 * @param firstName
 * @param lastName
 * @param email
 * @param password
 * @param flag
 * @returns {{firstName: *, lastName: *, type: *, email: *}}
 */
export const setUserData = (email, password, firstName, lastName, flag) => ({
    flag,
    email,
    password,
    lastName,
    firstName,
    type: USER_DATA
});

/**
 *
 * @param _login
 * @param _password
 * @returns {Function}
 */
export const emitLogin = (_login, _password) => {
    return (dispatch) => {
        //TODO: Check credentials by API call
        const apiResult = false; // Fake
        dispatch(login(_login, _password, apiResult))
    }
};

/**
 *
 * @returns {Function}
 */
export const emitAuth = () => {
    return (dispatch) => {
        getStorageItem('userAuth').then(
            (data) => {
                data = JSON.parse(data);
                if(data !== null) dispatch(auth(data));
                else dispatch(auth(false));
            }
        ).catch((error) => console.log(`Something when wrong ${error}`));
    }
};