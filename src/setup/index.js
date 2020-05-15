import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const size = screenWidth > screenHeight ? screenHeight : screenWidth;
const ratio = PixelRatio.get();
const absoluteSize = size / ratio;

const textSizes = {
  regular: absoluteSize * 0.05 + ratio * 4, // ~20px
  medium: absoluteSize * 0.04 + ratio * 4,
  subtext: absoluteSize * 0.025 + ratio * 4, // ~14px
  small: absoluteSize * 0.018 + ratio * 4, // ~12px
  smallest: absoluteSize * 0.015 + ratio * 3,
};

const paddingHorizontal = size * 0.1;

export default {
  screenWidth,
  screenHeight,
  windowSize: size,
  paddingHorizontal,
  textSizes,
  tabBarIconSize: 24,
  light: '#fff',
  lightDark: '#eee',
  dark: '#000',
  primary: '#0461ec',
  primaryDark: '#071d6d',
  danger: '#ca212e',
  dangerLight: '#e03e4a',
  dangerDark: '#9a131d',
  default: '#919191',
  darkGray: '#474747',
  disabled: '#555',
  darkGreen: '#326300'
};
