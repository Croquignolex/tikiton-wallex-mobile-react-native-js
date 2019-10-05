import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react'
import { emailChecker, passwordChecker } from '../../helpers/functionHelpers'
import { View, Dimensions, KeyboardAvoidingView, Alert } from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'
import { emitLoginValidation } from '../../actions/formValidationAction'

const Login = ({navigation, dispatch, validation}) => {
    const [email, setEmail] = useState(validation.email);
    const [password, setPassword] = useState(validation.password);

    const handleLogin = () => {
        setEmail(emailChecker(email));
        setPassword(passwordChecker(password));

        if(email.isValid && password.isValid) {
            dispatch(emitLoginValidation(email.val, password.val));
        }
    };

    if(validation.globalFailMessage.length > 0) {
        Alert.alert(
            'Information', validation.globalFailMessage,
            [{text: 'OK'}],
            {cancelable: false}
        );
    }

    return (
        <KeyboardAvoidingView style={[STYLES.authMainContainer, STYLES.middle, {flex: 1}]} behavior="padding" enabled>
            <View style={{flex: 3}}>
                {/*Logo*/}
                <Image source={IMAGES.logo} style={STYLES.authLogo}/>
            </View>
            <View style={{flex: 3}}>
                {/*E-mail input*/}
                <Input icon={'at'}
                       value={email.val}
                       placeholder={'Email'}
                       isValid={email.isValid}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                       handleChangeText={(val) => {
                           setEmail({...email, isValid: true, val});
                       }}
                />
                {/*Password input*/}
                <Input icon={'lock'}
                       value={password.val}
                       isPassword={true}
                       placeholder={'Password'}
                       isValid={password.isValid}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                       handleChangeText={(val) => {
                           setPassword({...password, isValid: true, val});
                       }}
                />
                {/*Login button*/}
                <Button
                    text={'LOGIN'}
                    activeOpacity={0.5}
                    textStyle={STYLES.authWhiteText}
                    style={[STYLES.authSubmitButton, STYLES.middle]}
                    handleOnPress={() => handleLogin()}
                />
            </View>
            <View style={{flex: 1}}>
                {/*Register link*/}
                <Button
                    activeOpacity={0.7}
                    textStyle={STYLES.authWhiteText}
                    text={'I do not have an account'}
                    style={[ STYLES.authLink, STYLES.middle]}
                    handleOnPress={() => navigation.navigate('register')}
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
    dispatch: PropTypes.func.isRequired,
    validation: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

export default Login