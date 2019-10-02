import * as types from '../helpers/actionTypes/authActionType'

const initialState = {
    auth: false
};

function auth(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // Set user auth
        case types.AUTH:
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

export default auth