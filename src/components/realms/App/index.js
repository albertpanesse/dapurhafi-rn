import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';

import {LatestScene, FavoriteScene, ProfileScene, CartScene} from '@/components/scenes';

import appSetup from '@/setup';

const LatestStack = createStackNavigator(
  {
    Latest: {screen: LatestScene},
  },
  {
    initialRouteName: 'Latest',
  },
);

const FavoriteStack = createStackNavigator(
  {
    Favorite: {screen: FavoriteScene},
  },
  {
    initialRouteName: 'Favorite',
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: {screen: ProfileScene},
  },
  {
    initialRouteName: 'Profile',
  },
);

const CartStack = createStackNavigator(
  {
    Cart: {screen: CartScene},
  },
  {
    initialRouteName: 'Cart',
  },
);

const App = createBottomTabNavigator(
  {
    Latest: {
      screen: LatestStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="certificate"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
    Favorite: {
      screen: FavoriteStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="heart"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="shopping-basket"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="user-circle"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Latest',
    tabBarOptions: {
      activeTintColor: appSetup.light,
      inactiveTintColor: appSetup.green,
      labelStyle: {
        fontSize: 10,
        backgroundColor: 'transparent',
        fontWeight: '300',
      },
      style: {
        paddingTop: 10,
        borderTopWidth: 0,
        height: 65,
        paddingBottom: 8,
        backgroundColor: appSetup.darkGreen,
      },
    },
  },
);

export default App;
