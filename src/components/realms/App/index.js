import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import {AppHeader, CommonHeader} from '@/components/base';
import {Category as CategoryScene, Product as ProductScene, ProductForm as ProductFormScene, Timeline as TimelineScene} from '@/components/scenes';

import appSetup from '@/setup';

const Stack = createStackNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Category"
    >
      <Stack.Screen
        name="Category"
        component={CategoryScene}
      />
    </Stack.Navigator>
  );
}

function ProductStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Product"
    >
      <Stack.Screen
        name="Product"
        component={ProductScene}
        options={{
          header: () => <AppHeader screenTitle="Produk" />
        }}
      />
      <Stack.Screen
        name="ProductForm"
        component={ProductFormScene}
        options={{
          header: () => <CommonHeader navigation={navigation} screenTitle="Form Produk" backRoute="Product" />
        }}
      />
    </Stack.Navigator>
  );
}

function TimelineStack() {
  return (
    <Stack.Navigator
      initialRouteName="Timeline"
    >
      <Stack.Screen
        name="Timeline"
        component={TimelineScene}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      initialRouteName="Product"
      tabBarOptions={{
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
      }}
    >
      <Tab.Screen
        name="CategoryTab"
        component={CategoryStack}
        options={{
          tabBarLabel: "Kategori",
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="tags"
              type="font-awesome"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="ProductTab"
        component={ProductStack}
        options={{
          tabBarLabel: "Produk",
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="th-large"
              type="font-awesome"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="TimelineTab"
        component={TimelineStack}
        options={{
          tabBarLabel: "Time Line",
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="clock-o"
              type="font-awesome"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
