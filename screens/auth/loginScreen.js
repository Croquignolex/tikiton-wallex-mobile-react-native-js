import React from 'react'
import { View, Dimensions, KeyboardAvoidingView } from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.props.navigation.navigate('register');
    };

    handleForgottenPassword = () => {
        this.props.navigation.navigate('password');
    };

    render() {
        return (
            <KeyboardAvoidingView style={[STYLES.authMainContainer, STYLES.middle, {flex: 1}]} behavior="padding" enabled>
                <View style={{flex: 3}}>
                    {/*Logo*/}
                    <Image
                        style={STYLES.authLogo}
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
                        style={[STYLES.authSubmitButton, STYLES.middle]}
                        textStyle={STYLES.authWhiteText}
                    />
                </View>
                <View style={{flex: 1}}>
                    {/*Register link*/}
                    <Button
                        activeOpacity={0.7}
                        textStyle={STYLES.authWhiteText}
                        text={'I do not have an account'}
                        handleOnPress={this.handleRegister}
                        style={[ STYLES.authLink, STYLES.middle]}
                    />
                    {/*Forgotten password link*/}
                    <Button
                        activeOpacity={0.7}
                        textStyle={STYLES.authWhiteText}
                        text={'I have forgot my password'}
                        handleOnPress={this.handleForgottenPassword}
                        style={[{marginTop: 10}, STYLES.authLink, STYLES.middle]}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const { width } = Dimensions.get("screen");

export default Login