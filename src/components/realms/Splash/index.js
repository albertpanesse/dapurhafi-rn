import {createStackNavigator} from 'react-navigation-stack';

import {SplashScene} from '@/components/scenes';

const Splash = createStackNavigator(
  {
    Splash: { screen: SplashScene },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default Splash;
