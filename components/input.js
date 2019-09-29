import React from 'react'
import PropTypes from "prop-types";
import { Icon } from 'react-native-elements'
import { View, TextInput, StyleSheet } from 'react-native'

import COLORS from "../helpers/colors";
import STYLES from "../helpers/styles";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    onInputHandle = (value) => {
        this.props.onInputHandle(value);
    };

    render() {
        const {placeholder, icon, color, email} = this.props.input;

        return (
            <View style={styles.mainContainer}>
                <View style={[styles.inputViewStyles, STYLES.borderTransparent, STYLES.middle]}>
                    <Icon type='font-awesome' name={icon} size={14} color={color} iconStyle={{marginRight: 12}}/>
                    <TextInput
                        style={styles.inputStyles}
                        placeholderTextColor={COLORS.muted}
                        underlineColorAndroid="transparent"
                        placeholder={placeholder}
                        onChangeText={this.onInputHandle}
                        value={email}
                    />
                </View>
            </View>
        )
    }

    static propTypes = {
        input: PropTypes.shape({
            placeholder: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
        onInputHandle: PropTypes.func.isRequired
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
        color: COLORS.black,
        fontSize: 16 * 0.875,
        textDecorationColor: 'transparent',
        textShadowColor: 'transparent',
    }
});

export default Input