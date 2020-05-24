import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

export default StyleSheet.create({
  content: {
    paddingVertical: 20,
  },
  itemContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 5,
  },
  dropDown: {
    marginTop: appSetup.windowSize * 0.05,
  },
});
