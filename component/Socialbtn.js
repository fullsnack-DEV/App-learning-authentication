import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Dimensionheight, Dimensionwidth} from '../Utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Formbtn({
  btntitle,
  btntype,
  color,
  backgroundColor,
  ...rest
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btntype}
          style={styles.icon}
          size={22}
          color={color}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}> {btntitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: Dimensionheight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
    backgroundColor: 'red',
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});
