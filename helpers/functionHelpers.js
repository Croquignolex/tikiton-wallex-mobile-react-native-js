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
 * @returns {*}
 */
export const requiredChecker = (input) => {
    return inRange(input, 1)
};

/**
 *
 * @param input
 * @param min
 * @param max
 * @returns {*}
 */
const inRange = (input, min = 2, max = 255) => {
    const length = input.val.length;

    return (length <= max && length >= min)
        ? {...input, message: '', isValid: true}
        : {...input, isValid: false, message: `The input must have at least ${length} characters`}
};