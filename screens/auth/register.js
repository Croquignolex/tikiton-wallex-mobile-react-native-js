import React from 'react'
import { View, Dimensions, KeyboardAvoidingView, StyleSheet, Text } from 'react-native'

import STYLES from '../../helpers/styles'
import IMAGES from '../../helpers/images'

import Input from '../../components/input'
import Image from '../../components/image'
import Button from '../../components/button'
import Checkbox from '../../components/checkbox'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            lastName: '',
            firstName: '',
            hasAgree: false
        }
    }

    handleInput = (value, name) => {
        this.setState({[name]: value})
    };

    handleAgree = () => {
        this.setState(state => {
            state.hasAgree = !state.hasAgree;
            return state;
        })
    };

    handleLogin = () => {
        this.props.navigation.navigate('login');
    };

    handleRegister = () => {
        this.props.navigation.navigate('dashboard');
    };

    handleLegal = () => {
        this.props.navigation.navigate('legal');
    };

    render() {
        return (
            <KeyboardAvoidingView style={[STYLES.authMainContainer, STYLES.middle, {flex: 1}]} behavior="padding" enabled>
                <View style={{flex: 1.8}}>
                    {/*Logo*/}
                    <Image
                        style={STYLES.authLogo}
                        source={IMAGES.logo}
                    />
                </View>
                <View style={{flex: 3}}>
                    {/*First name input*/}
                    <Input icon={'user'}
                           name={'firstName'}
                           placeholder={'First name'}
                           value={this.state.firstName}
                           handleChangeText={this.handleInput}
                           areaStyle={{marginBottom: 15, width: width * 0.8}}
                    />
                    {/*Last name input*/}
                    <Input icon={'user'}
                           name={'lastName'}
                           placeholder={'Last name'}
                           value={this.state.lastName}
                           handleChangeText={this.handleInput}
                           areaStyle={{marginBottom: 15, width: width * 0.8}}
                    />
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
                    <View style={{flexDirection: 'row'}}>
                        {/*Agree checkbox*/}
                        <Checkbox
                            activeOpacity={0.5}
                            style={styles.checkbox}
                            check={this.state.hasAgree}
                            textStyle={STYLES.authWhiteText}
                            handleOnPress={this.handleAgree}
                        />
                        {/*Agree Link*/}
                        <Button
                            activeOpacity={0.7}
                            textStyle={STYLES.authWhiteText}
                            text={'I agree the terms and conditions'}
                            handleOnPress={this.handleLegal}
                        />
                    </View>
                    {/*Register button*/}
                    <Button
                        text={'REGISTER'}
                        activeOpacity={0.5}
                        handleOnPress={this.handleRegister}
                        style={[STYLES.authSubmitButton, STYLES.middle]}
                        textStyle={STYLES.authWhiteText}
                    />
                </View>
                <View style={{flex: 0.6}}>
                    {/*Login link*/}
                    <Button
                        activeOpacity={0.7}
                        textStyle={STYLES.authWhiteText}
                        text={'I have an account'}
                        handleOnPress={this.handleLogin}
                        style={[STYLES.authLink, STYLES.middle]}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default Register