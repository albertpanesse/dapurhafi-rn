import { StyleSheet } from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    minWidth: '62%',
    paddingVertical: appSetup.textSizes.subtext + 2,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  rounded: {
    borderRadius: 100,
  },
  square: {
    borderRadius: 5,
  },
  darkGreen: { backgroundColor: appSetup.darkGreen },
  primary: { backgroundColor: appSetup.primary },
  disabled: { backgroundColor: appSetup.disabled },
  text: {
    color: appSetup.light,
    fontSize: appSetup.textSizes.subtext,
  },
});

export default styles;
