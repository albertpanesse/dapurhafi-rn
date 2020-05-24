import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';

import {CategoryScene, ProductScene, ProductFormScene, TimelineScene} from '@/components/scenes';

import appSetup from '@/setup';

const CategoryStack = createStackNavigator(
  {
    Kategori: {screen: CategoryScene},
  },
  {
    initialRouteName: 'Kategori',
  },
);

const ProductStack = createStackNavigator(
  {
    Produk: {screen: ProductScene},
    FormProduk: {screen: ProductFormScene},
  },
  {
    initialRouteName: 'Produk',
  },
);

const TimelineStack = createStackNavigator(
  {
    'Time Line': {screen: TimelineScene},
  },
  {
    initialRouteName: 'Time Line',
  },
);

const App = createBottomTabNavigator(
  {
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
    Produk: {
      screen: ProductStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="th-large"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
    'Time Line': {
      screen: TimelineStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="clock-o"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Produk',
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
