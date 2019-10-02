import Store from './Store'
import { Provider } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { createAppContainer } from 'react-navigation';
import AppIntroSlider from 'react-native-app-intro-slider'

import SLIDERS from './data/sliders'
import rootNavigation from './navigation/rootNavigation'

const App = () => {

    const [showRealApp, setShowRealApp] = useState(false);
    const Navigation = createAppContainer(rootNavigation(true));

    const render = showRealApp || true
        ? <Provider store={Store}><Navigation /></Provider>
        : <AppIntroSlider slides={SLIDERS}
                          showSkipButton={true}
                          onDone={() => setShowRealApp(true)}
                          onSkip={() => setShowRealApp(true)}
          />;

    useEffect(() => {
        // TODO: Check if user has already view the intro sliders (normal)
        // TODO: Check if user is auth and render the correct component (redux)
    });

    return (render)
};

export default App