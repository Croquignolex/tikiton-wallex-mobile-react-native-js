import Sign from '../screens/sign'
import Dashboard from '../screens/dashboard'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const SignStackNavigator = createStackNavigator({
    sign: {
        screen: Sign,
        navigationOptions: {
            //title: 'Sign'
            header: null
        }
    },
    dashboard: {
        screen: Dashboard,
        navigationOptions: {
            //title: 'Sign'
            header: null
        }
    }
});

export default createAppContainer(SignStackNavigator)


