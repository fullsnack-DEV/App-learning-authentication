import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Formbtn from '../component/Formbtn';
import Forminput from '../component/Forminput';
import Socialbtn from '../component/Socialbtn';

export default function Loginscreen({navigation}) {
  const [email, Setemail] = useState();
  const [password, Setpassword] = useState();
  const [conpassword, Setconpassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Create Account </Text>
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

      <Forminput
        labelvalue={conpassword}
        onChangeText={(confpassword) => Setconpassword(confpassword)}
        placeholder="Confirm Password"
        icontype="lock"
        secureTextEntry={true}
      />
      <Formbtn btntitle="Sign up" onPress={() => alert('Sign in clicked')} />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our
        </Text>
        <TouchableOpacity>
          <Text style={([styles.color_textPrivate], {color: '#e88832'})}>
            Term of Service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}>and</Text>
        <Text style={([styles.color_textPrivate], {color: '#e88832'})}>
          Privacy Policy
        </Text>
      </View>
      <Socialbtn
        btntitle="Sign up with Facebook"
        btntype="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      <Socialbtn
        btntitle="Sign up with Login"
        btntype="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
