import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView, Dimensions, TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../helpers/colors'

class Sign extends React.Component {
    render() {
        return (
            <SafeAreaView style={[styles.mainContainer, styles.center]}>
                <StatusBar hidden />
                <SafeAreaView style={[{flex: 1}, styles.center]}>
                    <SafeAreaView style={[styles.signContainer, styles.blackShadow]}>
                        <SafeAreaView style={[styles.socialConnect, styles.center]}>
                            <Text color={colors.lightGray} size={12}>
                                Sign up with
                            </Text>
                            <SafeAreaView style={{marginTop: 16, flexDirection: 'row'}}>
                                <TouchableOpacity style={[styles.socialButtons, styles.blackShadow, styles.center, {marginRight: 30, backgroundColor: colors.facebook}]} activeOpacity={0.8}>
                                    <SafeAreaView style={{flexDirection: 'row'}}>
                                        <Icon name='facebook' size={16} color={colors.white} style={styles.icon}/>
                                        <Text style={styles.socialTextButtons}>FACEBOOK</Text>
                                    </SafeAreaView>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.socialButtons, styles.blackShadow, styles.center, {backgroundColor: colors.google}]} activeOpacity={0.8}>
                                    <SafeAreaView style={{flexDirection: 'row'}}>
                                        <Icon name='google' size={16} color={colors.white} style={styles.icon}/>
                                        <Text style={styles.socialTextButtons}>GOOGLE</Text>
                                    </SafeAreaView>
                                </TouchableOpacity>
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
        overflow: "hidden"
    },
    socialConnect: {
        flex: 0.25,
        backgroundColor: colors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.lightGray
    },
    socialButtons: {
        width: 120,
        height: 40,
        borderRadius: 3
    },
    socialTextButtons: {
        color: colors.white,
        fontWeight: "800",
        fontSize: 14
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    blackShadow: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    icon: {
        marginTop: 2,
        marginRight: 5
    }
});

export default Sign