import PropTypes from "prop-types";
import React, { useState } from 'react'
import { View, Dimensions, KeyboardAvoidingView, Alert } from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import COLORS from "../../helpers/colorHelper";
import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'
import { emailChecker } from "../../helpers/functionsHelper";

const Password = ({navigation}) => {
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [email, setEmail] = useState({isValid: true, message: '', val: '', errorMessageColor: COLORS.white});

    // Recover password process
    const handleRecover = () => {
        const _email = emailChecker(email);
        // Set value
        setEmail(_email);

        // TODO: make some tips for error type render
        if(_email.isValid) {
            // TODO: Api send reset link
            const apiResponse = false;
            if(apiResponse) {
                // Display information
                Alert.alert(
                    'Information',
                    'A password reset has been send, check your ail please',
                    [{text: 'OK'}],
                    {cancelable: false}
                );
            } else setInvalidCredentials(true)
        }
    };

    // Alert for wrong credentials
    if(invalidCredentials) {
        Alert.alert(
            'Information',
            'Email not found. We recommend you to create an account',
            [{text: 'OK', onPress: () => setInvalidCredentials(false)}],
            {cancelable: false}
        );
    }

    // Render component
    return (
        <View style={[STYLES.authMainContainer, STYLES.middle, {flex: 1}]} behavior="padding" enabled>
            <View style={{flex: 2.3}}>
                {/*Logo*/}
                <Image style={STYLES.authLogo} source={IMAGES.logo}/>
            </View>
            <KeyboardAvoidingView style={{flex: 2}}>
                {/*E-mail input*/}
                <Input icon={'at'}
                       input={email}
                       placeholder={'Email'}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                       handleChangeText={(val) => {
                           setEmail({...email, isValid: true, val});
                       }}
                />
                {/*Login button*/}
                <Button
                    text={'RECOVER'}
                    activeOpacity={0.5}
                    textStyle={STYLES.authWhiteText}
                    style={[STYLES.authSubmitButton, STYLES.middle]}
                    handleOnPress={() => handleRecover()}
                />
            </KeyboardAvoidingView>
            <View style={{flex: 1}}>
                {/*Register link*/}
                <Button
                    activeOpacity={0.7}
                    textStyle={STYLES.authWhiteText}
                    text={'I do not have an account'}
                    handleOnPress={() => navigation.navigate('register')}
                    style={[STYLES.authLink, STYLES.middle]}
                />
            </View>
        </View>
    )
};

// Fetch screen width
const { width } = Dimensions.get("screen");

// Prop types from global store
Password.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default Password