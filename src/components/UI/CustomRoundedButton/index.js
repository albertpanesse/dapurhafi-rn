import React from 'react';
import PropTypes from 'prop-types';

import {TouchableHighlight, View, Text, ActivityIndicator} from 'react-native';
import appSetup from '@/setup';

import styles from './styles';

const CustomRoundedButton = ({children, onPress, theme, loading = false, disabled = false, buttonStyle, textStyle}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={disabled || loading ? undefined : onPress} //fixed by QQ ()=>{} ===> undefined
        style={[styles.button, disabled && styles.disabled, buttonStyle]}
        underlayColor={appSetup[disabled ? 'disabled' : 'darkGreen']}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="large"
              color="#00ff"
              style={{paddingBottom: 8.0, marginBottom: 8.0}}
            />
          </View>
        ) : (
          <Text style={[styles.text, textStyle]}>{children.toUpperCase()}</Text>
        )}
      </TouchableHighlight>
    </View>
  );
}

CustomRoundedButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['darkGreen', 'primary', 'disabled']).isRequired,
  square: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any,
};

export default CustomRoundedButton;
