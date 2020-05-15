import {createStackNavigator} from 'react-navigation-stack';

import {AuthScene} from '@/components/scenes';

const Auth = createStackNavigator(
  {
    Auth: { screen: AuthScene },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default Auth;
