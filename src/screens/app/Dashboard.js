import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Chat from './Chat';
import Sell from './Sell';
import MyAds from './MyAds';
import Profile from './Profile'

import colors from '../../config/colors';
import config from '../../config/config';
import styles from '../../config/styles';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default AppTabNavigator = createBottomTabNavigator({
    'Home': {
        screen: Home,
    },
    'Chat': {
        screen: Chat,
    },
    'Sell': {
        screen: Sell,
    },
    'MyAds': {
        screen: MyAds,
    },
    'Profile': {
        screen: Profile,
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor, focused }) => {
            const { routeName } = navigation.state;
            if (routeName == 'Home') {
                return <MaterialCommunityIcons name={'home-outline'} color={tintColor} size={22} />
            } else if (routeName == 'Chat') {
                return <Ionicons name={'chatbox-outline'} color={tintColor} size={22} />
            } else if (routeName == 'Sell') {
                return <AntDesign name={'pluscircleo'} color={tintColor} size={22} />
            } else if (routeName == 'MyAds') {
                return <AntDesign name={'hearto'} color={tintColor} size={22} />
            } else if (routeName == 'Profile') {
                return <AntDesign name={'user'} color={tintColor} size={22} />
            }
        },
    }),
    tabBarOptions: {
        activeTintColor: colors.colorSecondary,
        inactiveTintColor: colors.colorWhite,
        tintColor: colors.colorSecondary,
        // allowFontScaling: false,
        style: {
            justifyContent: 'center',
            alignItems: 'center',
            height: (deviceHeight * 6.5) / 100,
            marginHorizontal: 4,
            borderRadius: 42,
            backgroundColor: colors.colorPrimary,
            padding: 6
        },
    },
});
