import React, { useState } from 'react'
import { View, Dimensions, KeyboardAvoidingView } from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                       value={email}
                       handleChangeText={(value) => setEmail(value)}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                />
                {/*Password input*/}
                <Input icon={'lock'}
                       isPassword={true}
                       name={'password'}
                       placeholder={'Password'}
                       value={password}
                       handleChangeText={(value) => setPassword(value)}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                />
                {/*Login button*/}
                <Button
                    text={'LOGIN'}
                    activeOpacity={0.5}
                    handleOnPress={() => navigation.navigate('dashboard')}
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

export default Login