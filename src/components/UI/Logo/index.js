import React from 'react';
import PropTypes from 'prop-types';
import {View, Thumbnail} from 'native-base';

import LogoGreen from '_/logo-green.png'
import LogoWhite from '_/logo-white.png'

import styles from './styles';

const Logo = ({color}) => {
  return (
    <View style={styles.container}>
      {color === 'red' ?
        <Thumbnail source={LogoGreen} style={styles.logo} />
        : <Thumbnail source={LogoWhite} style={styles.logo} />
      }

    </View>
  );
}

Logo.propTypes = {
  color: PropTypes.oneOf([
    'white',
    'red',
  ]).isRequired,
};

export default Logo;
