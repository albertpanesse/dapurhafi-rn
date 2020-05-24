import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {SplashRealm, AppRealm} from '@/components/realms';

const MainApp = createSwitchNavigator(
  {
  	Splash: SplashRealm,
    App: AppRealm,
  },
  {
    initialRouteName: 'Splash',
    headerShown: false
  },
);

export default createAppContainer(MainApp);
