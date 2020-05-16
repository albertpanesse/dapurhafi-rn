import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {SplashRealm, AuthRealm, AppRealm} from '@/components/realms';

const MainApp = createSwitchNavigator(
  {
  	Splash: SplashRealm,
    App: AppRealm,
    Auth: AuthRealm,
  },
  {
    initialRouteName: 'Splash',
    headerShown: false
  },
);

export default createAppContainer(MainApp);
