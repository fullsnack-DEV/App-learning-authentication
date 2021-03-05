import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Formbtn from '../component/Formbtn';
import Forminput from '../component/Forminput';
import Socialbtn from '../component/Socialbtn';

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
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password ?</Text>
      </TouchableOpacity>

      <Socialbtn
        btntitle="Sign in with Facebook"
        btntype="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      <Socialbtn
        btntitle="Sign in with Login"
        btntype="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
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
    fontWeight: 'bold',
    color: '#2e64e5',
  },
});
