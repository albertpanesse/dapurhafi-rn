import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create ({
  content: {
    flex: 1,
  },
  inputContainer: {
    marginTop: appSetup.windowSize * 0.18,
  },
  buttonContainer: {
    marginTop: appSetup.windowSize * 0.2,
    marginBottom: appSetup.windowSize * 0.1,
  },
  bottomTextContainer: {
    alignItems: 'center',
  },
  centerInOneRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default styles;
