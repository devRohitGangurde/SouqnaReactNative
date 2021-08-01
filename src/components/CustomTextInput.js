import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import styles from '../config/styles';

export default class CustomTextInput extends React.Component {
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
            isNumeric,
            disable,
            icon,
            editable,
        } = this.props;

        return (
            <View
                style={[styles.boxTextInput]}>
                <TextInput
                    value={value}
                    maxLength={maxLength}
                    placeholder={label}
                    tintColor={tint}
                    style={[styles.smallInputView, { color: tint }]}
                    autoCapitalize="none"
                    keyboardType={keyboardType}
                    onChangeText={changeText}
                    textContentType={textContentType}
                    secureTextEntry={secureTextEntry ? true : false}
                    multiline={isMultiple ? true : false}
                    editable={editable}
                />
                {/* {icon !== '' ? <Icon name={icon} color={colors.colorLightGray} size={22} style={{ right: 15 }} /> : null} */}
            </View>
        );
    }
}