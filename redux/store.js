import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux'

import sagas from '../redux/sagas';
import reducers from '../redux/reducers';
import { checkAuthorization } from "./user/actions";

// Fetch all middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

// Create global store
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(...middleware)
);

// Run saga middleware
sagaMiddleware.run(sagas);

// Init global store
store.dispatch(checkAuthorization());

export default store