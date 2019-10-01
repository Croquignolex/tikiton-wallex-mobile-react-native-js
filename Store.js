import { createStore } from 'redux'

import reducer from './reducers'

const globalStore = {
    user: {
        auth: false
    }
};

const Store = createStore(reducer, globalStore);

export default Store