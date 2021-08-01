import React, { Component } from 'react';
import {
    View, StatusBar, Image, ScrollView
} from "react-native";
import { Headline, TextInput, Title, Button, Text } from 'react-native-paper'

import colors from '../../config/colors';
import config from '../../config/config';
import styles from '../../config/styles';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CustomTextInputOutlined from '../../components/CustomTextInputOutlined';
const axios = require('axios');
import Logo from './Logo';
import Helper from '../../helper/helper';
import CustomTextView from '../../components/CustomeTextView';

var helper;

export default class Login extends Component {
    constructor(props) {
        super(props);
        helper = new Helper()
        this.state = ({
            email: '',
            password: '',
            isRememberMe: false,
        })
    }

    componentDidMount = async () => {
    }




    render() {
        return (
            <ScrollView style={styles.loginContainer}>
                <StatusBar barStyle={"light-content"} />

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Headline style={{ fontSize: 30, paddingTop: 16, color: colors.colorWhite }}>Welcome</Headline>
                        <Headline style={{ fontSize: 30, paddingTop: 8, color: colors.colorWhite }}>Back . . .</Headline>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={require('../../../images/ic_launcher.png')}
                            resizeMode={'stretch'}
                            style={{ height: 130, width: 130, marginHorizontal: 12 }}
                        />
                    </View>


                </View>

                <Title style={{ fontSize: 32, marginTop: 64, color: colors.colorWhite, fontWeight: 'bold', marginBottom: 24 }}>Log In</Title>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 32 }}>
                    <Ionicons name='md-person' size={24} color={colors.colorWhite} />
                    <View style={{ flex: 1 }}>
                        <TextInput
                            theme={{ colors: { text: colors.colorWhite, primary: colors.colorSecondary } }}
                            style={{ backgroundColor: colors.colorPrimary }}
                            placeholder='   User Name' placeholderTextColor={colors.colorGray} textColor={'white'} underlineColor={'white'} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 32 }}>
                    <Ionicons name='md-key' size={24} color={colors.colorWhite} />
                    <View style={{ flex: 1 }}>
                        <TextInput
                            theme={{ colors: { text: colors.colorWhite, primary: colors.colorSecondary } }}
                            style={{ backgroundColor: colors.colorPrimary }}
                            placeholder='   Password' placeholderTextColor={colors.colorGray} textColor={'white'} underlineColor={'white'} />

                    </View>

                </View>


                <Button
                    labelStyle={{ color: colors.colorPrimary }}
                    style={{ backgroundColor: colors.colorSecondary, alignItems: 'center', marginTop: 64, width: wp('80%'), height: 40, borderRadius: 32, alignSelf: 'center' }}
                    onPress={() => this.props.navigation.navigate('Home')}>Login</Button>

                <Text style={{ color: colors.colorWhite, textAlign: 'center', marginVertical: 32 }}>First time here <Text onPress={() => this.props.navigation.navigate('Signup')}><Text style={{ color: colors.colorSecondary }}>Sign Up</Text></Text></Text>
            </ScrollView>
        )
    }
}