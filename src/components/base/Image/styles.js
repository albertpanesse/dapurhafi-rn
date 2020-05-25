import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  label: {
    color: '#666',
  },
  imageContainer: {
    width: '100%',
    height: appSetup.windowSize * 0.6,
    position: 'relative',
    backgroundColor: appSetup.light,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
