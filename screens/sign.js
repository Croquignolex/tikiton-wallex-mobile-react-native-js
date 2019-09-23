import React from 'react'
import COLORS from '../helpers/colors'
import STYLES from '../helpers/styles'
import Input from '../components/input'
import Checkbox from '../components/checkbox'
import SocialMediaButton from '../components/social-media-button'
import {StyleSheet, StatusBar, SafeAreaView, Dimensions, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native'

class Sign extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasAgree: false
        }
    }

    agreeHandle = () => {
        this.setState(state => {
            return {hasAgree: !state.hasAgree}
        })
    };

    render() {
        return (
            <SafeAreaView style={[styles.mainContainer, STYLES.middle]}>
                {/*Hide status bar*/}
                <StatusBar hidden />
                <SafeAreaView style={[{flex: 1}, STYLES.middle]}>
                    <SafeAreaView style={[styles.signContainer, STYLES.blackShadow]}>
                         {/*Start social media connect area */}
                        <SafeAreaView style={[styles.socialConnect, STYLES.middle]}>
                            {/*Text*/}
                            <Text style={styles.indicationText}>Sign up with</Text>
                            {/*Start buttons area*/}
                            <SafeAreaView style={{marginTop: 16, flexDirection: 'row'}}>
                                {/*Start social media buttons*/}
                                <SocialMediaButton button={{icon: 'facebook', text: 'FACEBOOK', style: {marginRight: 30, backgroundColor: COLORS.facebook}}}/>
                                <SocialMediaButton button={{icon: 'google', text: 'GOOGLE', style: {backgroundColor: COLORS.google}}}/>
                                {/*End social media buttons*/}
                            </SafeAreaView>
                            {/*End buttons area*/}
                        </SafeAreaView>
                        {/*End social media connect area*/}
                        <SafeAreaView style={{flex: 1}}>
                            {/*Title*/}
                            <SafeAreaView style={[{flex: 0.17}, STYLES.middle]}>
                                <Text style={styles.indicationText}>Or sign up the classic way</Text>
                            </SafeAreaView>
                            {/*Sign area*/}
                            <SafeAreaView style={[{flex: 1}, STYLES.center]}>
                                <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                                    {/*Input area*/}
                                    <SafeAreaView style={{marginBottom: 15, width: width * 0.8}}>
                                        <Input input={{placeholder: 'Email', icon: 'at', width: width}}/>
                                    </SafeAreaView>
                                    {/*Checkbox are*/}
                                    <SafeAreaView style={{flexDirection: 'row', width: width * 0.75}}>
                                        <Checkbox checkbox={{text: 'I agree with the', check: this.state.hasAgree}} onPressHandle={this.agreeHandle}/>
                                        {/*Privacy link*/}
                                        <TouchableOpacity style={{width: 100, color: 'transparent'}} activeOpacity={0.8}>
                                            <Text style={{color: COLORS.theme, fontSize: 14}}> Privacy policy</Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>
                                    {/*Button are*/}
                                    <SafeAreaView style={STYLES.middle}>
                                        <TouchableOpacity style={[styles.createButton, STYLES.middle]} activeOpacity={0.8}>
                                            <Text style={{color: COLORS.white, fontSize: 14}}>
                                                CREATE ACCOUNT
                                            </Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>
                                </KeyboardAvoidingView>
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
        backgroundColor: COLORS.theme
    },
    signContainer: {
        borderRadius: 4,
        overflow: "hidden",
        width: width * 0.9,
        height: height * 0.78,
        backgroundColor: COLORS.lightWhite
    },
    socialConnect: {
        flex: 0.25,
        backgroundColor: COLORS.white,
        borderColor: COLORS.lightGray,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    indicationText: {
        fontSize: 12,
        color: COLORS.lightGray
    },
    createButton: {
        marginTop: 25,
        borderRadius: 3,
        height: 16 * 2.75,
        width: width * 0.5,
        backgroundColor: COLORS.theme,

    }
});

export default Sign