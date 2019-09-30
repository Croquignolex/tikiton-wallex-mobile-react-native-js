import Store from './Store'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'

import SLIDERS from './data/sliders'
import Navigation from './navigation/navigation'



const App = () => {

    const [showRealApp, setShowRealApp] = useState(false);

    const render = showRealApp || true
        ? <Provider store={Store}><Navigation /></Provider>
        : <AppIntroSlider slides={SLIDERS}
                          showSkipButton={true}
                          onDone={() => setShowRealApp(true)}
                          onSkip={() => setShowRealApp(true)}
          />;

    return (render)
};

export default App