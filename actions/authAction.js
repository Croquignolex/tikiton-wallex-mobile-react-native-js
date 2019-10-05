import { getStorageItem } from '../helpers/functionHelpers'

// Action types
export const INIT_AUTH = 'INIT_AUTH';

/**
 *
 * @param flag
 * @returns {{flag: *, type: *}}
 */
export const initAuth = (flag) => ({
    flag,
    type: INIT_AUTH
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
                if(data !== null) dispatch(initAuth(data));
                else dispatch(initAuth(false));
            }
        ).catch((error) => console.log(`Something when wrong ${error}`));
    }
};