import PropTypes from "prop-types";
import React, { useState } from 'react'
import { View, Dimensions, KeyboardAvoidingView } from 'react-native'

import STYLES from '../../helpers/styleHelper'
import IMAGES from '../../helpers/imageHelper'

import Input from '../../components/inputComponent'
import Image from '../../components/imageComponent'
import Button from '../../components/buttonComponent'

const Password = ({navigation}) => {

    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView style={[STYLES.authMainContainer, STYLES.middle, {flex: 1}]} behavior="padding" enabled>
            <View style={{flex: 3}}>
                {/*Logo*/}
                <Image style={STYLES.authLogo} source={IMAGES.logo}/>
            </View>
            <View style={{flex: 3}}>
                {/*E-mail input*/}
                <Input icon={'at'}
                       value={password}
                       placeholder={'Email'}
                       handleChangeText={(value) => setPassword(value)}
                       areaStyle={{marginBottom: 15, width: width * 0.8}}
                />
                {/*Login button*/}
                <Button
                    text={'RECOVER'}
                    activeOpacity={0.5}
                    textStyle={STYLES.authWhiteText}
                    style={[STYLES.authSubmitButton, STYLES.middle]}
                    handleOnPress={() => navigation.navigate('dashboard')}
                />
            </View>
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
        </KeyboardAvoidingView>
    )
};

const { width } = Dimensions.get("screen");

Password.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Password