import React from 'react'
import { View, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'

import COLORS from '../../helpers/colors'
import STYLES from '../../helpers/styles'
import IMAGES from '../../helpers/images'

import Input from '../../components/input'
import Image from '../../components/image'
import Button from '../../components/button'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasAgree: false,
            email: '',
            password: '',
        }
    }

    handleInput = (value, name) => {
        this.setState({[name]: value})
    };

    handleLogin = () => {
        this.props.navigation.navigate('dashboard');
    };

    handleRegister = () => {
        this.props.navigation.navigate('dashboard');
    };

    handleForgottenPassword = () => {
        this.props.navigation.navigate('dashboard');
    };

    render() {
        return (
            <KeyboardAvoidingView style={[styles.mainContainer, STYLES.middle, {flex: 1}]} behavior="padding" enabled>
                <View style={{flex: 3}}>
                    {/*Logo*/}
                    <Image
                        style={styles.logo}
                        source={IMAGES.logo}
                    />
                </View>
                <View style={{flex: 3}}>
                    {/*E-mail input*/}
                    <Input icon={'at'}
                           name={'email'}
                           placeholder={'Email'}
                           value={this.state.email}
                           handleChangeText={this.handleInput}
                           areaStyle={{marginBottom: 15, width: width * 0.8}}
                    />
                    {/*Password input*/}
                    <Input icon={'lock'}
                           isPassword={true}
                           name={'password'}
                           placeholder={'Password'}
                           value={this.state.password}
                           handleChangeText={this.handleInput}
                           areaStyle={{marginBottom: 15, width: width * 0.8}}
                    />
                    {/*Login button*/}
                    <Button
                        text={'LOGIN'}
                        activeOpacity={0.5}
                        handleOnPress={this.handleLogin}
                        style={[styles.createButton, STYLES.middle]}
                        textStyle={styles.whiteText}
                    />
                </View>
                <View style={{flex: 1}}>
                    {/*Register link*/}
                    <Button
                        activeOpacity={0.7}
                        textStyle={styles.whiteText}
                        text={'I do not have an account'}
                        handleOnPress={this.handleRegister}
                        style={[styles.link, STYLES.middle]}
                    />
                    {/*Forgotten password link*/}
                    <Button
                        activeOpacity={0.7}
                        textStyle={styles.whiteText}
                        text={'I have forgot my password'}
                        handleOnPress={this.handleForgottenPassword}
                        style={[{marginTop: 10}, styles.link, STYLES.middle]}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.theme
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: height * 0.1
    },
    createButton: {
        height: 50,
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 50,
        width: width * 0.8,
        backgroundColor: COLORS.theme,
        borderColor: COLORS.white
    },
    whiteText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.white
    },
    link: {
        width: width * 0.8,
        flexDirection: 'row'
    }
});

export default Login