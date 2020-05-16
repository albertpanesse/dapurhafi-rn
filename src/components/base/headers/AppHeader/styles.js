import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  header: {
    backgroundColor: appSetup.darkGreen,
  },
  backButton: {
    color: appSetup.light,
    fontSize: appSetup.textSizes.regular,
  },
  headerLeft: { flex: 1 },
  headerRight: { flex: 1 },
  headerBody: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    color: appSetup.light,
    fontSize: appSetup.textSizes.regular,
  },
});

export default styles;
