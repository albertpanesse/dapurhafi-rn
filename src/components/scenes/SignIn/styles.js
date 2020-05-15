import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: appSetup.windowSize * 0.1,
  },
  buttonContainer: {
    marginTop: appSetup.windowSize * 0.05,
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginTop: appSetup.windowSize * 0.05,
  },
  bottomSpace: {
    height: appSetup.windowSize * 0.1,
  },
});

export default styles;
