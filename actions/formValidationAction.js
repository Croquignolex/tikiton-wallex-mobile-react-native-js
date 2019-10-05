// Action types
export const INIT_FORM_VALIDATION = 'INIT_FORM_VALIDATION';
export const LOGIN_FORM_VALIDATION = 'LOGIN_FORM_VALIDATION';

/**
 *
 * @returns {{flag: *, type: *}}
 * @param email
 * @param password
 * @param globalFailMessage
 */
export const login = (email, password, globalFailMessage = '') => ({
    email,
    password,
    globalFailMessage,
    type: LOGIN_FORM_VALIDATION
});

/**
 *
 * @returns {{type: *}}
 */
export const initFormValidation = () => ({
    type: INIT_FORM_VALIDATION
});

/**
 *
 * @returns {Function}
 * @param email
 * @param password
 */
export const emitLoginValidation = (email, password) => {
    return (dispatch) => {
        //TODO: Check credentials by API call and check data format
        dispatch(login(email, password, 'Email or password incorrect'))
    }
};

/**
 *
 * @returns {Function}
 */
export const emitInitFormValidation = () => {
    return (dispatch) => {
        dispatch(initFormValidation())
    }
};



