import React from 'react';
import {Platform, StatusBar} from 'react-native';

import appSetup from '@/setup';

const AndroidStatusBar = () => {
  const component = Platform.OS === 'android' ?
    <StatusBar
      barStyle="light-content"
      hidden={false}
      translucent={false}
      backgroundColor={appSetup.darkGreen}
    /> :
    null;

  return component;
}

export default AndroidStatusBar;
