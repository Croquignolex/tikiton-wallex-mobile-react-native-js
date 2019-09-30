import Legal from '../screens/legal'
import Login from '../screens/auth/loginScreen'
import Dashboard from '../screens/dashboardScreen'
import Register from '../screens/auth/registerScreen'
import Password from '../screens/auth/passwordScreen'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const SignStackNavigator = createStackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    password: {
        screen: Password,
        navigationOptions: {
            header: null
        }
    },
    dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        }
    },
    legal: {
        screen: Legal,
        navigationOptions: {
            header: null
        }
    },
});

export default createAppContainer(SignStackNavigator)


