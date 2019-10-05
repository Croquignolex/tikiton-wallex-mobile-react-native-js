import { AsyncStorage } from 'react-native'

export const setStorageItem = async (key, value) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
};

export const getStorageItem = async (key) => {
    return await AsyncStorage.getItem(key)
};

export const emailChecker = (input) => {
    let regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/i;
    if(regex.test(input.val)) {
        return {
            ...input,
            message: '',
            isValid: true
        }
    } else {
        return {
            ...input,
            isValid: false,
            message: 'Incorrect email format'
        }
    }
};

export const passwordChecker = (input) => {
    if(inRange(input.val.length, 6)) {
        return {
            ...input,
            message: '',
            isValid: true
        }
    } else {
        return {
            ...input,
            isValid: false,
            message: 'The password ust have at least 6 characters'
        }
    }
};

const inRange = (value, min = 2, max = 255) => {
  return (value <= max && value >= min)
};