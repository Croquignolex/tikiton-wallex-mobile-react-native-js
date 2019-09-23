import React from 'react'
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, StyleSheet } from 'react-native'

import COLORS from "../helpers/colors";
import STYLES from "../helpers/styles";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {placeholder, icon, width} = this.props.input;

        return (
            <View style={styles.mainContainer}>
                <View style={[styles.inputViewStyles, STYLES.borderTransparent, STYLES.middle]}>
                    <Icon name={icon} size={14} color={COLORS.black} style={{marginRight: 12}}/>
                    <TextInput
                        style={styles.inputStyles}
                        placeholderTextColor={COLORS.muted}
                        underlineColorAndroid="transparent"
                        placeholder={placeholder}
                    />
                </View>
            </View>
        )
    }

    static propTypes = {
        input: PropTypes.shape({
            placeholder: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
        }).isRequired
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 8,
        alignContent: 'center'
    },
    inputViewStyles: {
        height: 44,
        width: '100%',
        borderRadius: 4,
        flexDirection: 'row',
        paddingHorizontal: 16,
        backgroundColor: COLORS.white
    },
    inputStyles: {
        flex: 1,
        color: COLORS.input,
        fontSize: 16 * 0.875,
        textDecorationColor: 'transparent',
        textShadowColor: 'transparent',
    }
});

export default Input