import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'native-base';

import appSetup from '@/setup';

const TextContent = ({ type, color, bold, children, style, center, textStyle }) => {
  return (
    <View style={style}>
      <Text style={[
        {
          color: color ? appSetup[color] : appSetup.default,
          fontSize: appSetup.textSizes[type],
        },
        bold ? { fontWeight: '900' } : null,
        center ? { textAlign: 'center' } : null,
        textStyle
      ]}>
        {children}
      </Text>
    </View>
  );
}

TextContent.propTypes = {
  type: PropTypes.oneOf([
    'regular',
    'subtext',
    'small',
  ]).isRequired,
  children: PropTypes.string,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.oneOf([
    'light',
    'lightDark',
    'dark',
    'primary',
    'primaryDark',
    'danger',
    'dangerLight',
    'dangerDark',
    'default',
    'darkGray',
    'disabled',
  ]),
};

export default TextContent;
