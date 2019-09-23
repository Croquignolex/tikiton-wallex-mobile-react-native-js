import colors from "./colors";
import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({
    middle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    blackShadow: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    borderTransparent: {
        borderColor: 'transparent',
        borderWidth: 0,
    }
});

export default STYLES