import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create ({
  content: {
    flex: 1,
    paddingHorizontal: appSetup.paddingHorizontal,
  },
  inputContainer: {
    marginTop: appSetup.windowSize * 0.05,
  },
  buttonContainer: {
    marginTop: appSetup.windowSize * 0.2,
    marginBottom: appSetup.windowSize * 0.1,
  },
});

export default styles;
