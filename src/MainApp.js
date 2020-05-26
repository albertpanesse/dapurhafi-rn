import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash as SplashRealm, App as AppRealm} from '@/components/realms';

const Stack = createStackNavigator();

function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
      >
        <Stack.Screen
          name="Splash"
          component={SplashRealm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="App"
          component={AppRealm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainApp;
