import React from 'react'
import PropTypes from "prop-types"
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TextInput, StyleSheet, Text } from 'react-native'

import COLORS from "../helpers/colorHelper"
import STYLES from "../helpers/styleHelper"

const CustomInput = ({icon,
                      input,
                      areaStyle,
                      iconColor,
                      iconStyle,
                      isPassword,
                      handleChangeText,
                      ...props}) => {

    const {isValid, val, message, errorMessageColor} = input;

    // icon
    const inputIcon = icon && <Icon size={14}
                                    name={icon}
                                    style={iconStyle}
                                    color={isValid ? COLORS.black : COLORS.red}/>;

    // Error message
    const errorMessage = !isValid && <Text style={errorMessageColor
                                            ? {color: errorMessageColor}
                                            : {color: COLORS.red}}>
                                         {message}
                                     </Text>;
    // Render
    return (
        <View style={areaStyle}>
            <View style={styles.mainContainer}>
                <View style={[styles.inputViewStyles, STYLES.borderTransparent, STYLES.middle]}>
                    {inputIcon}
                    <TextInput {...props}
                               value={val}
                               secureTextEntry={isPassword}
                               placeholderTextColor={COLORS.muted}
                               underlineColorAndroid="transparent"
                               onChangeText={(val) => handleChangeText(val)}
                               style={[styles.inputStyles, isValid ? {color: COLORS.black} : {color: COLORS.red}]}
                    />
                </View>
                {errorMessage}
            </View>
        </View>
    )
};

// Style
const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 5,
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
        textShadowColor: 'transparent',
        textDecorationColor: 'transparent'
    }
});

// Prop types
CustomInput.propTypes = {
    icon: PropTypes.string,
    isPassword: PropTypes.bool,
    placeholder: PropTypes.string,
    input: PropTypes.object.isRequired,
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

// Default props
CustomInput.defaultProps = {
    icon: false,
    areaStyle: {},
    placeholder: '',
    isPassword: false,
    iconStyle: {marginRight: 12}
};

export default CustomInput