import { combineReducers } from 'redux'

import login from './loginReducer'
import register from './registerReducer'
import forgetPassword from './forgetPasswordReducer'

const rootReducer = combineReducers({
    login,
    register,
    //forgetPassword
});

export default rootReducer
