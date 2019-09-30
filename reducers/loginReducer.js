import * as types from '../helpers/actionTypes/loginActionType'

const initialState = {
    email: '',
    password: ''
};

function login(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
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
        // Login
        case types.LOGIN:
            nextState = {
                ...state
                //TODO: login logic
            };
            return nextState || state;
        default:
            return state;
    }
}

export default login