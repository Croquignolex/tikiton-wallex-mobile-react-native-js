import {
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

import COLORS from '../../helpers/colors'
import STYLES from '../../helpers/styles'
import IMAGES from '../../helpers/images'

import Input from '../../components/input'
import Checkbox from '../../components/checkbox'

class Password extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasAgree: false,
            email: '',
            password: '',
        }
    }

    agreeHandle = () => {
        this.setState(state => {
            state.hasAgree = !state.hasAgree;
            return state;
        })
    };

    handleInput = (value, name) => {
        this.setState({[name]: value})
    };

    registerHandle = () => {
        if(this.state.email === 'gpetitalex10@gmail.com') this.props.navigation.navigate('dashboard');
        else console.log('Error email')
    };

    render() {
        return (
            <SafeAreaView style={[styles.mainContainer, STYLES.middle]}>
                {/*Start Logo*/}
                <SafeAreaView style={[{flex: 1}, STYLES.middle]}>
                    <Image
                        source={IMAGES.logo}
                        style={styles.logo}
                    />
                </SafeAreaView>
                {/*End Logo*/}
                <SafeAreaView style={[{flex: 1}, STYLES.middle]}>
                    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                        {/*Start e-mail input*/}
                        <SafeAreaView style={{marginBottom: 15, width: width * 0.8}}>
                            <Input icon={'at'}
                                   name={'email'}
                                   placeholder={'Email'}
                                   value={this.state.email}
                                   handleChangeText={this.handleInput}
                            />
                        </SafeAreaView>
                        {/*End e-mail input*/}
                        {/*Start password input*/}
                        <SafeAreaView style={{marginBottom: 15, width: width * 0.8}}>
                            <Input icon={'lock'}
                                   isPassword={true}
                                   name={'password'}
                                   placeholder={'Password'}
                                   value={this.state.password}
                                   handleChangeText={this.handleInput}
                            />
                        </SafeAreaView>
                        {/*End password input*/}
                        {/*Checkbox are*/}
                        <SafeAreaView style={{flexDirection: 'row', width: width * 0.75}}>
                            <Checkbox checkbox={{text: 'I agree with the', check: this.state.hasAgree, color: COLORS.white}} onPressHandle={this.agreeHandle}/>
                            {/*Privacy link*/}
                            <TouchableOpacity style={{width: 100, color: 'transparent'}} activeOpacity={0.8}>
                                <Text style={styles.indicationText}> Privacy policy</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        {/*Button are*/}
                        <SafeAreaView style={STYLES.middle}>
                            <TouchableOpacity style={[styles.createButton, STYLES.middle]} activeOpacity={0.8} onPress={this.registerHandle}>
                                <Text style={[{color: COLORS.theme}, styles.createButtonText]}>
                                    SUBMIT
                                </Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </SafeAreaView>
        )
    }
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.theme
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    createButton: {
        marginTop: 25,
        borderRadius: 3,
        height: 16 * 2.75,
        width: width * 0.5,
        backgroundColor: COLORS.white,
    },
    createButtonText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    indicationText: {
        fontSize: 14,
        color: COLORS.white,
        fontWeight: 'bold'
    }
});

export default Password