import Login from '../containers/loginContainer'
import Password from '../screens/auth/passwordScreen'
import Register from '../containers/resgisterContainer'

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


