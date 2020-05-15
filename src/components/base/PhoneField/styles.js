import {StyleSheet, PixelRatio} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  countrySelectorContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: appSetup.windowSize * 0.025,
    marginRight: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: appSetup.default,
  },
  countrySelector: {},
  callingCodeContainer: {
    paddingVertical: appSetup.windowSize * 0.015,
  },
  inputContainer: {
    flex: 7,
    marginBottom: appSetup.windowSize * 0.025,
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
    color: '#000',
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
  trashIcon: {
    fontSize: appSetup.textSizes.regular,
    color: appSetup.darkLight,
  },
});

export const countryPickerStyle = StyleSheet.create({
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: appSetup.windowSize * 0.05,
  },
  imgStyle: {
    resizeMode: 'contain',
    width: appSetup.windowSize * 0.066,
    height: appSetup.windowSize * 0.05,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 1,
  },
});

export default styles;
