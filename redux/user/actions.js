import { getStorageItem } from '../../helpers/functionsHelper'

// Action types
export const AUTH = 'AUTH';

// Set auth level 1
export const auth = (flag) => ({
    flag,
    type: AUTH
});

// Initialize user auth
export const emitInitAuth = () => {
    return (dispatch) => {
        // Fetch user auth in local storage
        getStorageItem('userAuth').then(
            (data) => {
                data = JSON.parse(data);
                if(data != null) dispatch(auth(data));
                else dispatch(auth(false));
            }
        ).catch((error) => console.log(`Something when wrong ${error}`));
    }
};

// Set auth level 2
export const emitAuth = (flag) => {
    return (dispatch) => {
        dispatch(auth(flag));
    }
};