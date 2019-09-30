import * as types from '../helpers/actionTypes/authActionType'

const initialState = {
    auth: false
};

function auth(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // User is auth
        case types.AUTH:
            nextState = {
                ...state,
                auth: true
            };
            return nextState || state;
        // User is guest
        case types.GUEST:
            nextState = {
                ...state,
                auth: false
            };
            return nextState || state;
        // Unknown action
        default:
            return state;
    }
}

export default auth