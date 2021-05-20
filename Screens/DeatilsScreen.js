import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
        <View style={styles.ratingContainer}>
          <View style={styles.durations}>
            <View style={styles.icon}>
              <AntDesign name="clockcircle" size={25} color={'#F17A49'} />
            </View>
            <View style={styles.des}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#0405',

                  alignSelf: 'center',
                }}>
                Durations
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',

                  alignSelf: 'center',
                }}>
                5 Hours
              </Text>
            </View>
          </View>
          <View style={styles.ratings}>
            <View style={styles.icon}>
              <AntDesign
                name="star"
                size={25}
                color={'#F17A49'}
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.89,
                  shadowRadius: 10,

                  elevation: 24,
                }}
              />
            </View>
            <View style={styles.des}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#0405',

                  alignSelf: 'center',
                }}>
                Ratings
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',

                  alignSelf: 'center',
                }}>
                4.8 Out of 5
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <Text>{item.description}</Text>
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 25,
    width: '80%',
    top: -10,
    justifyContent: 'space-around',
    left: 10,
  },
  //not able to add the shadow to the icons
  durations: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  des: {
    marginLeft: 20,
  },
  icon: {
    justifyContent: 'center',
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 15,
  },
});

//Reviweing the code and the
