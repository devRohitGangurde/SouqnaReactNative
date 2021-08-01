import React from 'react'
import { Text, View } from 'react-native'

export default class CustomTextView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text
                    allowFontScaling={false}
                    style={this.props.textStyle}
                    numberOfLines={this.props.lines}
                >
                    {this.props.text}
                </Text>
            </View>
        )
    }
}
