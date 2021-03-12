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
    width: '50%',
    height: Dimensionheight / 15,
    backgroundColor: '#FA5805',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttontext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

//sucess is not a destination its a journey
