import React from 'react'
import COLORS from '../../helpers/colorHelper'
import STYLES from '../../helpers/styleHelper'
import {SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Text, KeyboardAvoidingView} from 'react-native'

class Menu extends React.Component {
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
                            <Text style={[{color: COLORS.theme}, styles.createButtonText]}>
                                Settings page
                            </Text>
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
        backgroundColor: COLORS.warning
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

export default Menu
