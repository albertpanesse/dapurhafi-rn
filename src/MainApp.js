import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {SplashRealm, AuthRealm, AppRealm} from '@/components/realms';

const MainApp = createSwitchNavigator(
  {
  	Splash: SplashRealm,
    Auth: AuthRealm,
    App: AppRealm
  },
  {
    initialRouteName: 'Splash',
    headerShown: false
  },
);

export default createAppContainer(MainApp);
