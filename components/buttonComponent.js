import React from 'react'
import PropTypes from "prop-types"
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TouchableOpacity, Text } from 'react-native'

import STYLES from "../helpers/styleHelper"

function CustomButton({icon,
                       text,
                       textStyle,
                       iconColor,
                       iconStyle,
                       handleOnPress,
                       ...props}) {

    // Icon
    const buttonIcon = icon && <Icon size={14} name={icon} color={iconColor} style={iconStyle}/>;

    // Render
    return (
        <TouchableOpacity {...props} onPress={() => handleOnPress()}>
            <View style={[STYLES.middle, {flexDirection: 'row'}]}>
                {buttonIcon}
                <Text style={textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

// Prop types
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

// Default props
CustomButton.defaultProps = {
    text: '',
    textStyle: {},
    iconStyle: {marginRight: 12}
};

export default CustomButton