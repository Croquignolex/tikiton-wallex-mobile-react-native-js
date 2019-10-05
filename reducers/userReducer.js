import { INIT_AUTH } from '../actions/authAction.js'

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
        case INIT_AUTH:
            nextState = {
                ...state,
                auth: action.flag
            };
            return nextState || state;
        // Unknown action
        default:
            return state;
    }
}

export default user