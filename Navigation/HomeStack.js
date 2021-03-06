import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import DeatilsScreen from '../Screens/DeatilsScreen';

const Stack = createStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{header: () => null}}
      />
      <Stack.Screen
        component={DeatilsScreen}
        name="DetailScreen"
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default Homestack;

// we will create a diffrent stack for the differet screen and we will put
