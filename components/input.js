import React from 'react'
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native'

import COLORS from "../helpers/colors";
import STYLES from "../helpers/styles";

function CustomInput({areaStyle, icon, iconColor, iconStyle, isPassword, handleChangeText, ...props}) {
    const inputIcon = icon === '' ? null : (<Icon size={14}
                                                  name={icon}
                                                  color={iconColor}
                                                  style={iconStyle}
                                            />);
    return (
        <SafeAreaView style={areaStyle}>
            <View style={styles.mainContainer}>
                <View style={[styles.inputViewStyles, STYLES.borderTransparent, STYLES.middle]}>
                    {inputIcon}
                    <TextInput {...props}
                        style={styles.inputStyles}
                        secureTextEntry={isPassword}
                        placeholderTextColor={COLORS.muted}
                        underlineColorAndroid="transparent"
                        onChangeText={(val) => handleChangeText(val, props.name)}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

CustomInput.propTypes = {
    ...TextInput.propTypes,
    icon: PropTypes.string,
    isPassword: PropTypes.bool,
    iconColor: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
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
    areaStyle: {},
    placeholder: '',
    isPassword: false,
    iconColor: COLORS.theme,
    iconStyle: {marginRight: 12}
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
        color: COLORS.black,
        textDecorationColor: 'transparent',
        textShadowColor: 'transparent',
    }
});

export default CustomInput