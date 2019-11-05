import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { createAppContainer } from 'react-navigation'
import { View, Image, Dimensions } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

import IMAGES from '../helpers/imageHelper'
import STYLES from '../helpers/styleHelper'
import SLIDERS from '../helpers/slidersHelper'
import { INTRO_SLIDES } from '../helpers/constantsHelper'
import rootNavigation from '../navigations/rootNavigation'
import { getStorageItem, setStorageItem } from '../helpers/functionsHelper'

const Root = ({ user }) => {
    const [shouldSlide, setShouldSlide] = useState(undefined);

    useEffect(() => {
        // Manage intro sliders render
        if(shouldSlide === undefined){
            getStorageItem(INTRO_SLIDES).then(
                (data) => { 
                    data = JSON.parse(data);
                    if(data != null) setShouldSlide(data);
                    else setShouldSlide(true);
                }
            ).catch((error) => console.log(`Something when wrong ${error}`));
        }
    }, []);

    // Complete action (sliders)
    const slidersComplete = () => {
        setStorageItem(INTRO_SLIDES, false).then(
            () => {
                setShouldSlide(false);
            }
        ).catch((error) => console.log(`Something when wrong ${error}`));
    };

    // Full screen loading view to avoid white screen
    const fullScreenLoading = (
        <View style={[STYLES.middle, {flex: 1}]} behavior="padding" enabled> 
            <Image source={IMAGES.splash} style={{resizeMode: 'contain', width: width, height: height}}/>
        </View>
    );

    // Render
    if(shouldSlide === undefined) {
        // Render full screen loading view
        return (fullScreenLoading); 
    }
    else if(shouldSlide) {
        return(
            <AppIntroSlider slides={SLIDERS}
                showSkipButton={true}
                onDone={() => slidersComplete()}
                onSkip={() => slidersComplete()}
            />
        );
    } else {
        if(user.auth === undefined) {
            // Render full screen loading view 
            return (fullScreenLoading); 
        }
        else {
            const Navigation = createAppContainer(rootNavigation(user.auth));
            return(<Navigation />);
        }
    }
};

// Fetch screen width
const { width, height } = Dimensions.get("screen");

Root.propTypes = {
    user: PropTypes.object.isRequired
};

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action)}
});

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user
});

// Connect React to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Root);