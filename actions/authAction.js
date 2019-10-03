import { AsyncStorage } from 'react-native'
import * as types from '../helpers/actionTypes/authActionType'

export const _auth = (flag) => ({
    type: types.AUTH,
    flag
});

export const _setUserData = (firstName, lastName, email) => ({
    type: types.USER_DATA,
    firstName,
    lastName,
    email
});

export const emitLogin = (login, password) => {
    return (dispatch) => {
        //TODO: Check credentials by API call
        const apiResult = true; // Fake
        dispatch(_auth(apiResult))
    }
};

export const emitUserData = () => {
    return async (dispatch) => {
        try {
            const userAuth = await AsyncStorage.getItem('userAuth');
            if(userAuth !== null) {
                dispatch(_auth(userAuth === 'true'));
                if(userAuth === 'true') {
                    const firstName = await AsyncStorage.getItem('userFirstName');
                    const lastName = await AsyncStorage.getItem('userLastName');
                    const email = await AsyncStorage.getItem('userEmail');
                    dispatch(_setUserData(firstName, lastName, email))
                }
            }
            else dispatch(_auth(false));
        } catch (e) {
            dispatch(_auth(false));
        }
    }
};