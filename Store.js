import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import user from './reducers/userReducer'
import app from './reducers/appReducer'

const Store = createStore(
    combineReducers({user, app}),
    applyMiddleware(thunk)
);

export default Store