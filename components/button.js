import React from 'react'
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity, Text } from 'react-native'

import STYLES from "../helpers/styles";

function CustomButton({textStyle, icon, iconColor, iconStyle, text, handleOnPress, ...props}) {
    const buttonIcon = icon === '' ? <Text /> : (<Icon size={14}
                                                  name={icon}
                                                  color={iconColor}
                                                  style={iconStyle}
                                                />);
    return (
        <TouchableOpacity
            {...props}
            onPress={() => handleOnPress()}
        >
            <View style={[STYLES.middle, {flexDirection: 'row'}]}>
                {buttonIcon}
                <Text style={textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

CustomButton.propTypes = {
    ...TouchableOpacity.propTypes,
    text: PropTypes.string,
    handleOnPress: PropTypes.func.isRequired,
    textStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    iconStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

CustomButton.defaultProps = {
    text: '',
    textStyle: {},
    iconStyle: {marginRight: 12}
};

export default CustomButton