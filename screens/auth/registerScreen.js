import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import {
    View,
    Alert,
    Linking,
    Dimensions,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import COLORS from '../../helpers/colorHelper'
import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'
import Checkbox from '../../components/checkboxComponent'
import { setUserBasicData } from '../../redux/user/actions'
import { PRIVACY_POLICY_LINK, USER_AUTH } from '../../helpers/constantsHelper'
import {
    emailChecker,
    passwordChecker,
    requiredChecker,
    passwordConfirmChecker
} from '../../helpers/formCheckerHelper'

const Register = ({navigation, dispatch}) => {
    const [hasAgree, setHasAgree] = useState(false);
    const [email, setEmail] = useState({isValid: true, message: '', val: '', errorMessageColor: COLORS.white});
    const [password, setPassword] = useState({isValid: true, message: '', val: '', errorMessageColor: COLORS.white});
    const [firstName, setFirstName] = useState({isValid: true, message: '', val: '', errorMessageColor: COLORS.white});
    const [confirmPassword, setConfirmPassword] = useState({isValid: true, message: '', val: '', errorMessageColor: COLORS.white});

    // Register process
    const handleRegister = () => {
        const _email = emailChecker(email);
        const _password = passwordChecker(password);
        const _firstName = requiredChecker(firstName);
        const _confirmPassword = passwordConfirmChecker(confirmPassword, password);
        // Set value
        setEmail(_email);
        setPassword(_password);
        setFirstName(_firstName);
        setConfirmPassword(_confirmPassword);

        if(_email.isValid && _password.isValid) {
            if(hasAgree)
            {
                // Register and save user data in storage and store
                // TODO: Api user check
                const apiResponse = {statusCode: 200, status: true};
                if(apiResponse.status) {
                    // Save user data
                    dispatch(setUserBasicData(email.val, firstName.val));
                } else {
                    if(apiResponse.statusCode === 400) {
                        // Display information
                        Alert.alert(
                            'Error',
                            'User already exist',
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
            } else {
                Alert.alert(
                    'Information',
                    "You have to agree privacy policy",
                    [{text: 'OK'}],
                    {cancelable: false}
                );
            }
        }
    };

    // Privacy policy link
    const handlePrivacyPolicyLink = () => {
        Linking.canOpenURL(PRIVACY_POLICY_LINK).then(supported => {
            if (supported) {
                // TODO: manage external url open
                Linking.openURL(this.props.url);
            } else console.log(`Something when wrong`)
        });
    };

    // Render component
    return (
        <View style={[STYLES.authMainContainer, STYLES.middle]} behavior="padding" enabled>
            <View style={{flex: 1.7}}>
                {/*Logo*/}
                <Image style={STYLES.authLogo} source={IMAGES.logo}/>
            </View>
            <KeyboardAvoidingView style={{flex: 2.8}}>
                {/*First name input*/}
                <Input icon={'user'}
                       input={firstName}
                       placeholder={'First name'}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                       handleChangeText={(val) => {
                           setFirstName({...firstName, isValid: true, val});
                       }}
                />
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
                {/*Password confirmation input*/}
                <Input icon={'lock'}
                       isPassword={true}
                       input={confirmPassword}
                       placeholder={'Confirm password'}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                       handleChangeText={(val) => {
                           setConfirmPassword({...confirmPassword, isValid: true, val});
                       }}
                />
                <View style={{flexDirection: 'row'}}>
                    {/*Agree checkbox*/}
                    <Checkbox
                        activeOpacity={0.5}
                        style={styles.checkbox}
                        check={hasAgree}
                        textStyle={STYLES.authWhiteText}
                        handleOnPress={() => setHasAgree(!hasAgree)}
                    />
                    {/*Agree Link*/}
                    <Button
                        activeOpacity={0.7}
                        textStyle={STYLES.authWhiteText}
                        text={'I agree the terms and conditions'}
                        handleOnPress={() => handlePrivacyPolicyLink()}
                    />
                </View>
                {/*Register button*/}
                <Button
                    text={'REGISTER'}
                    activeOpacity={0.5}
                    textStyle={STYLES.authWhiteText}
                    handleOnPress={() => handleRegister()}
                    style={[STYLES.authSubmitButton, STYLES.middle]}
                />
            </KeyboardAvoidingView>
            <View style={{flex: 0.5}}>
                {/*Login link*/}
                <Button
                    activeOpacity={0.7}
                    textStyle={STYLES.authWhiteText}
                    text={'I have an account'}
                    handleOnPress={() => navigation.navigate('login')}
                    style={[STYLES.authLink, STYLES.middle]}
                />
            </View>
        </View>
    )
};

// Fetch screen width
const { width } = Dimensions.get("screen");

// Styles
const styles = StyleSheet.create({
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

// Prop types from global store
Register.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);