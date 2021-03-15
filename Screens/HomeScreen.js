import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import CateogryCom from '../component/CateogryCom';
import Formbtn from '../component/Formbtn';
import SearchBar from '../component/SearchBar';
import Cateogries from '../Data/Cateogries';
import {Authcontext} from '../Navigation/Authprovider';

export default function HomeScreen() {
  const {logout} = useContext(Authcontext);

  const [Cateogory, SetCategory] = useState();

  const [SelectedCateogory, SetSelecteogory] = useState();

  const onSelectCateogory = (Cateogory) => {
    SetSelecteogory(Cateogory);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8f8'}}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.backgroundprofile}>
            <Image
              source={require('../assests/images/teenager.png')}
              style={{
                height: 35,
                width: 35,
                alignSelf: 'center',
                marginVertical: 5,
              }}
            />
          </View>
          <Text
            style={{
              textAlignVertical: 'center',
              padding: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Hi, jenifer !
          </Text>
        </View>

        <View style={styles.notification}>
          <View style={styles.background}>
            <Image
              source={require('../assests/images/bell.png')}
              style={{
                height: 30,
                width: 30,
                alignSelf: 'center',
                marginVertical: 5,
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.heading}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Where do</Text>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>you want to go ?</Text>
      </View>

      <View style={styles.Searchbar}>
        <SearchBar />
      </View>
      <View style={styles.categorycontainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 25,
            left: 25,
          }}>
          Categories
        </Text>

        <FlatList
          data={Cateogries}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginLeft: 20}}
          renderItem={({item}) => {
            return (
              <CateogryCom
                icon={item.icon}
                title={item.name}
                onPress={() => onSelectCateogory(item)}
                stylebg={{
                  backgroundColor:
                    SelectedCateogory?.id == item.id ? '#fff' : '#f1f1f1',
                }}
              />
            );
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 25,
            left: 25,
          }}>
          Top trips
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  maincontainer: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 20,
    marginVertical: 10,
  },
  profile: {
    padding: 10,
    flexDirection: 'row',
  },
  notification: {
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  heading: {
    padding: 10,
    top: -10,
    left: 15,
  },
  background: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10,

    elevation: 24,
  },
  backgroundprofile: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10,

    elevation: 24,
  },
});
