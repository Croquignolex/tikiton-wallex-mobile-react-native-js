import React from 'react'
import { Easing, Animated } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import COLORS from '../helpers/colorHelper'
import Menu from '../screens/app/menuScreen'
import Search from '../screens/app/searchScreen'
import Header from '../components/headerComponent'
import Settings from '../screens/app/settingsScreen'
import Dashboard from '../screens/app/dashboardScreen'
import Notifications from '../screens/app/notificationsScreen'
import {
    MENU_PAGE,
    SETTINGS_PAGE,
    DASHBOARD_PAGE,
    NOTIFICATIONS_PAGE, SEARCH_PAGE
} from "../helpers/constantsHelper";


// Drawer dependencies
/*
import { Easing, Animated } from "react-native";
import MENU from '../helpers/menuHelper'
import DrawerItem from '../components/drawerItemComponent'
import { createDrawerNavigator } from 'react-navigation-drawer'
*/

// Transitions
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

// Stack from screen to screen
const DashboardStackNavigator = createStackNavigator({
    dashboard: {
        screen: Dashboard,
        navigationOptions: ({ navigation }) => ({
            header: <Header title={DASHBOARD_PAGE} navigation={navigation} isDashboardScreen={true} />
        })
    }
});

const SettingsStackNavigator = createStackNavigator({
    settings: {
        screen: Settings,
        navigationOptions: ({navigation}) => ({
            header: <Header title={SETTINGS_PAGE} navigation={navigation} />
        })
    }
});

const NotificationsStackNavigator = createStackNavigator({
    notifications: {
        screen: Notifications,
        navigationOptions: ({ navigation }) => ({
            header: <Header title={NOTIFICATIONS_PAGE} navigation={navigation} />
        })
    }
});

const MenuStackNavigator = createStackNavigator({
    menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            header: <Header title={MENU_PAGE} navigation={navigation} />
        })
    }
});

// Drawer navigation
/*const AuthDrawerNavigator = createDrawerNavigator({
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
*/

const tabIcon = (name, color) => {
    return (<Icon size={20} name={name} color={color}/>)
};

// Tab navigation
const MenuTabsNavigator = createBottomTabNavigator(
    {
        dashboard: {
            screen: DashboardStackNavigator,
            navigationOptions: {
                tabBarLabel: DASHBOARD_PAGE,
                tabBarIcon: ({tintColor}) =>  (tabIcon('pie-chart', tintColor))
            }
        },
        settings: {
            screen: SettingsStackNavigator,
            navigationOptions: {
                tabBarLabel: SETTINGS_PAGE,
                tabBarIcon: ({tintColor}) => (tabIcon('cog', tintColor))
            }
        },
        notifications: {
            screen: NotificationsStackNavigator,
            navigationOptions: {
                tabBarLabel: NOTIFICATIONS_PAGE,
                tabBarIcon: ({tintColor}) => (tabIcon('bell', tintColor))
            }
        },
        menu: {
            screen: MenuStackNavigator,
            navigationOptions: {
                tabBarLabel: 'More',
                tabBarIcon: ({tintColor}) => (tabIcon('bars', tintColor))
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: COLORS.white,
            inactiveTintColor: COLORS.theme,
            activeBackgroundColor: COLORS.theme,
            inactiveBackgroundColor: COLORS.white
        }
    }
);

// Global auth navigator
const AuthNavigator = createStackNavigator({
    tabs: {
        screen: MenuTabsNavigator,
        navigationOptions: {
            header: null
        }
    },
    search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            header: <Header title={SEARCH_PAGE} navigation={navigation} isSearchScreen={true} back={true} />
        })
    },
},{transitionConfig});

export default AuthNavigator


