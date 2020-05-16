import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {LatestScene} from '@/components/scenes';

import appSetup from '@/setup';

const LatestStack = createStackNavigator(
  {
    Latest: {screen: LatestScene},
  },
  {
    initialRouteName: 'Latest',
  },
);

const App = createBottomTabNavigator(
  {
    Latest: {
      screen: LatestStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color={tintColor}
            size={30}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Latest',
    tabBarOptions: {
      activeTintColor: appSetup.darkGreen,
      inactiveTintColor: appSetup.default,
      labelStyle: {
        fontSize: 14,
        backgroundColor: 'transparent',
        fontWeight: '300',
      },
      style: {
        paddingTop: 5,
        borderTopWidth: 0,
        height: 65,
        paddingBottom: 8,
      },
    },
  },
);

export default App;
