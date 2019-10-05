import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import user from './reducers/userReducer'

const Store = createStore(
    combineReducers({user}),
    applyMiddleware(thunk)
);

export default Store