import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux'

import user from './reducers/userReducer'
import { emitInitAuth } from "./actions/authAction";

/**
 *
 * @type {Store<S & S & {}, AnyAction> & Store<S & {}, A> & {dispatch: Dispatch<A>}}
 */
const Store = createStore(
    combineReducers({user}), applyMiddleware(thunk)
);

// load default props
Store.dispatch(emitInitAuth());

export default Store