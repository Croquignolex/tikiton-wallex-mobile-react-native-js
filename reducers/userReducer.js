import * as types from '../helpers/actionTypes/authActionType'

const initialState = {
    auth: false,
    email: '',
    lastName: '',
    firstName: '',
};

function user(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // Set user auth
        case types.AUTH:
            nextState = {
                ...state,
                auth: action.flag
            };
            return nextState || state;
        // Set user data
        case types.USER_DATA:
            nextState = {
                ...state,
                email: action.email,
                lastName: action.lastName,
                firstName: action.firstName,
            };
            return nextState || state;
        // Unknown action
        default:
            return state;
    }
}

export default user