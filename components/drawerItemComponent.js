import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import COLORS from '../helpers/colorHelper';
import STYLES from '../helpers/styleHelper';
import {
    SETTINGS_PAGE,
    DASHBOARD_PAGE,
    NOTIFICATIONS_PAGE
} from "../helpers/constantsHelper";

const CustomDrawerItem = ({focused, title}) => {
    // Drawer icons
    const renderIcon = () => {
        switch (title) {
            case DASHBOARD_PAGE:
                return (
                    <Icon
                        size={20}
                        name="pie-chart"
                        color={focused ? COLORS.white : COLORS.theme}
                    />
                );
            case SETTINGS_PAGE:
                return (
                    <Icon
                        size={20}
                        name="cog"
                        color={focused ? COLORS.white : COLORS.primary}
                    />
                );
            case NOTIFICATIONS_PAGE:
                return (
                    <Icon
                        size={20}
                        name="bell"
                        color={focused ? COLORS.white : COLORS.success}
                    />
                );
            default:
                return null;
        }
    };

    // Text style
    const textStyle = focused
        ? {color: COLORS.white, fontWeight: 'bold'}
        : {color: COLORS.icon};

    // Render
    return (
        <View style={[{flex: 1}, styles.defaultStyle, focused && styles.activeStyle]}>
            <View style={[styles.iconStyle, STYLES.middle]}>
                {renderIcon()}
            </View>
            <View style={[{flex: 0.9, flexDirection: 'row'}, STYLES.center]}>
                <Text style={[{fontSize: 15}, textStyle]}>{title}</Text>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    defaultStyle: {
        paddingVertical: 12,
        marginHorizontal: 2,
        flexDirection: 'row',
    },
    activeStyle: {
        borderRadius: 5,
        shadowColor: COLORS.black,
        backgroundColor: COLORS.theme,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.1
    },
    iconStyle: {
        flex: 0.1,
        marginLeft: 5,
        marginRight: 5
    }
});

// Prop types
CustomDrawerItem.propTypes = {
    focused: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};

export default CustomDrawerItem;
