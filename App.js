import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import sliders from './data/sliders'

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
                <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default App