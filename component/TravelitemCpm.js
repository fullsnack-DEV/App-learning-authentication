import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Dimensionheight, Dimensionwidth} from '../Utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TravelitemCpm({img, title}) {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={img}
          style={{
            width: Dimensionwidth * 0.5,
            height: Dimensionheight * 0.28,

            borderRadius: 30,
          }}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.title}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
            {title}
          </Text>
          <Text style={{color: '#000', fontSize: 15, fontWeight: 'bold'}}>
            Camp
          </Text>
        </View>

        <View style={styles.heart}>
          <AntDesign
            name="hearto"
            size={25}
            style={{marginVertical: 8, color: '#FA5805'}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensionheight * 0.4,
    width: Dimensionwidth * 0.55,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-around',
  },
  img: {
    width: Dimensionwidth * 0.5,
    height: Dimensionheight * 0.28,
    alignSelf: 'center',
    borderRadius: 25,
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: Dimensionwidth * 0.48,
    padding: 10,
    marginTop: 12,
  },
  heart: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 5,
  },
});
