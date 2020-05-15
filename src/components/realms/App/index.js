import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {LatestScene} from '@/components/scenes';

import appTheme from '@/setup';

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
            name=""
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
      activeTintColor: appTheme.danger,
      inactiveTintColor: appTheme.default,
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
