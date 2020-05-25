import {StyleSheet} from 'react-native';
import appSetup from '@/setup';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: appSetup.paddingHorizontal - 16,
  },
  content: {
  },
  itemContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
  },
  dropDownWrapper: {
    marginBottom: 20,
  },
});
