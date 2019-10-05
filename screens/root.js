import React, { useEffect, useState } from 'react'
import { createAppContainer } from 'react-navigation';
import AppIntroSlider from 'react-native-app-intro-slider'

import SLIDERS from '../data/sliders'
import { emitUserData } from '../actions/authAction'
import rootNavigation from '../navigation/rootNavigation'
import { getStorageItem, setStorageItem } from '../helpers/functions'

const Root = (props) => {
    const [shouldRender, setShouldRender] = useState(false);
    const [shouldSlide, setShouldSlide] = useState(true);

    useEffect(() => {
        // Manage user auth render
        props.dispatch(emitUserData());

        if(!shouldRender){
            // Manage intro sliders render
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

    const slidersComplete = () => {
        setStorageItem('introSlides', false).then(
            () => {
                setShouldSlide(false);
            }
        ).catch((error) => console.log(`Something when wrong ${error}`));
    };

    console.log('render')
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
            const Navigation = createAppContainer(rootNavigation(props.user.auth));
            return(<Navigation />);
        }
    } else {
        return null;
    }
};

export default Root