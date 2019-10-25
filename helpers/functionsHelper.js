import { AsyncStorage } from 'react-native'

/**
 *
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
export const setStorageItem = async (key, value) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
};

/**
 *
 * @param key
 * @returns {Promise<string>}
 */
export const getStorageItem = async (key) => {
    return await AsyncStorage.getItem(key)
};

/**
 *
 * @param input
 * @returns {*}
 */
export const emailChecker = (input) => {
    let regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/i;
    // !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return regex.test(input.val)
        ? {...input, message: '', isValid: true}
        : {...input, isValid: false, message: 'Incorrect email format'}
};

/**
 *
 * @param input
 * @returns {*}
 */
export const passwordChecker = (input) => {
    return inRange(input, 6)
};

/**
 *
 * @param input
 * @param passwordInput
 * @returns {*}
 */
export const passwordConfirmChecker = (input, passwordInput) => {
    return (input.val === passwordInput.val)
        ? {...input, message: '', isValid: true}
        : {...input, isValid: false, message: `Password confirmation does not match`};
};

/**
 *
 * @param input
 * @returns {*}
 */
export const requiredChecker = (input) => {
    return inRange(input, 1, 255, 'This input is required')
};

/**
 *
 * @param input
 * @param min
 * @param max
 * @param errorMessage
 * @returns {*}
 */
const inRange = (input, min = 2, max = 255, errorMessage = undefined) => {
    const length = input.val.length;
    const message = errorMessage ? errorMessage : `This input must have at least ${min} characters`;

    return (length <= max && length >= min)
        ? {...input, message: '', isValid: true}
        : {...input, isValid: false, message: message}
};