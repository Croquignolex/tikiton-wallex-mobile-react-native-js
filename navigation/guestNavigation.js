import Legal from '../screens/legal'
import Login from '../containers/loginContainer'
import Register from '../screens/auth/registerScreen'
import Password from '../screens/auth/passwordScreen'

import { createStackNavigator } from 'react-navigation-stack';

const GuestStackNavigator = createStackNavigator({
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
    legal: {
        screen: Legal,
        navigationOptions: {
            header: null
        }
    },
});

export default GuestStackNavigator


