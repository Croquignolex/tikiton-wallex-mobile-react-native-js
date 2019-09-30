import COLORS from "./colorHelper";
import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get("screen");

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
        shadowColor: COLORS.black,
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
    },
    authMainContainer: {
        flex: 1,
        backgroundColor: COLORS.theme
    },
    authLogo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    authSubmitButton: {
        height: 50,
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 50,
        width: width * 0.8,
        backgroundColor: COLORS.theme,
        borderColor: COLORS.white
    },
    authWhiteText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.white
    },
    authLink: {
        width: width * 0.8,
        flexDirection: 'row'
    }
});

export default STYLES