import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    View,
    Text,
    Platform,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import COLORS from '../helpers/colorHelper'
import IconLink from '../components/IconLinkComponent'

const CustomHeader = ({back, title, navigation}) => {
    // Drawer toggle
    const handleDrawerToggle = () => {
        return (
            back
            ? navigation.goBack()
            : navigation.openDrawer()
        );
    };

    // Left area
    const renderLeft = () => {
        if (back) {
            return (
                <View style={styles.left}>
                    <TouchableOpacity onPress={() => handleDrawerToggle()}>
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
                <Icon
                    size={20}
                    name='bars'
                    color={COLORS.white}
                    onPress={() => handleDrawerToggle()}
                />
            </View>
        );
    };

    // Right area
    const renderRight = () => {
        return (
            <View  style={[styles.right, {alignItems: 'flex-end', flexDirection: 'row'}]}>
                <IconLink
                    name="bell"
                    view={true}
                    handleOnPress={() => navigation.navigate('notifications')}
                />
                <IconLink
                    name="cog"
                    handleOnPress={() => navigation.navigate('settings')}
                />
                {/*TODO: Improve logout login also in drawer menu*/}
                <IconLink
                    name="lock"
                    handleOnPress={() => navigation.navigate('login')}
                />
            </View>
        );
    };

    // Search bar
    /*const renderSearch = () => {
        //TODO: this has to be an input, search input
        return (
            <Text/>
        );
    };

    // Options tabs
    const renderOptions = () => {
        const { optionLeft, optionRight } = props;

        return (
            <View row style={[styles.options, {flexDirection: 'row'}]}>
                <Button shadowless style={[styles.tab, styles.divider]}>
                    <Block row middle>
                        <Icon name="diamond" style={{ paddingRight: 8 }} color={COLORS.icon} />
                        <Text size={16} style={styles.tabTitle}>{optionLeft || 'Beauty'}</Text>
                    </Block>
                </Button>
                <Button shadowless style={styles.tab}>
                    <Block row middle>
                        <Icon size={16} name="bag-17" family="ArgonExtra" style={{ paddingRight: 8 }}/>
                        <Text size={16} style={styles.tabTitle}>{optionRight || 'Fashion'}</Text>
                    </Block>
                </Button>
            </View>
        );
    };

    // Tabs menu
    const renderTabs = () => {
        //const { tabs, tabIndex } = props;
        //const defaultTab = tabs && tabs[0] && tabs[0].id;

        //if (!tabs) return null;

        //TODO: this has to be a flat list
        return (
            <Text/>
        )
    };

    // Header
    const renderHeader = () => {
        const { search, options, tabs } = props;
        if (search || tabs || options) {
            return (
                <View style={STYLES.center}>
                    {search ? renderSearch() : null}
                    {options ? renderOptions() : null}
                    {tabs ? renderTabs() : null}
                </View>
            );
        }
    };*/

    // Render
    return (
        <View style={styles.shadow}>
            <View style={styles.navbar}>
                {/*Render Left icon*/}
                {renderLeft()}
                {/*Render title*/}
                <View style={styles.title}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                {/*Render right icons*/}
                {renderRight()}
            </View>
            {/*Render header*/}
            {/*{renderHeader()}*/}
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
        paddingVertical: 12,
        height: height * 0.07,
        justifyContent: 'center'
    },
    right: {
        flex: 0.5,
        marginRight: 16,
        alignItems: 'center',
        height: height * 0.07,
        justifyContent: 'center'
    },
    title: {
        flex: 2,
        fontSize: 17,
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
        zIndex: 5,
        width: 'auto',
        height: 16 * 4.125,
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
    header: {
        backgroundColor: COLORS.theme
    },
    divider: {
        borderRightWidth: 0.3,
        borderRightColor: COLORS.theme
    },
    search: {
        height: 48,
        borderWidth: 1,
        borderRadius: 3,
        width: width - 32,
        marginHorizontal: 16,
        borderColor: COLORS.border
    },
    options: {
        elevation: 4,
        marginTop: 10,
        marginBottom: 24
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
    title: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired
};

// Default props
CustomHeader.defaultProps = {
    back: false
};

export default withNavigation(CustomHeader);