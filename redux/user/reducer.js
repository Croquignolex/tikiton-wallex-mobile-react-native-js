import { AUTH } from "./actions";

// Global state part
const initialState = {
    email: '',
    auth: false,
    lastName: '',
    password: '',
    firstName: '',
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
        // Unknown action
        default:
            return state;
    }
}

export default reduce