import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash as SplashScene} from '@/components/scenes';

const Stack = createStackNavigator();

function Splash() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >
      <Stack.Screen
        name="Splash"
        component={SplashScene}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Splash;
