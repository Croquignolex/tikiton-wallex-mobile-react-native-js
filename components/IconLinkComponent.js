import React from 'react'
import PropTypes from "prop-types"
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import STYLES from "../helpers/styleHelper"
import COLORS from "../helpers/colorHelper"

const CustomIconLink = ({name,
                         view,
                         handleOnPress,
                         ...props}) => {
    // View
    const iconView = view && <View style={[styles.notify, STYLES.middle]} />;

    // Render
    return (
        <TouchableOpacity{...props} style={styles.button} onPress={() => handleOnPress()}>
            <Icon size={20} name={name} color={COLORS.white}/>
            {iconView}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        padding: 12,
        position: 'relative',
        paddingBottom: 16
    },
    notify: {
        top: 9,
        right: 12,
        width: 16 / 2,
        height: 16 / 2,
        borderRadius: 4,
        position: 'absolute',
        backgroundColor: COLORS.success
    }
});

// Prop types
CustomIconLink.propTypes = {
    ...TouchableOpacity.propTypes,
    view: PropTypes.bool,
    name: PropTypes.string.isRequired,
    handleOnPress: PropTypes.func.isRequired
};

// Default props
CustomIconLink.defaultProps = {
    view: false
};

export default CustomIconLink