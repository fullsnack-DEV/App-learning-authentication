import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Dimensionheight, Dimensionwidth} from '../Utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  return (
    <View style={styles.SearchBar}>
      <View style={styles.container}>
        <TextInput style={styles.txtinput} placeholder={'Search for Places'} />
        <View style={styles.icon}>
          <AntDesign name="search1" size={30} color={'#FA5805'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBar: {
    width: Dimensionwidth * 0.8,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  txtinput: {
    backgroundColor: '#fff',
    borderRadius: 15,
    fontWeight: 'bold',
    height: Dimensionheight * 0.08,
    width: Dimensionwidth * 0.8,

    color: '#000',
    fontSize: 18,
    padding: 20,
  },
  container: {
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
    right: 45,
  },
});
