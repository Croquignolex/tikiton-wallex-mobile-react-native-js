import { AUTH, USER_DATA, LOGIN } from '../actions/authAction.js'

const initialState = {
    email: '',
    auth: false,
    lastName: '',
    password: '',
    firstName: '',
};

/**
 *
 * @param state
 * @param action
 * @returns {{lastName: string, firstName: string, auth: boolean, email: string}|{lastName, firstName, auth: *, email}|{lastName: string, firstName: string, auth: boolean, email: string}|{lastName: *, firstName: *, auth, email: *}|{lastName: string, firstName: string, auth: boolean, email: string}}
 */
function user(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // Set user auth
        case AUTH:
            nextState = {
                ...state,
                auth: action.flag
            };
            return nextState || state;
        // Set user data
        case USER_DATA:
            nextState = {
                ...state,
                auth: action.flag,
                email: action.email,
                lastName: action.lastName,
                password: action.password,
                firstName: action.firstName,
            };
            return nextState || state;
        // Login
        case LOGIN:
            nextState = {
                ...state,
                auth: action.flag,
                email: action.email,
                password: action.password,
            };
            return nextState || state;
        // Unknown action
        default:
            return state;
    }
}

export default user