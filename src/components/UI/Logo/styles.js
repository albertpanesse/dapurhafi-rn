import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  container: {
    width: appSetup.windowSize * 0.67,
    height: appSetup.windowSize * 0.53,
  },
  logo: {
    resizeMode: 'contain',
    width: null,
    flex: 1,
  },
});

export default styles;
