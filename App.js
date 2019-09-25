import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'

import sliders from './data/sliders'
import Navigation from './navigation/navigation'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRealApp: false
        };

        this.handleDone = this.handleDone.bind(this)
    }

    handleDone() {
        this.setState({showRealApp: true})
    }

    render() {
        if(this.state.showRealApp) {
            return (
                <Navigation />
            );
        } else {
            return (
                <AppIntroSlider
                    slides={sliders}
                    onDone={this.handleDone}
                    showSkipButton={true}
                    onSkip={this.handleDone}
                />
            );
        }
    }
}

export default App