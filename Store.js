import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux'

import user from './reducers/userReducer'
import validation from './reducers/formValidationReducer'
import { emitInitAuth } from "./actions/authAction";
import { emitInitFormValidation } from "./actions/formValidationAction";

/**
 *
 * @type {Store<S & S & {}, AnyAction> & Store<S & {}, A> & {dispatch: Dispatch<A>}}
 */
const Store = createStore(
    combineReducers({user, validation}), applyMiddleware(thunk)
);

// load default props
Store.dispatch(emitInitAuth());
Store.dispatch(emitInitFormValidation());

export default Store