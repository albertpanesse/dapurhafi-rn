import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  button: {
    width: '90%',
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: appSetup.darkGreen,
    borderRadius: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: appSetup.windowSize * 0.02,
  },
  textContent: {
    fontSize: appSetup.textSizes.regular - 3,
    color: appSetup.darkGreen,
  },
  icon: {
    marginLeft: 15,
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
    width: '90%',
    marginHorizontal: '5%',
    borderColor: appSetup.lightDark,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: appSetup.light,
  },
  dropDownItem: {
    alignItems: 'center',
    paddingVertical: appSetup.windowSize * 0.02,
    borderColor: appSetup.lightDark,
    borderWidth: 1,
  },
});

export default styles;
