import React from 'react'
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import STYLES from "../helpers/styles";
import COLORS from "../helpers/colors";

function CustomCheckbox({color, check, handleOnPress, ...props}) {
    const checker = check ? <Icon name='check' size={14} color={color}/> : <Text />;

    return (
        <TouchableOpacity
            {...props}
            onPress={() => handleOnPress()}
        >
            <View style={[styles.checkboxView, STYLES.middle, {borderColor: color}]}>
                {checker}
            </View>
        </TouchableOpacity>
    )
}

CustomCheckbox.propTypes = {
    ...TouchableOpacity.propTypes,
    color: PropTypes.string,
    check: PropTypes.bool.isRequired,
    handleOnPress: PropTypes.func.isRequired
};

CustomCheckbox.defaultProps = {
    color: COLORS.white
};

const styles = StyleSheet.create({
    checkboxView: {
        width: 20,
        height: 20,
        borderWidth: 3,
        marginRight: 10,
        borderRadius: 6,
    },
});

export default CustomCheckbox