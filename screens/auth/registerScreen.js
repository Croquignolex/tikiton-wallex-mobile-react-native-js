import React from 'react'
import { View, Dimensions, KeyboardAvoidingView, StyleSheet } from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'
import Checkbox from '../../components/checkboxComponent'
import * as actions from '../../helpers/actionTypes/registerActionType'

class Register extends React.Component {
    handleInput = (value, name) => {
        //this.setState({[name]: value})
    };

    handleAgree = () => {
        const molade = {type: actions.TOGGLE_AGREE};
        this.props.dispatch(molade);
        /*this.setState(state => {
            state.hasAgree = !state.hasAgree;
            return state;
        })*/
    };

    componentDidMount(){
        console.log(this.props)
    }

    componentDidUpdate() {
        console.log(this.props)
    }

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
                           value={null}
                           handleChangeText={this.handleInput}
                           areaStyle={{marginBottom: 15, width: width * 0.8}}
                    />
                    {/*Last name input*/}
                    <Input icon={'user'}
                           name={'lastName'}
                           placeholder={'Last name'}
                           value={null}
                           handleChangeText={this.handleInput}
                           areaStyle={{marginBottom: 15, width: width * 0.8}}
                    />
                    {/*E-mail input*/}
                    <Input icon={'at'}
                           name={'email'}
                           placeholder={'Email'}
                           value={null}
                           handleChangeText={this.handleInput}
                           areaStyle={{marginBottom: 15, width: width * 0.8}}
                    />
                    {/*Password input*/}
                    <Input icon={'lock'}
                           isPassword={true}
                           name={'password'}
                           placeholder={'Password'}
                           value={null}
                           handleChangeText={this.handleInput}
                           areaStyle={{marginBottom: 15, width: width * 0.8}}
                    />
                    <View style={{flexDirection: 'row'}}>
                        {/*Agree checkbox*/}
                        <Checkbox
                            activeOpacity={0.5}
                            style={styles.checkbox}
                            check={null}
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