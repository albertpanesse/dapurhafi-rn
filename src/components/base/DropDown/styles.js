import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  label: {
    color: '#666',
    fontSize: appSetup.textSizes.regular - 3,
    marginTop: appSetup.windowSize * 0.02,
  },
  button: {
    width: '100%',
    borderWidth: 1,
    borderColor: appSetup.darkGreen,
    borderRadius: 4,
    marginTop: appSetup.windowSize * 0.06,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: appSetup.windowSize * 0.02,
  },
  textContent: {
    marginLeft: 15,
    fontSize: appSetup.textSizes.regular - 3,
    color: appSetup.darkGreen,
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 18,
    fontSize: appSetup.textSizes.regular - 3,
    color: appSetup.darkGreen,
  },
  animationContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
    height: '100%',
  },
  dropDownContent: {
    width: '100%',
    borderColor: appSetup.lightDark,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: appSetup.light,
  },
  dropDownItem: {
    alignItems: 'flex-start',
    paddingVertical: appSetup.windowSize * 0.02,
    borderColor: appSetup.lightDark,
    borderWidth: 1,
  },
});

export default styles;
