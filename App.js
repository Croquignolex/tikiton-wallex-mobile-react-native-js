import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppIntroSlider from 'react-native-app-intro-slider'

import reducer from './reducers'
import SLIDERS from './data/sliders'
import Navigation from './navigation/navigation'

const store = createStore(reducer);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRealApp: false
        };
    }

    handleDone = () => {
        this.setState({showRealApp: true})
    };

    render() {
        if(this.state.showRealApp || true) {
            return (
                <Provider store={store}>
                    <Navigation />
                </Provider>
            );
        } else {
            return (
                <AppIntroSlider
                    slides={SLIDERS}
                    showSkipButton={true}
                    onDone={this.handleDone}
                    onSkip={this.handleDone}
                />
            );
        }
    }
}

export default App