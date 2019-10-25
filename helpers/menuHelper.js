import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native'

import IMAGES from './imageHelper'
import Image from '../components/imageComponent'
import COLORS from "./colorHelper";

const Drawer = props => (
    <View style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={[styles.header, {flex:0.05}]}>
            <Image source={IMAGES.logoInvert} style={{width: 150, height: 150}}/>
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
            marginLeft: 12,
            fontWeight: "normal"
        },
        itemsContainerStyle: {
            paddingVertical: 16,
            paddingHorizonal: 12,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            overflow: "hidden"
        }
    }
};

const styles = StyleSheet.create({
    header: {
        paddingTop: width * 0.2,
        justifyContent: 'center',
        paddingBottom: width * 0.2
    }
});

export default MENU
