import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/app/Dashboard';

import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import LogoHeader from './screens/auth/LogoHeader';
import Feather from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import styles from './config/styles';
import colors from './config/colors';
import config from './config/config';
import helperClass from './helper/helper';
import Notification from './screens/app/Notification';
import EditProfile from './screens/app/EditProfile';
import ChatScreen from './screens/app/ChatScreen';
import AboutUs from './screens/app/AboutUs';
import TnC from './screens/app/TnC';

var helper;

class Splash extends Component {
    constructor(props) {
        super(props);
        helper = new helperClass()
        this.state = ({
        })
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            setTimeout(() => {
                this.isLoad()
            }, 4000);
        });
    }

    isLoad = async () => {
        var isLogin;
        try {
            await helper.getData('token').then((x) => {
                isLogin = x;
                console.log('islogin', x)
            })
            this.props.navigation.navigate(isLogin ? 'App' : 'Auth');
        } catch (error) {
            helper.warningToast("Error while open app.")
        }
    }

    render() {
        return (
            <View style={styles.splashContainer}>
                <StatusBar backgroundColor={colors.colorPrimary} barStyle="light-content" />
                <Image
                    source={require('../images/ic_launcher.png')}
                    resizeMode={'stretch'}
                    style={{ height: 325, width: 325 }}
                />
            </View>
        );
    }

}

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ }) => ({
            headerShown: false
        })
    },
    Signup: {
        screen: Signup,
        navigationOptions: ({ }) => ({
            headerShown: false
        })
    },
})

const AppStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ }) => ({
            headerShown: false,
            headerBackTitleVisible: false,
        })
    },
    Notification: {
        screen: Notification,
        navigationOptions: ({ }) => ({
            headerShown: false,
            headerBackTitleVisible: false,
        })
    },
    EditProfile: {
        screen: EditProfile,
        navigationOptions: ({ }) => ({
            headerShown: false,
            headerBackTitleVisible: false,
        })
    },
    ChatScreen: {
        screen: ChatScreen,
        navigationOptions: ({ }) => ({
            headerShown: false,
            headerBackTitleVisible: false,
        })
    },
    AboutUs: {
        screen: AboutUs,
        navigationOptions: ({ }) => ({
            headerShown: false,
            headerBackTitleVisible: false,
        })
    },
    TnC: {
        screen: TnC,
        navigationOptions: ({ }) => ({
            headerShown: false,
            headerBackTitleVisible: false,
        })
    },

})

const AppContainer = createAppContainer(createSwitchNavigator({
    Splash: Splash,
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'Splash',
}));
export default AppContainer;