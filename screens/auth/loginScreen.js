import PropTypes from "prop-types";
import { connect } from 'react-redux'
import React, { useState } from 'react'
import STYLES from '../../helpers/styleHelper'
import { View, Dimensions, KeyboardAvoidingView, Alert } from 'react-native'

import IMAGES from '../../helpers/imageHelper'
import Input from '../../components/inputComponent'

import COLORS from '../../helpers/colorHelper'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'
import { setUserBasicData } from '../../redux/user/actions'
import { emailChecker, passwordChecker } from '../../helpers/formCheckerHelper'

const Login = ({navigation, dispatch}) => {
    const [email, setEmail] = useState({isValid: true, message: '', val: '', errorMessageColor: COLORS.white});
    const [password, setPassword] = useState({isValid: true, message: '', val: '',  errorMessageColor: COLORS.white});

    // Login process
    const handleLogin = () => {
        const _email = emailChecker(email);
        const _password = passwordChecker(password);
        // Set value
        setEmail(_email);
        setPassword(_password);

        if(_email.isValid && _password.isValid) {
            // Login and save user data in storage and store
            // TODO: Api user check
            const apiResponse = {statusCode: 200, status: true, data: {firstName: 'Xaxa'}};
            if(apiResponse.status) {
                // Save user data
                dispatch(setUserBasicData(email.val, apiResponse.data.firstName));
            } else {
                if(apiResponse.statusCode === 400) {
                    // Display information
                    Alert.alert(
                        'Error',
                        'Email and password does not match',
                        [{text: 'OK'}],
                        {cancelable: false}
                    );
                } else {
                    // Display information
                    Alert.alert(
                        'Error',
                        'Internal server error',
                        [{text: 'OK'}],
                        {cancelable: false}
                    );
                }
            }
        }
    };

    // Render component
    return (
        <View style={[STYLES.authMainContainer, STYLES.middle]} behavior="padding" enabled>
            <View style={{flex: 3}}>
                {/*Logo*/}
                <Image source={IMAGES.logo} style={STYLES.authLogo}/>
            </View>
            <KeyboardAvoidingView style={{flex: 3}}>
                {/*E-mail input*/}
                <Input icon={'at'}
                       input={email}
                       placeholder={'Email'}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                       handleChangeText={(val) => {
                           setEmail({...email, isValid: true, val});
                       }}
                />
                {/*Password input*/}
                <Input icon={'lock'}
                       input={password}
                       isPassword={true}
                       placeholder={'Password'}
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
            </KeyboardAvoidingView>
            <View style={{flex: 1, marginTop: width * 0.1}}>
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
        </View>
    )
};

// Fetch screen width
const { width } = Dimensions.get("screen");

// Prop types from global store
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