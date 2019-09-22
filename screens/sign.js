import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView, Dimensions, Text} from 'react-native'
import colors from '../helpers/colors'

class Sign extends React.Component {
    render() {
        return (
            <SafeAreaView styles={[styles.mainContainer, styles.center]}>
                <StatusBar hidden />
                <SafeAreaView styles={[{flex: 1}, styles.center]}>
                    <SafeAreaView styles={styles.signContainer}>
                        <SafeAreaView styles={[styles.socialConnect, styles.center]}>
                            <Text color={colors.lightGray} size={12}>
                                Sign up with
                            </Text>
                            <SafeAreaView styles={{ marginTop: 16, flexDirection: 'row' }}>

                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        )
    }
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.theme
    },
    signContainer: {
        width: width * 0.9,
        height: height * 0.78,
        backgroundColor: colors.lightWhite,
        borderRadius: 4,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden"
    },
    socialConnect: {
        flex: 0.25,
        backgroundColor: colors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.lightGray
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Sign