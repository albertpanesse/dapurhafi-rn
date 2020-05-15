import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
  },
  button: {
    minWidth: '62%',
    paddingVertical: appSetup.textSizes.subtext + 2,
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: appSetup.darkGreen,
    borderRadius: 100,
  },

  square: {
    borderRadius: 5,
  },
  disabled: {backgroundColor: appSetup.disabled},
  loadingContainer: {
    height: 20,
    maxHeight: 20,
    alignItems: 'center',
  },
  text: {
    color: appSetup.light,
    fontSize: appSetup.textSizes.medium,
    letterSpacing: 1,
  },
});

export default styles;
