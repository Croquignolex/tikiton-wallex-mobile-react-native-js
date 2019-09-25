import Sign from '../screens/sign'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const SignStackNavigator = createStackNavigator({
    sign: {
        screen: Sign,
        navigationOptions: {
            title: 'Sign'
        }
    }
});

export default createAppContainer(SignStackNavigator)


