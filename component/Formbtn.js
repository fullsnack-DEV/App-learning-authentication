import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Dimensionheight, Dimensionwidth} from '../Utils/Dimensions';
export default function Formbtn({btntitle, ...rest}) {
  return (
    <TouchableOpacity style={styles.btncontainer} {...rest}>
      <Text style={styles.buttontext}> {btntitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btncontainer: {
    marginTop: 10,
    width: '100%',
    height: Dimensionheight / 15,
    backgroundColor: '#2e64e0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttontext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

//sucess is not a story its a journey
