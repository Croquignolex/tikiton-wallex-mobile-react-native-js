import React from 'react'
import PropTypes from "prop-types";
import { View, Image, StyleSheet } from 'react-native'

import COLORS from "../helpers/colors";
import STYLES from "../helpers/styles";

//TODO: improve image loading animation
function CustomImage({areaStyle, ...props}) {
    return (
        <View style={areaStyle}>
            <View
                style={styles.mainContainer}
                accessibilityIgnoresInvertColors={true}
            >
                <Image {...props} />
            </View>
        </View>
    )
}

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

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.theme
    }
});

export default CustomImage