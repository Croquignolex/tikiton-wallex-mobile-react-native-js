import PropTypes from "prop-types";
import React, { useState } from 'react'
import {View, Dimensions, KeyboardAvoidingView, StyleSheet, Alert, Linking} from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import { emitAuth } from "../../actions/authAction";
import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'
import Checkbox from '../../components/checkboxComponent'
import { PRIVACY_POLICY_LINK, USER_AUTH } from "../../helpers/constantHelpers";
import { emailChecker, passwordChecker, requiredChecker, setStorageItem } from "../../helpers/functionHelpers";

const Register = ({navigation, dispatch}) => {
    const [hasAgree, setHasAgree] = useState(false);
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [email, setEmail] = useState({isValid: true, message: '', val: ''});
    const [lastName, setLastName] = useState({isValid: true, message: '', val: ''});
    const [password, setPassword] = useState({isValid: true, message: '', val: ''});
    const [firstName, setFirstName] = useState({isValid: true, message: '', val: ''});

    // Register process
    const handleRegister = () => {
        const _email = emailChecker(email);
        const _password = passwordChecker(password);
        const _lastName = requiredChecker(lastName);
        const _firstName = requiredChecker(firstName);
        // Set value
        setEmail(_email);
        setPassword(_password);
        setLastName(_lastName);
        setFirstName(_firstName);

        // TODO: make some tips for error type render
        if(_email.isValid && _password.isValid) {
            // Register and save user data in storage and store
            // TODO: Api user check
            const apiResponse = false;
            if(apiResponse && hasAgree) {
                // Save user auth in storage
                setStorageItem(USER_AUTH, true).then(
                    () => {
                        dispatch(emitAuth(true));
                    }
                ).catch((error) => console.log(`Something when wrong ${error}`));
            } else setInvalidCredentials(true)
        }
    };

    // Alert for agreement warning
    if(invalidCredentials) {
        Alert.alert(
            'Information',
            "You have to agree privacy policy",
            [{text: 'OK', onPress: () => setInvalidCredentials(false)}],
            {cancelable: false}
        );
    }

    // Privacy policy link
    const handlePrivacyPolicyLink = () => {
        Linking.canOpenURL(PRIVACY_POLICY_LINK).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else console.log(`Something when wrong`)
        });
    };

    // Render component
    return (
        <KeyboardAvoidingView style={[STYLES.authMainContainer, STYLES.middle, {flex: 1}]} behavior="padding" enabled>
            <View style={{flex: 1.8}}>
                {/*Logo*/}
                <Image style={STYLES.authLogo} source={IMAGES.logo}/>
            </View>
            <View style={{flex: 3}}>
                {/*First name input*/}
                <Input icon={'user'}
                       value={firstName.val}
                       placeholder={'First name'}
                       isValid={firstName.isValid}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                       handleChangeText={(val) => {
                           setFirstName({...firstName, isValid: true, val});
                       }}
                />
                {/*Last name input*/}
                <Input icon={'user'}
                       value={lastName.val}
                       placeholder={'Last name'}
                       isValid={lastName.isValid}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                       handleChangeText={(val) => {
                           setLastName({...lastName, isValid: true, val});
                       }}
                />
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
            </View>
            <View style={{flex: 0.6}}>
                {/*Login link*/}
                <Button
                    activeOpacity={0.7}
                    textStyle={STYLES.authWhiteText}
                    text={'I have an account'}
                    handleOnPress={() => navigation.navigate('login')}
                    style={[STYLES.authLink, STYLES.middle]}
                />
            </View>
        </KeyboardAvoidingView>
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

// Proptypes from global store
Register.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

export default Register