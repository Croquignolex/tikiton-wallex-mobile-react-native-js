import * as types from '../helpers/actionTypes/forgetPassworActionType'

const initialState = {
    email: ''
};

function forgetPassword(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // Fill email
        case types.FILL_EMAIL:
            nextState = {
                ...state,
                email: action.email
            };
            return nextState || state;
        // Send code
        case types.SEND_CODE:
            nextState = {
                ...state
                //TODO: send code logic
            };
            return nextState || state;
        default:
            return state;
    }
}

export default forgetPassword