import React, { Component } from 'react';
import { Image, View } from 'react-native';

import styles from '../../config/styles';
import colors from '../../config/colors';
import config from '../../config/config';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.logoView}>
        <Image
          style={styles.logo}
          source={require('../../../images/ic_launcher.png')}
        />
      </View>
    );
  }
}