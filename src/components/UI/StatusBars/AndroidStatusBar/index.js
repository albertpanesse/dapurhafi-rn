import React from 'react';
import {Platform, StatusBar} from 'react-native';

const AndroidStatusBar = () => {
  const component = Platform.OS === 'android' || Platform.OS === 'web' ?
    <StatusBar
      barStyle="light-content"
      hidden={false}
      translucent={false}
    /> :
    null;

  return component;
}

export default AndroidStatusBar;