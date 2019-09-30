import React, { useState } from 'react'
import { View, Dimensions, KeyboardAvoidingView, StyleSheet } from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'
import Checkbox from '../../components/checkboxComponent'

const Register = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [hasAgree, setHasAgree] = useState(false);

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
                       value={firstName}
                       handleChangeText={(value) => setFirstName(value)}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                />
                {/*Last name input*/}
                <Input icon={'user'}
                       name={'lastName'}
                       placeholder={'Last name'}
                       value={lastName}
                       handleChangeText={(value) => setLastName(value)}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                />
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
                        handleOnPress={() => navigation.navigate('legal')}
                    />
                </View>
                {/*Register button*/}
                <Button
                    text={'REGISTER'}
                    activeOpacity={0.5}
                    handleOnPress={() => navigation.navigate('dashboard')}
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
                    handleOnPress={() => navigation.navigate('login')}
                    style={[STYLES.authLink, STYLES.middle]}
                />
            </View>
        </KeyboardAvoidingView>
    )
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default Register