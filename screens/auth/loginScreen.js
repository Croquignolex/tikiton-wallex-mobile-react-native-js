import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react'
import { View, Dimensions, KeyboardAvoidingView } from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'

import { AUTH } from '../../helpers/actionTypes/authActionType'

const Login = ({navigation, ...props}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //TODO: API call
        // props.actions.auth()
        props.dispatch({type: AUTH})
    };

    useEffect(() => {
        // Check if use is auth
    });

    return (
        <KeyboardAvoidingView style={[STYLES.authMainContainer, STYLES.middle, {flex: 1}]} behavior="padding" enabled>
            <View style={{flex: 3}}>
                {/*Logo*/}
                <Image source={IMAGES.logo} style={STYLES.authLogo}/>
            </View>
            <View style={{flex: 3}}>
                {/*E-mail input*/}
                <Input icon={'at'}
                       value={email}
                       placeholder={'Email'}
                       handleChangeText={(value) => setEmail(value)}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                />
                {/*Password input*/}
                <Input icon={'lock'}
                       value={password}
                       isPassword={true}
                       placeholder={'Password'}
                       handleChangeText={(value) => setPassword(value)}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                />
                {/*Login button*/}
                <Button
                    text={'LOGIN'}
                    activeOpacity={0.5}
                    handleOnPress={() => handleLogin()}
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
                    handleOnPress={() => navigation.navigate('register')}
                    style={[ STYLES.authLink, STYLES.middle]}
                />
                {/*Forgotten password link*/}
                <Button
                    activeOpacity={0.7}
                    textStyle={STYLES.authWhiteText}
                    text={'I have forgot my password'}
                    handleOnPress={() => navigation.navigate('password')}
                    style={[{marginTop: 10}, STYLES.authLink, STYLES.middle]}
                />
            </View>
        </KeyboardAvoidingView>
    )
};

const { width } = Dimensions.get("screen");

Login.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Login