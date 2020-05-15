import {createStackNavigator} from 'react-navigation-stack';

import {SignInScene} from '@/components/scenes';

const Auth = createStackNavigator(
  {
    SignIn: {screen: SignInScene},
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default Auth;
