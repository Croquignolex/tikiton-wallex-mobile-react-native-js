import React from 'react'
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'

import IMAGES from './imageHelper'
import Image from '../components/imageComponent'
import COLORS from "./colorHelper";

const Drawer = props => (
    <View style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={[styles.header, {flex:0.05, flexDirection: 'row'}]}>
            <Image source={IMAGES.logoInvert}
                   style={{width: 90, height: 90}}
                   areaStyle={{width: 90, height: 90}}
            />
        </View>
        <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <DrawerNavigatorItems {...props} />
            </ScrollView>
        </View>
    </View>
);

const { width } = Dimensions.get("screen");

const MENU = {
    // TODO: Make drawer to be invisible on status bar
    contentComponent: props => <Drawer {...props} />,
    drawerBackgroundColor: COLORS.white,
    drawerWidth: width * 0.8,
    contentOptions: {
        activeTintColor: COLORS.white,
        inactiveTintColor: COLORS.black,
        activeBackgroundColor: "transparent",
        itemStyle: {
            width: width * 0.7,
            backgroundColor: "transparent"
        },
        labelStyle: {
            fontSize: 18,
            marginLeft: 10,
            fontWeight: "normal"
        },
        itemsContainerStyle: {
            paddingVertical: 16,
            paddingHorizonal: 10,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            overflow: "hidden"
        }
    }
};

const styles = StyleSheet.create({
    header: {
        paddingTop: width * 0.05,
        paddingBottom: width * 0.15,
        marginLeft: width * 0.1,
    }
});

export default MENU
