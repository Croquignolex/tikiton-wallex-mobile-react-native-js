import React, { useEffect } from 'react'
import { createAppContainer } from 'react-navigation';
import AppIntroSlider from 'react-native-app-intro-slider'

import SLIDERS from '../data/sliders'
import { emitUserData } from '../actions/authAction'
import rootNavigation from '../navigation/rootNavigation'
import { emitCheckIntroSlider, emitHasSeenIntroSlider } from '../actions/appAction'

const Root = (props) => {
    useEffect(() => {
        // Manage intro sliders render
        props.dispatch(emitCheckIntroSlider());

        // Manage user auth render
        props.dispatch(emitUserData());
    }, []);

    if(props.app.shouldSlide) {
        return(
            <AppIntroSlider slides={SLIDERS}
                showSkipButton={true}
                onDone={() => props.dispatch(emitHasSeenIntroSlider())}
                onSkip={() => props.dispatch(emitHasSeenIntroSlider())}
            />
        );
    } else {
        const Navigation = createAppContainer(rootNavigation(props.user.auth));
        return(<Navigation />);
    }
};

export default Root