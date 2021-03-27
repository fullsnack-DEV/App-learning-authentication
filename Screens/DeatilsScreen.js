import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//To implemnt a React native Shared Element Transition

export default function DeatilsScreen({route}) {
  let {item} = route.params;

  return (
    <View>
      <Text style={{color: '#000'}}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
