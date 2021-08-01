import React, { Component } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'native-base';
import NetInfo from "@react-native-community/netinfo";


export default class helper extends Component {

    checkConnectivity = async () => {
        return NetInfo.fetch().then(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            if (state.isConnected == true) {
                return true;
            } else {
                return false;
            }
        });
    }

    storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            // saving error
        }
    }

    getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value != null) {
                return value;
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    }

    getToken = async () => {
        try {
            var value = await AsyncStorage.getItem('token')
            console.log(value);
            if (value) {
                return value;
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    }

    successToast = (text) => {
        Alert.alert(
            "Success!",
            text,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
        // Toast.show({
        //     text: text,
        //     type: "success",
        //     position: "bottom",
        //     duration: 3000
        // })
    }

    errorToast = (error) => {
        Alert.alert(
            "Error!",
            error,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
        // Toast.show({
        //     text: error,
        //     type: "danger",
        //     position: "bottom", // bottom
        //     duration: 3000
        // })
    }

    warningToast = (text) => {
        Alert.alert(
            "Warning!",
            text,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
        // Toast.show({
        //     text: text,
        //     type: "warning",
        //     position: "bottom",
        //     duration: 3000
        // })
    }

    isNumeric = (inputtxt) => {
        var letterNumber = /^[0-9]+$/; //a-zA-Z
        if (inputtxt.match(letterNumber)) {
            return true;
        }
        else {
            return false;
        }
    }

    logout = async () => {
        this.storeData('token', '');
        // this.props.navigation.navigate('Auth')
    }

    validURL = async (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        var result = !!pattern.test(str);
        return result;
    }

}


