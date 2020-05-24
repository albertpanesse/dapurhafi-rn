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
    paddingTop: 4,
    alignItems: 'center',
  },
  title: {
    color: appSetup.light,
    fontSize: appSetup.textSizes.regular + 2,
  },
});

export default styles;
