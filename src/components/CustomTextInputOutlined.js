import React from 'react';
import { View, TextInput } from 'react-native';

import OutlineInput from 'react-native-outline-input';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import colors from '../config/colors';
import styles from '../config/styles';

export default class CustomTextInputOutlined extends React.Component {
    constructor(props) {
        super(props);
        this.stat = {};
    }
    render() {
        const {
            maxLength,
            value,
            isMultiple,
            label,
            tint,
            error,
            keyboardType,
            changeText,
            secureTextEntry,
            textContentType,
            radius,
            disable,
            icon,
            editable,
        } = this.props;

        return (
            <View>
                <OutlineInput
                    height={hp('4%')}
                    fontSize={RFPercentage(1.4)}
                    value={value}
                    onChangeText={changeText}
                    label={label}
                    editable={editable}
                    activeValueColor={colors.colorText}
                    activeBorderColor={colors.colorGray}
                    activeLabelColor={colors.colorText}
                    passiveBorderColor={colors.colorGray}
                    passiveLabelColor={colors.colorGray}
                    passiveValueColor={colors.colorGray}
                />
            </View>
        );
    }
}