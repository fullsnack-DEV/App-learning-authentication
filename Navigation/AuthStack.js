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
import LoginScreen from '../Screens/Loginscreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from '../Screens/SignupScreen';

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
        component={LoginScreen}
        options={{header: () => null}}
      />

      <stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
    </stack.Navigator>
  );
};

export default AuthStack;
