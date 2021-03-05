import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensionheight, Dimensionwidth} from '../Utils/Dimensions';
export default function Forminput({
  icontype,
  labelvalue,
  placeholder,
  ...rest
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={icontype} color="#666" size={25} />
      </View>
      <TextInput
        value={labelvalue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholder}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: Dimensionheight / 15,
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: Dimensionwidth / 1.5,
    height: Dimensionheight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
