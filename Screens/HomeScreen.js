import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Formbtn from '../component/Formbtn';
import {Authcontext} from '../Navigation/Authprovider';

export default function HomeScreen() {
  const {logout} = useContext(Authcontext);

  return (
    <View>
      <Text>This is HomeScreen</Text>
      <Formbtn btntitle="Logout" onPress={() => logout()} />
    </View>
  );
}
const styles = StyleSheet.create({});
