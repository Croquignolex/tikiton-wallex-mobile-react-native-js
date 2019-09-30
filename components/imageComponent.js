import React from 'react'
import PropTypes from "prop-types";
import { View, Image, StyleSheet } from 'react-native'

import COLORS from "../helpers/colorHelper";
import STYLES from "../helpers/styleHelper";

//TODO: improve image loading animation
const CustomImage = ({areaStyle, ...props}) => {
    return (
        <View style={areaStyle}>
            <View style={styles.mainContainer} accessibilityIgnoresInvertColors={true}>
                <Image {...props} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.theme
    }
});

CustomImage.propTypes = {
    ...Image.propTypes,
    areaStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

CustomImage.defaultProps = {
    areaStyle: [STYLES.middle, {flex: 1}]
};

export default CustomImage