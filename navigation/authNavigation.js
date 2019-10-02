import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import COLORS from "../helpers/colorHelper"
import Dashboard from '../screens/dashboardScreen'
import Settings from '../screens/settingsScreen'

const AuthTabsNavigator = createBottomTabNavigator(
    {
        dashboard: {
            screen: Dashboard,
            navigationOptions: {
                tabBarLabel: "Dashboard",
                tabBarIcon: () => (
                    <Icon size={14} name={'pie'} color={COLORS.theme} style={styles.icon}/>
                )
            }
        },
        settings: {
            screen: Settings,
            navigationOptions: {
                tabBarLabel: "Settings",
                tabBarIcon: () => (
                    <Icon size={14} name={'cog'} color={COLORS.theme} style={styles.icon}/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF'
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
});

export default AuthTabsNavigator


