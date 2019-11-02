import React from 'react'
import COLORS from '../../helpers/colorHelper'
import STYLES from '../../helpers/styleHelper'
import {SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Text, KeyboardAvoidingView} from 'react-native'

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    backHandle = () => {
        this.props.navigation.navigate('login');
    };

    /*

    // Search bar
    const renderSearch = () => {
        // TODO: make focus to stack to search screen
        return (
            <View style={{marginVertical: 8, width: width * 0.95}}>
                <View style={{alignContent: 'center'}}>
                    <View style={[styles.search, STYLES.borderTransparent, STYLES.middle]}>
                        <Icon size={14} color={COLORS.muted} name="search" style={{marginRight: 12}}/>
                        <TextInput
                            placeholder="Search..."
                            style={styles.searchInput}
                            placeholderTextColor={COLORS.muted}
                            underlineColorAndroid="transparent"
                            onFocus={() => console.log('I am focused')}
                        />
                    </View>
                </View>
            </View>
        );
    };

    */

    render() {
        return (
            <SafeAreaView style={[styles.mainContainer, STYLES.middle]}>
                <SafeAreaView style={[{flex: 1}, STYLES.middle]}>
                    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                        {/*Button are*/}
                        <SafeAreaView style={STYLES.middle}>
                            <Text style={[{color: COLORS.theme}, styles.createButtonText]}>
                                Settings page
                            </Text>
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
        backgroundColor: COLORS.warning
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

/*

searchInput: {
        flex: 1,
        fontSize: 15,
        textShadowColor: 'transparent',
        textDecorationColor: 'transparent'
    },
    search: {
        height: 45,
        width: '100%',
        borderRadius: 50,
        flexDirection: 'row',
        paddingHorizontal: 16,
        backgroundColor: COLORS.white
    },

 */

export default Search
