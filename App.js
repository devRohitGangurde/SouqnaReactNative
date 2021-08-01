import React, { Component } from 'react';
import { Root } from 'native-base';
import AppContainer from './src/Appcontainer';

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}

