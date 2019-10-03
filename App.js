import React from 'react'
import { Provider } from 'react-redux'

import Store from "./Store";
import Root from './containers/rootContainer'

const App = () => {
    return(<Provider store={Store}><Root /></Provider>);
};

export default App