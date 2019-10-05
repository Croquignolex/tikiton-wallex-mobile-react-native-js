import React, { useEffect, useState } from 'react'
import { createAppContainer } from 'react-navigation';
import AppIntroSlider from 'react-native-app-intro-slider'

import PropTypes from "prop-types";
import SLIDERS from '../data/sliders'
import rootNavigation from '../navigation/rootNavigation'
import { getStorageItem, setStorageItem } from '../helpers/functions'

const Root = ({ user }) => {
    const [shouldSlide, setShouldSlide] = useState(true);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Manage intro sliders render
        if(!shouldRender){
            getStorageItem('introSlides').then(
                (data) => {
                    data = JSON.parse(data);
                    if(data !== null) setShouldSlide(data);
                    else setShouldSlide(true);

                    setShouldRender(true);
                }
            ).catch((error) => console.log(`Something when wrong ${error}`));
        }
    }, []);

    // Complete action (sliders)
    const slidersComplete = () => {
        setStorageItem('introSlides', false).then(
            () => {
                setShouldSlide(false);
            }
        ).catch((error) => console.log(`Something when wrong ${error}`));
    };

    // Render
    if(shouldRender) {
        if(shouldSlide) {
            return(
                <AppIntroSlider slides={SLIDERS}
                    showSkipButton={true}
                    onDone={() => slidersComplete()}
                    onSkip={() => slidersComplete()}
                />
            );
        } else {
            const Navigation = createAppContainer(rootNavigation(user.auth));
            return(<Navigation />);
        }
    } else {
        return null;
    }
};

Root.propTypes = {
    user: PropTypes.object.isRequired
};

export default Root