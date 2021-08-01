import React, { Component } from "react";
import { View, StatusBar, Image, ScrollView } from "react-native";
import { Headline, TextInput, Title, Button, Text } from "react-native-paper";

import colors from "../../config/colors";
import config from "../../config/config";
import styles from "../../config/styles";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CustomTextInputOutlined from "../../components/CustomTextInputOutlined";
const axios = require("axios");
import Logo from "./Logo";
import Helper from "../../helper/helper";
import CustomTextView from "../../components/CustomeTextView";

var helper;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    helper = new Helper();
    this.state = {
      email: "",
      password: "",
      isRememberMe: false,
    };
  }

  componentDidMount = async () => {};

  render() {
    return (
      <ScrollView style={styles.loginContainer}>
        <StatusBar barStyle={"light-content"} />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 2 }}>
            <Headline
              style={{
                fontSize: 30,
                fontWeight: "bold",
                paddingTop: 16,
                color: "#fff",
              }}
            >
              New
            </Headline>
            <Headline
              style={{
                fontSize: 30,
                fontWeight: "bold",
                paddingTop: 8,
                color: "#fff",
              }}
            >
              Account
            </Headline>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../../../images/ic_launcher.png")}
              resizeMode={"stretch"}
              style={{ height: 130, width: 130, marginHorizontal: 12 }}
            />
          </View>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 64 }}
        >
          <Ionicons name="md-person" size={24} color={"#fff"} />
          <View style={{ flex: 1 }}>
            <TextInput
              theme={{
                colors: {
                  text: colors.colorWhite,
                  primary: colors.colorSecondary,
                },
              }}
              style={{ backgroundColor: colors.colorPrimary }}
              placeholder="User Name"
              placeholderTextColor={colors.colorGray}
              textColor={"white"}
              underlineColor={"white"}
            />
          </View>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 32 }}
        >
          <Ionicons name="md-mail" size={24} color={"#fff"} />
          <View style={{ flex: 1 }}>
            <TextInput
              theme={{
                colors: {
                  text: colors.colorWhite,
                  primary: colors.colorSecondary,
                },
              }}
              style={{ backgroundColor: colors.colorPrimary }}
              placeholder="Email"
              placeholderTextColor={colors.colorGray}
              textColor={"white"}
              underlineColor={"white"}
            />
          </View>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 32 }}
        >
          <Ionicons name="md-call" size={24} color={"#fff"} />
          <View style={{ flex: 1 }}>
            <TextInput
              theme={{
                colors: {
                  text: colors.colorWhite,
                  primary: colors.colorSecondary,
                },
              }}
              style={{ backgroundColor: colors.colorPrimary }}
              placeholder="Phone Number"
              placeholderTextColor={colors.colorGray}
              textColor={"white"}
              underlineColor={"white"}
            />
          </View>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 32 }}
        >
          <Ionicons name="md-key" size={24} color={"#fff"} />
          <View style={{ flex: 1 }}>
            <TextInput
              theme={{
                colors: {
                  text: colors.colorWhite,
                  primary: colors.colorSecondary,
                },
              }}
              style={{ backgroundColor: colors.colorPrimary }}
              placeholder="Password"
              placeholderTextColor={colors.colorGray}
              textColor={"white"}
              underlineColor={"white"}
            />
          </View>
        </View>

        <Text
          style={{
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginVertical: 32,
          }}
        >
          By signing up, you are accepting our Terms & Conditions
        </Text>

        <Button
          labelStyle={{ color: colors.colorPrimary }}
          style={{
            backgroundColor: colors.colorSecondary,
            alignItems: "center",
            marginTop: 64,
            width: wp("80%"),
            height: 40,
            borderRadius: 32,
            alignSelf: "center",
          }}
          onPress={() => props.navigation.navigate("bottom_tabs")}
        >
          Sign Up
        </Button>

        <Text style={{ color: "#fff", textAlign: "center", marginTop: 32 }}>
          or
        </Text>
        <Text style={{ color: "#fff", textAlign: "center", marginTop: 32 }}>
          <Ionicons
            name="logo-google"
            size={16}
            color={colors.colorSecondary}
          />{" "}
          Login with Google
        </Text>
        <Text style={{ color: "#fff", textAlign: "center", marginTop: 32 }}>
          Already have an account?{" "}
          <Text onPress={() => props.navigation.navigate("login")}>
            <Text style={{ color: colors.colorSecondary }}>Sign In</Text>
          </Text>
        </Text>
      </ScrollView>
    );
  }
}
