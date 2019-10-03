import * as types from '../helpers/actionTypes/appActionType'

const initialState = {
    shouldSlide: true
};

function app(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        // Set user auth
        case types.INTRO_SLIDER:
            nextState = {
                ...state,
                shouldSlide: action.flag
            };
            return nextState || state;
        // Unknown action
        default:
            return state;
    }
}

export default app