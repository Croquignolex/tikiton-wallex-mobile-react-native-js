import Login from '../screens/auth/loginScreen'
import Password from '../screens/auth/passwordScreen'
import Register from '../screens/auth/registerScreen'

import { createStackNavigator } from 'react-navigation-stack'

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
    }
});

export default GuestStackNavigator


