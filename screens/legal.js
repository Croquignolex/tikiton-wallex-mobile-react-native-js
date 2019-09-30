import React from 'react'
import COLORS from '../helpers/colorHelper'
import STYLES from '../helpers/styleHelper'
import {SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Text, KeyboardAvoidingView} from 'react-native'

class Legal extends React.Component {
    constructor(props) {
        super(props);
    }

    backHandle = () => {
        this.props.navigation.navigate('login');
    };

    render() {
        return (
            <SafeAreaView style={[styles.mainContainer, STYLES.middle]}>
                <SafeAreaView style={[{flex: 1}, STYLES.middle]}>
                    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                        {/*Button are*/}
                        <SafeAreaView style={STYLES.middle}>
                            <TouchableOpacity style={[styles.createButton, STYLES.middle]} activeOpacity={0.8} onPress={this.backHandle}>
                                <Text style={[{color: COLORS.theme}, styles.createButtonText]}>
                                    GO TO LOGIN
                                </Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </SafeAreaView>
        )
    }
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.lightGray
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    createButton: {
        marginTop: 25,
        borderRadius: 3,
        height: 16 * 2.75,
        width: width * 0.5,
        backgroundColor: COLORS.white,
    },
    createButtonText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    indicationText: {
        fontSize: 14,
        color: COLORS.white,
        fontWeight: 'bold'
    }
});

export default Legal
