import { AUTH, BASIC_DATA } from "./actions";

// Global state part
const initialState = {
    email: '',
    firstName: '',
    auth: undefined
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // Auth
        case AUTH:
            nextState = {
                ...state,
                auth: action.flag
            };
            return nextState || state;
        // Basic data
        case BASIC_DATA:
            nextState = {
                ...state,
                auth: true,
                email: action.email,
                firstName: action.firstName
            };
            return nextState || state;
        // Unknown action
        default:
            return state;
    }
}

export default reduce