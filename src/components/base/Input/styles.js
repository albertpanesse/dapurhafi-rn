import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: appSetup.windowSize * 0.04,
    paddingBottom: appSetup.windowSize * 0.025,
    position: 'relative',
  },
  label: {
    color: '#666',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingVertical: appSetup.windowSize * 0.015,
    paddingLeft: 0,
    fontSize: appSetup.textSizes.regular,
    color: '#333',
    flex: 9,
  },
  inputOnFocus: {
    borderColor: appSetup.darkGreen,
    borderBottomWidth: 2,
  },
  inputOnBlur: {
    borderColor: appSetup.default,
    borderBottomWidth: 2,
  },
  inputOnError: {
    borderColor: appSetup.danger,
    borderBottomWidth: 2,
  },
  additionalContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  eraseIcon: {
    fontSize: appSetup.textSizes.regular + 6,
    color: '#000',
  },
  eyeIcon: {
    fontSize: appSetup.textSizes.regular + 4,
    color: appSetup.default,
  },
});

export default styles;
