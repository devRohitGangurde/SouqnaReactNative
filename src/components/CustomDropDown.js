import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';
import config from '../config/config';
import styles from '../config/styles';

export default class CustomTextView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {
            items,
            placeholder,
            onValueChange,
            value,
            key,
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
            borderWidth,
            borderRadius,
            styles,
            margin,
            paddingHorizontal
        } = this.props;
        return (
            <View style={{
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: borderRadius ? borderRadius : 8,
                marginVertical: hp('2%'),
                marginHorizontal: margin, // to ensure the text is never behind the icon
                borderColor: colors.colorGray,
                borderWidth: borderWidth ? borderWidth : 0.8,
                height: hp('4.3%'),
                // paddingVertical: '1%',
                paddingHorizontal: paddingHorizontal, //'8%',
            }}>
                <View style={{ flex: 8 }}>
                    <RNPickerSelect
                        key={key}
                        onValueChange={onValueChange}
                        items={items}
                        value={value}
                        placeholder={{ label: placeholder }}
                        style={styles ? styles : {
                            inputIOS: {
                                fontSize: 16,
                                // borderRadius: borderRadius ? borderRadius : 8,
                                // marginVertical: hp('2%'),
                                // marginHorizontal: margin, // to ensure the text is never behind the icon
                                // borderColor: colors.colorGray,
                                // borderWidth: borderWidth ? borderWidth : 0.8,
                                // height: hp('4.3%'),
                                // // paddingVertical: '1%',
                                // paddingHorizontal: paddingHorizontal, //'8%',
                            },
                            inputAndroid: {
                                fontSize: 16,
                                paddingHorizontal: 10,
                                paddingVertical: 8,
                                borderWidth: 0.5,
                                borderColor: 'purple',
                                borderRadius: 8,
                                color: 'black',
                                paddingRight: 30, // to ensure the text is never behind the icon
                            }
                        }}
                    />
                </View>
                <View style={{ flex: 2, alignItems: 'flex-end', }}>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color={colors.colorGray} />
                </View>
                {/* {icon !== '' ? <Icon name={icon} color="gray" size={22} style={{ right: 15 }} /> : null} */}
            </View>
        )
    }
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        borderRadius: 4,
        marginVertical: hp('2%'),
        marginHorizontal: wp('25%'), // to ensure the text is never behind the icon
        borderColor: colors.colorGray,
        borderRadius: 6,
        borderWidth: 0.8,
        height: hp('4%'),
        // paddingVertical: '1%',
        paddingHorizontal: '1%',
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});