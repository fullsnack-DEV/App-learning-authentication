/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnbordingScreen from './Screens/OnbordingScreen';
import HomeScreen from './Screens/Homescreen';

const stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <stack.Navigator headerMode="none">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="onboarding" component={OnbordingScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
