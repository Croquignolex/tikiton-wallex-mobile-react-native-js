import React from 'react'
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native'

import COLORS from "../helpers/colors";
import STYLES from "../helpers/styles";

class SocialMediaButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {style, icon, text} = this.props.button;

        return (
            <TouchableOpacity style={[ styles.socialButtons, STYLES.blackShadow, STYLES.middle, style]} activeOpacity={0.8}>
                <SafeAreaView style={{flexDirection: 'row'}}>
                    <Icon name={icon} size={16} color={COLORS.white} style={styles.icon}/>
                    <Text style={styles.socialTextButtons}>{text}</Text>
                </SafeAreaView>
            </TouchableOpacity>
        )
    }

    static propTypes = {
        button: PropTypes.shape({
            style: PropTypes.object.isRequired,
            icon: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    }
}

const styles = StyleSheet.create({
    socialTextButtons: {
        color: COLORS.white,
        fontWeight: "800",
        fontSize: 14
    },
    icon: {
        marginTop: 2,
        marginRight: 5
    },
    socialButtons: {
        width: 120,
        height: 40,
        borderRadius: 3,
    }
});

export default SocialMediaButton