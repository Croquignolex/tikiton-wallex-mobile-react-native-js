import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { createAppContainer } from 'react-navigation';
import AppIntroSlider from 'react-native-app-intro-slider'

import SLIDERS from '../helpers/slidersHelper'
import { INTRO_SLIDES } from '../helpers/constantsHelper'
import rootNavigation from '../navigations/rootNavigation'
import { getStorageItem, setStorageItem } from '../helpers/functionsHelper'

const Root = ({ user }) => {
    const [shouldSlide, setShouldSlide] = useState(undefined);
    //const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Manage intro sliders render
        if(shouldSlide === undefined){
            getStorageItem(INTRO_SLIDES).then(
                (data) => {
                    data = JSON.parse(data);
                    if(data != null) setShouldSlide(data);
                    else setShouldSlide(true);

                    //setShouldRender(true);
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

    // Render
    //if(shouldRender) {
        if(shouldSlide === undefined) {
            // TODO: render a loading view just like the slash sreen
            console.log('render nothing')
            return null;
        }
        else if(shouldSlide) {
            console.log('render slider')
            return(
                <AppIntroSlider slides={SLIDERS}
                    showSkipButton={true}
                    onDone={() => slidersComplete()}
                    onSkip={() => slidersComplete()}
                />
            );
        } else {
            console.log('this is auth', user.auth)
            if(user.auth === undefined) {
                console.log('render nothing 2 ')
                return null;
            }
            else {
                const Navigation = createAppContainer(rootNavigation(user.auth));
                return(<Navigation />);
            }
        }
    /*} else {
        return null;
    }*/
};

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