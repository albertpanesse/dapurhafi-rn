import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, View, Text, ActivityIndicator} from 'react-native';

import appSetup from '@/setup';

import styles from './styles';

const ButtonRounded = ({children, onPress, theme, square, loading = false}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={theme === 'disabled' ? undefined : onPress}
        style={[
          styles.button,
          styles[theme],
          square ? styles.square : styles.rounded,
        ]}
        underlayColor={
          appSetup[theme === 'disabled' ? 'disabled' : `${theme}Dark`]
        }>
        {loading ? (
          <View style={{height: 20, maxHeight: 20, alignItems: 'center'}}>
            <ActivityIndicator
              size="large"
              color="#00ff"
              style={{paddingBottom: 8.0, marginBottom: 8.0}}
            />
          </View>
        ) : (
          <Text style={styles.text}>{children.toUpperCase()}</Text>
        )}
      </TouchableHighlight>
    </View>
  );
};

ButtonRounded.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['danger', 'primary', 'disabled']).isRequired,
  square: PropTypes.bool,
};

export default ButtonRounded;
