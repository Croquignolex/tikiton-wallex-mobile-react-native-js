import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'

import reducer from './reducers'
import SLIDERS from './data/sliders'
import Navigation from './navigation/navigation'

const store = createStore(reducer);

const App = () => {

    const [showRealApp, setShowRealApp] = useState(false);

    const render = showRealApp || true
        ? <Provider store={store}><Navigation /></Provider>
        : <AppIntroSlider slides={SLIDERS}
                          showSkipButton={true}
                          onDone={() => setShowRealApp(true)}
                          onSkip={() => setShowRealApp(true)}
          />;

    return (render)
};

export default App