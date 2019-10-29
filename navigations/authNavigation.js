import React from 'react'
import { Easing, Animated } from "react-native";
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import MENU from '../helpers/menuHelper'
import Header from '../components/headerComponent'
import Settings from '../screens/app/settingsScreen'
import Dashboard from '../screens/app/dashboardScreen'
import DrawerItem from '../components/drawerItemComponent'
import Notifications from '../screens/app/notificationsScreen'
import {
    SETTINGS_PAGE,
    DASHBOARD_PAGE,
    NOTIFICATIONS_PAGE
} from "../helpers/constantsHelper";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
    transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const scale = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [4, 1, 1]
        });
        const opacity = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [0, 1, 1]
        });
        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0]
        });

        const scaleWithOpacity = { opacity };
        const screenName = "Search";

        if (
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps &&
                screenName === prevTransitionProps.scene.route.routeName)
        ) {
            return scaleWithOpacity;
        }
        return { transform: [{ translateX }] };
    }
});

const DashboardStackNavigator = createStackNavigator({
    dashboard: {
        screen: Dashboard,
        navigationOptions: ({ navigation }) => ({
            header: <Header title={DASHBOARD_PAGE} navigation={navigation} isDashboardScreen={true} />
        })
    }
},{
    cardStyle: {
        backgroundColor: "#F8F9FE"
    },
    transitionConfig
});

const SettingsStackNavigator = createStackNavigator({
    settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => ({
            header: <Header title={SETTINGS_PAGE} navigation={navigation} />
        })
    }
},{
    cardStyle: {
        backgroundColor: "#F8F9FE"
    },
    transitionConfig
});

const NotificationsStackNavigator = createStackNavigator({
    notifications: {
        screen: Notifications,
        navigationOptions: ({ navigation }) => ({
            header: <Header title={NOTIFICATIONS_PAGE} navigation={navigation} />
        })
    }
},{
    cardStyle: {
        backgroundColor: "#F8F9FE"
    },
    transitionConfig
});

const AuthDrawerNavigator = createDrawerNavigator({
    dashboard: {
        screen: DashboardStackNavigator,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title={DASHBOARD_PAGE} />
            )
        })
    },
    settings: {
        screen: SettingsStackNavigator,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title={SETTINGS_PAGE} />
            )
        })
    },
    notifications: {
        screen: NotificationsStackNavigator,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title={NOTIFICATIONS_PAGE} />
            )
        })
    }
}, MENU);

export default AuthDrawerNavigator


