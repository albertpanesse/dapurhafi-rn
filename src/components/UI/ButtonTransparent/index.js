import React from 'react';
import PropTypes from 'prop-types';

import {TouchableOpacity, Text, View} from 'react-native';

import styles from './styles';

const ButtonTransparent = ({children, onPress, position, danger, buttonStyle, textStyle}) => {
  return (
    <View style={[styles.container, styles[position]]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          danger ? styles.darkGreen : styles.default,
          buttonStyle,
        ]}>
        <Text
          style={[
            styles.text,
            danger ? styles.textDanger : styles.textDefault,
            textStyle,
          ]}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

ButtonTransparent.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  danger: PropTypes.bool,
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any,
};

export default ButtonTransparent;
