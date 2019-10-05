import { getStorageItem } from '../helpers/functionHelpers'

// Action types
export const AUTH = 'AUTH';

/**
 *
 * @param flag
 * @returns {{flag: *, type: *}}
 */
export const auth = (flag) => ({
    flag,
    type: AUTH
});

/**
 *
 * @returns {Function}
 */
export const emitInitAuth = () => {
    return (dispatch) => {
        getStorageItem('userAuth').then(
            (data) => {
                data = JSON.parse(data);
                if(data !== null) dispatch(auth(data));
                else dispatch(auth(false));
            }
        ).catch((error) => console.log(`Something when wrong ${error}`));
    }
};

/**
 *
 * @returns {Function}
 */
export const emitAuth = (flag) => {
    return (dispatch) => {
        dispatch(auth(flag));
    }
};