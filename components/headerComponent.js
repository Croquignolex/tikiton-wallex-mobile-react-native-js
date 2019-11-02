import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    View,
    Text,
    Platform,
    TextInput,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import STYLES from '../helpers/styleHelper'
import COLORS from '../helpers/colorHelper'
import Image from '../components/imageComponent'
import IconLink from '../components/IconLinkComponent'
import IMAGES from "../helpers/imageHelper";

const CustomHeader = ({back, title, navigation, isDashboardScreen, isSearchScreen}) => {
    // Left area
    const renderLeft = () => {
        if (back) {
            return (
                <View style={styles.left}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            size={20}
                            name='chevron-left'
                            color={COLORS.white}
                        />
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.left}>
                <Image source={IMAGES.logo}
                   style={{width: 30, height: 30}}
                   areaStyle={{width: 30, height: 30}}
                />
            </View>
        );
    };

    // Right area
    const renderRight = () => {
        return (
            <View style={[styles.right, {alignItems: 'flex-end', flexDirection: 'row'}]}>
                <IconLink
                    name="search"
                    handleOnPress={() => navigation.navigate('search')}
                />
                <IconLink
                    name="ellipsis-v"
                    handleOnPress={() => navigation.navigate('search')}
                />
            </View>
        );
    };

    // Search bar
    const renderSearch = () => {
        return (
            <View style={{flex: 2.5, marginHorizontal: 15, height: height * 0.07, justifyContent: 'center'}}>
                <View style={[styles.search, STYLES.borderTransparent, STYLES.middle]}>
                    <Icon size={14} color={COLORS.muted} name="search" style={{marginRight: 12}}/>
                    <TextInput
                        autoFocus={true}
                        placeholder="Search..."
                        style={styles.searchInput}
                        placeholderTextColor={COLORS.muted}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
        );
    };

    // Tabs menu
    const renderTabs = () => {
        // TODO improve dashboard view pages
        //const { tabs, tabIndex } = props;
        //const defaultTab = tabs && tabs[0] && tabs[0].id;

        //if (!tabs) return null;
        return (
            <Text style={{marginBottom: 20}}/>
        )
    };

    // Render
    return (
        <View style={styles.shadow}>
            <View style={styles.navbar}>
                {/*Render Left icon*/}
                {renderLeft()}

                {/*Render title*/}
                {!isSearchScreen && (
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{title}</Text>
                    </View>
                )}

                {/*Render right icons*/}
                {!isSearchScreen && renderRight()}

                {/*Render search bar*/}
                {isSearchScreen && renderSearch()}
            </View>

            {/*Render dashboard header*/}
            {isDashboardScreen  && (
                <View style={STYLES.center}>
                    {renderTabs()}
                </View>
            )}
        </View>
    )
};

// Fetch screen width
const { width, height } = Dimensions.get("screen");

// Dimensions for iphone X
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

// Style
const styles = StyleSheet.create({
    left: {
        flex: 0.2,
        marginLeft: 16,
        height: height * 0.07,
        justifyContent: 'center'
    },
    right: {
        flex: 0.5,
        height: height * 0.07,
        justifyContent: 'center'
    },
    title: {
        flex: 2,
        fontSize: 17,
        marginLeft: 15,
        height: height * 0.07,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    navbar: {
        width: 'auto',
        height: 16 * 4,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 16 * 1.5,
        backgroundColor: COLORS.theme,
        justifyContent: 'space-evenly',
        paddingTop: iPhoneX ? 15 * 4 : 15
    },
    shadow: {
        elevation: 3,
        shadowRadius: 6,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        backgroundColor: COLORS.theme,
        shadowOffset: { width: 0, height: 2 }
    },
    divider: {
        borderRightWidth: 0.3,
        borderRightColor: COLORS.theme
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        textShadowColor: 'transparent',
        textDecorationColor: 'transparent'
    },
    search: {
        height: 40,
        width: '100%',
        borderRadius: 50,
        flexDirection: 'row',
        paddingHorizontal: 16,
        backgroundColor: COLORS.white,
    },
    tab: {
        height: 24,
        elevation: 0,
        borderWidth: 0,
        borderRadius: 0,
        width: width * 0.35,
        backgroundColor: COLORS.transparent
    },
    navTitle: {
        flex: 2,
        alignItems: 'center',
        height: height * 0.07,
        justifyContent: 'center'
    }
});

// Prop types
CustomHeader.propTypes = {
    back: PropTypes.bool,
    isSearchScreen: PropTypes.bool,
    isDashboardScreen: PropTypes.bool,
    title: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired
};

// Default props
CustomHeader.defaultProps = {
    back: false,
    isSearchScreen: false,
    isDashboardScreen: false
};

export default withNavigation(CustomHeader);