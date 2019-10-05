import React from 'react'
import PropTypes from "prop-types"
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native'

import COLORS from "../helpers/colorHelper"
import STYLES from "../helpers/styleHelper"

const CustomInput = ({icon,
                      isValid,
                      areaStyle,
                      iconColor,
                      iconStyle,
                      isPassword,
                      handleChangeText,
                      ...props}) => {

    const inputIcon = icon && <Icon size={14} name={icon} color={iconColor} style={iconStyle}/>;

    return (
        <SafeAreaView style={areaStyle}>
            <View style={styles.mainContainer}>
                <View style={[styles.inputViewStyles, STYLES.borderTransparent, STYLES.middle]}>
                    {inputIcon}
                    <TextInput {...props}
                               secureTextEntry={isPassword}
                               placeholderTextColor={COLORS.muted}
                               underlineColorAndroid="transparent"
                               onChangeText={(val) => handleChangeText(val)}
                               style={[styles.inputStyles, isValid ? {color: COLORS.black} : {color: COLORS.red}]}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 8,
        alignContent: 'center'
    },
    inputViewStyles: {
        height: 50,
        width: '100%',
        borderRadius: 50,
        flexDirection: 'row',
        paddingHorizontal: 16,
        backgroundColor: COLORS.white
    },
    inputStyles: {
        flex: 1,
        fontSize: 15,
        textDecorationColor: 'transparent',
        textShadowColor: 'transparent'
    }
});

CustomInput.propTypes = {
    //...TextInput.propTypes,
    icon: PropTypes.string,
    isValid: PropTypes.bool,
    isPassword: PropTypes.bool,
    iconColor: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    areaStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    iconStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

CustomInput.defaultProps = {
    icon: '',
    isValid: true,
    areaStyle: {},
    placeholder: '',
    isPassword: false,
    iconColor: COLORS.theme,
    iconStyle: {marginRight: 12}
};

export default CustomInput