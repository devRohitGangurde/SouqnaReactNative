import React from 'react'
import { Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import config from '../config/config';
import styles from '../config/styles';
import colors from '../config/colors';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: wp('1%'), backgroundColor: colors.colorSecondary }}>
                <Text style={styles.textw10}>{config.powered_by}</Text>
            </View>
        )
    }
}