import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homestack from './HomeStack';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
        style: {
          backgroundColor: '#0d0d0b',
        },
      }}>
      <Tab.Screen component={Homestack} name="Home" />
      <Tab.Screen component={Homestack} name="Setting" />
      <Tab.Screen component={Homestack} name="Chat" />
      <Tab.Screen component={Homestack} name="Profile" />
    </Tab.Navigator>
  );
};

export default AppStack;
