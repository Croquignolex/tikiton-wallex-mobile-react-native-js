import { createSwitchNavigator } from 'react-navigation';

import Auth from './authNavigation'
import Guest from './guestNavigation'

const rootNavigator = (auth = false) => {
     return createSwitchNavigator(
         {
             auth: {screen: Auth},
             guest: {screen: Guest}
         },
         {
             initialRouteName: auth ? "auth" : "guest"
         }
     );
};

export default rootNavigator


