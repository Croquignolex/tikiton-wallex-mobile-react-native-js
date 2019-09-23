import React from 'react'
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import COLORS from "../helpers/colors";
import STYLES from "../helpers/styles";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    onPressHandle = () => {
        this.props.onPressHandle();
    };

    render() {
        const {text, check} = this.props.checkbox;
        const checker = check ? <Icon name='check' size={14} color={COLORS.theme}/> : <Text></Text>;

        return (
            <TouchableOpacity onPress={this.onPressHandle} activeOpacity={0.8} style={styles.checkbox}>
                <View style={[styles.checkboxView, STYLES.middle]}>
                    {checker}
                </View>
                <Text>{text}</Text>
            </TouchableOpacity>
        )
    }

    static propTypes = {
        checkbox: PropTypes.shape({
            text: PropTypes.string.isRequired,
            check: PropTypes.bool.isRequired,
        }).isRequired,
        onPressHandle: PropTypes.func.isRequired
    }
}

const styles = StyleSheet.create({
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    checkboxView: {
        width: 20,
        height: 20,
        borderWidth: 3,
        marginRight: 10,
        borderRadius: 6,
        borderColor: COLORS.theme
    },
});

export default Checkbox