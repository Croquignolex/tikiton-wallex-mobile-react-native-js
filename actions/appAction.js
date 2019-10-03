import { AsyncStorage } from 'react-native'
import * as types from '../helpers/actionTypes/appActionType'

export const _introSlider = (flag) => ({
    type: types.INTRO_SLIDER,
    flag
});

export const emitCheckIntroSlider = () => {
    return async (dispatch) => {
        try {
            const userHasViewSliders = await AsyncStorage.getItem('userShouldSlide');
            if(userHasViewSliders !== null) dispatch(_introSlider(userHasViewSliders === 'true'));
            else dispatch(_introSlider(true));
        } catch (e) {
            dispatch(_introSlider(false));
        }
    }
};

export const emitHasSeenIntroSlider = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('userShouldSlide', 'false');
            dispatch(_introSlider(false));
        } catch (e) {
            dispatch(_introSlider(false));
        }
    }
};