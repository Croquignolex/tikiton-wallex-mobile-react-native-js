import { INIT_FORM_VALIDATION, LOGIN_FORM_VALIDATION } from '../actions/formValidationAction.js'

const initialState = {
    globalFailMessage: '',
    email: {isValid: true, message: '', val: ''},
    password: {isValid: true, message: '', val: ''}
};

/**
 *
 * @param state
 * @param action
 * @returns {{lastName: string, firstName: string, auth: boolean, email: string}|{lastName, firstName, auth: *, email}|{lastName: string, firstName: string, auth: boolean, email: string}|{lastName: *, firstName: *, auth, email: *}|{lastName: string, firstName: string, auth: boolean, email: string}}
 */
function validation(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // Init
        case INIT_FORM_VALIDATION:
            return state;
        // Login
        case LOGIN_FORM_VALIDATION:
            nextState = {
                ...state,
                globalFailMessage: action.globalFailMessage,
                email: {isValid: action.email.isValid, message: action.email.message, val: action.email.val},
                password: {isValid: action.password.isValid, message: action.password.message, val: action.password.val}
            };
            return nextState || state;
        // Unknown action
        default:
            return state;
    }
}

export default validation