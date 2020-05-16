import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';

import {RetailerScene, CategoryScene, LatestScene, CartScene, ProfileScene} from '@/components/scenes';

import appSetup from '@/setup';

const RetailerStack = createStackNavigator(
  {
    Retailer: {screen: RetailerScene},
  },
  {
    initialRouteName: 'Retailer',
  },
);

const CategoryStack = createStackNavigator(
  {
    Category: {screen: CategoryScene},
  },
  {
    initialRouteName: 'Category',
  },
);

const LatestStack = createStackNavigator(
  {
    Latest: {screen: LatestScene},
  },
  {
    initialRouteName: 'Latest',
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

const ProfileStack = createStackNavigator(
  {
    Profile: {screen: ProfileScene},
  },
  {
    initialRouteName: 'Profile',
  },
);

const App = createBottomTabNavigator(
  {
    Retailer: {
      screen: RetailerStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="shop"
            type="entypo"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
    Kategori: {
      screen: CategoryStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="tags"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
    Terbaru: {
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
    Keranjang: {
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
    Profil: {
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
    initialRouteName: 'Terbaru',
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
