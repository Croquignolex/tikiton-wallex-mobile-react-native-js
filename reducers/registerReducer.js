import * as types from '../helpers/actionTypes/registerActionType'

const initialState = {
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    hasAgree: false
};

function register(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // Toggle agree
        case types.TOGGLE_AGREE:
            nextState = {
                ...state,
                hasAgree: !state.hasAgree
            };
            return nextState || state;
        // Fill first name
        case types.FILL_FIRST_NAME:
            nextState = {
                ...state,
                firstName: action.firstName
            };
            return nextState || state;
        // Fill last name
        case types.FILL_LAST_NAME:
            nextState = {
                ...state,
                lastName: action.lastName
            };
            return nextState || state;
        // Fill email
        case types.FILL_EMAIL:
            nextState = {
                ...state,
                email: action.email
            };
            return nextState || state;
        // Fill password
        case types.FILL_PASSWORD:
            nextState = {
                ...state,
                password: action.password
            };
            return nextState || state;
        // Register
        case types.REGISTER:
            nextState = {
                ...state
                //TODO: register logic
            };
            return nextState || state;
        default:
            return state;
    }
}

export default register