/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const stack = createStackNavigator();

const App: () => React$Node = () => {
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
    });
  }, []);

  if (firstLoding === null) {
    return null;
  } else if (firstLoding === true) {
    return (
      <NavigationContainer>
        <stack.Navigator headerMode="none">
          <stack.Screen name="onboarding" component={OnbordingScreen} />
          <stack.Screen name="Home" component={HomeScreen} />
        </stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <HomeScreen />;
  }
};

const styles = StyleSheet.create({});

export default App;
