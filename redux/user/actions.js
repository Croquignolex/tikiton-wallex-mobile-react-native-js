// Action types
export const AUTH = 'AUTH';
export const BASIC_DATA = 'BASIC_DATA';
export const SET_USER_BASIC_DATA = 'SET_USER_BASIC_DATA';
export const CHECK_AUTHORIZATION = 'CHECK_AUTHORIZATION';

//====================== Reducer actions
// Auth action
export const auth = (flag) => ({
    flag,
    type: AUTH
});

// Set user basic data in store
export const basicData = (email, firstName) => ({
    email,
    firstName,
    type: BASIC_DATA
});


//====================== Middleware actions
// Authorization check action
export const checkAuthorization = () => ({
    type: CHECK_AUTHORIZATION
});

// Store user data after registration
export const setUserBasicData = (email, firstName) => ({
    email,
    firstName,
    type: SET_USER_BASIC_DATA
});