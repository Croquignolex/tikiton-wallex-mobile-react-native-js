import PropTypes from "prop-types";
import { connect } from 'react-redux'
import React, { useState } from 'react'
import STYLES from '../../helpers/styleHelper'
import { View, Dimensions, KeyboardAvoidingView, Alert } from 'react-native'

import IMAGES from '../../helpers/imageHelper'
import Input from '../../components/inputComponent'

import { emitAuth } from '../../redux/user/actions'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'
import { USER_AUTH } from "../../helpers/constantHelpers";
import { emailChecker, passwordChecker, setStorageItem } from '../../helpers/functionHelpers'

const Login = ({navigation, dispatch}) => {
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [email, setEmail] = useState({isValid: true, message: '', val: ''});
    const [password, setPassword] = useState({isValid: true, message: '', val: ''});

    // Login process
    const handleLogin = () => {
        const _email = emailChecker(email);
        const _password = passwordChecker(password);
        // Set value
        setEmail(_email);
        setPassword(_password);

        // TODO: make some tips for error type render
        if(_email.isValid && _password.isValid) {
            // Login and save user data in storage and store
            // TODO: Api user check
            const apiResponse = false;
            if(apiResponse) {
                // Save user auth in storage
                setStorageItem(USER_AUTH, true).then(
                    () => {
                        dispatch(emitAuth(true));
                    }
                ).catch((error) => console.log(`Something when wrong ${error}`));
            } else setInvalidCredentials(true)
        }
    };

    // Alert for wrong credentials
    if(invalidCredentials) {
        Alert.alert(
            'Information',
            'Email and password does not match',
            [{text: 'OK', onPress: () => setInvalidCredentials(false)}],
            {cancelable: false}
        );
    }

    // Render component
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
                       isPassword={true}
                       value={password.val}
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
                    handleOnPress={() => handleLogin()}
                    style={[STYLES.authSubmitButton, STYLES.middle]}
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

// Fetch screen width
const { width } = Dimensions.get("screen");

// Proptypes from global store
Login.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action)}
});

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user
});

// Connect React to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Login);