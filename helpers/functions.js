import { AsyncStorage } from 'react-native'

export const setStorageItem = async (key, value) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
};

export const getStorageItem = async (key) => {
    return await AsyncStorage.getItem(key)
};