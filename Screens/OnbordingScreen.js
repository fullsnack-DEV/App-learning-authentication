/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 8}} {...props}>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Done</Text>
  </TouchableOpacity>
);

export default function OnbordingScreen({navigation}) {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.navigate('Home')}
      DoneButtonComponent={done}
      pages={[
        {
          backgroundColor: '#a6e5',

          image: (
            <Image source={require('../assests/images/onboarding-img.png')} />
          ),
          title: 'Looking for Hotels?',
          subtitle: 'You are at the right place!',
        },
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image source={require('../assests/images/onboarding-img2.png')} />
          ),
          title: 'Comfortable',
          subtitle: 'Find the most suitable hotels from our App',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image source={require('../assests/images/onboarding-img3.png')} />
          ),
          title: 'Cheapest',
          subtitle: 'Affordable than most of than most of the other platform',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
