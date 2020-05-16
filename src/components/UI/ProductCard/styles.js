import { StyleSheet } from 'react-native';
import appSetup from '@/setup';

const cardWidth = appSetup.windowSize * 0.9;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 3,
  },
  cardBody: {
    width: '100%',
    backgroundColor: appSetup.light,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: '100%',
    height: cardWidth / 2-15,
    position: 'relative',
    backgroundColor: appSetup.light,
  },
  image: {
    flex: 1,
    width: null,
    resizeMode: 'cover',
  },
  buttonsContainer: {
    zIndex: 400
  },
  titleContainer: {
    width: '100%',
    marginTop: 5
  },
  brand: {
    width: 74,
    height: 34,
    resizeMode: 'contain'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  BookMark: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 500
  },
  discount: {
    width: 70,
    height: 32,
    backgroundColor: appSetup.darkGreen,
    alignItems: 'center',
    justifyContent: 'center'  ,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  discountText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  }
});

export default styles;
