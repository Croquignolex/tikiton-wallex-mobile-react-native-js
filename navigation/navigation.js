import Login from '../screens/auth/login'
import Dashboard from '../screens/dashboard'
import Register from '../screens/auth/register'
import Password from '../screens/auth/password'

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
    }
});

export default createAppContainer(SignStackNavigator)


