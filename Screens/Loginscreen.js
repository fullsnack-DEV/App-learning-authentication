import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Formbtn from '../component/Formbtn';
import Forminput from '../component/Forminput';

export default function Loginscreen({navigation}) {
  const [email, Setemail] = useState();
  const [password, Setpassword] = useState();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/images/onboarding-img2.png')}
        style={styles.logo}
      />
      <Text style={styles.text}> Search Hotels </Text>
      <Forminput
        labelvalue={email}
        onChangeText={(useremail) => Setemail(useremail)}
        placeholder="Email"
        icontype="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Forminput
        labelvalue={password}
        onChangeText={(userpassword) => Setpassword(userpassword)}
        placeholder="Password"
        icontype="lock"
        secureTextEntry={true}
      />
      <Formbtn btntitle="Sign in" onPress={() => alert('Sign in clicked')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 20,
    marginTop: 15,
    color: '#051d5f',
    fontWeight: 'bold',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
