/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import OnbordingScreen from '../Screens/OnbordingScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SignupScreens from '../Screens/SignupScreens';
import LoginScreenn from '../Screens/Loginscreenn';

const stack = createStackNavigator();

const AuthStack = () => {
  const [firstLoding, setfirstloding] = useState(null);

  useEffect(() => {
    //using asycstorage
    AsyncStorage.getItem('alreadylaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadylaunched', 'true');
        setfirstloding(true);
      } else {
        setfirstloding(false);
      }
    }, []);
  });

  if (firstLoding === null) {
    return null;
  } else if (firstLoding === true) {
    routename = 'onboarding';
  } else {
    routename = 'Login';
  }

  return (
    <stack.Navigator initialRouteName={routename}>
      <stack.Screen
        name="onboarding"
        component={OnbordingScreen}
        options={{header: () => null}}
      />

      <stack.Screen
        name="Login"
        component={LoginScreenn}
        options={{header: () => null}}
      />

      <stack.Screen
        name="SignupScreen"
        component={SignupScreens}
        options={({navigation}) => ({header: () => null})}
      />
    </stack.Navigator>
  );
};

export default AuthStack;
