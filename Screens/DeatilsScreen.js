import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {Dimensionheight, Dimensionwidth} from '../Utils/Dimensions';

//To implemnt a React native Shared Element Transition

export default function DeatilsScreen({route}) {
  let {item} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8f8'}}>
      <View style={styles.imgcontainer}>
        <Image
          source={item.photo}
          style={{
            width: '100%',
            height: Dimensionheight * 0.55,
            alignSelf: 'center',
            borderRadius: 30,
            opacity: 0.8,
          }}
        />
        <View style={styles.txtcontainer}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            ${item.price}
          </Text>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.overviewbox}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#F17A49',
            }}>
            Overview
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#0405',
              marginLeft: 25,
              alignSelf: 'center',
            }}>
            Reviews
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    height: Dimensionheight * 0.55,
    width: '100%',
    padding: 20,
    borderRadius: 30,
    alignSelf: 'center',
    borderBottomColor: '#000',
  },
  txtcontainer: {
    position: 'absolute',
    top: Dimensionheight * 0.45,
    left: 50,
  },
  overviewbox: {
    marginTop: 50,
    left: 30,
    flexDirection: 'row',
  },
});

//Reviweing the code and the
