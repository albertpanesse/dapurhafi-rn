import { StyleSheet } from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  left: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
  button: {
    paddingTop: 7,
    paddingBottom: 2,
    flexShrink: 1,
    borderBottomWidth: 1,
  },
  default: {
    borderColor: appSetup.dark,
  },
  darkGreen: {
    borderColor: appSetup.darkGreen,
  },
  text: {
    fontSize: appSetup.textSizes.subtext,
  },
  textDefault: {
    color: appSetup.dark,
  },
  textDarkGreen: {
    color: appSetup.darkGreen,
  },
  //added by QQ
  mButton: {
    paddingTop: 7,
    paddingBottom: 2,
    flexShrink: 1,
  },
});

export default styles;
