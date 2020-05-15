import {createStackNavigator} from 'react-navigation-stack';

import {SignInScene, SignUpScene} from '@/components/scenes';

const Auth = createStackNavigator(
  {
    SignIn: {screen: SignInScene},
    SignUp: {screen: SignUpScene}
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default Auth;
