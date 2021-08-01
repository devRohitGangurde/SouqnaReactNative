import React, { Component } from 'react';
import { Image, View } from 'react-native';

import styles from '../../config/styles';
import colors from '../../config/colors';
import config from '../../config/config';

export default class LogoHeader extends Component {
  render() {
    return (
      <View style={styles.logoView}>
        <Image
          style={styles.logoHeader}
          source={require('../../../images/ic_launcher.png')}
        />
      </View>
    );
  }
}