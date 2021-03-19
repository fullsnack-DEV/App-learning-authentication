/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Forminput from '../component/Forminput';
import {Authcontext} from '../Navigation/Authprovider';
import Formbtn from '../component/Formbtn';
export default function LoginScreenn({navigation}) {
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();
  const [Forgotpass, SetForgotpass] = useState();

  const {register} = useContext(Authcontext);

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.img}
        source={require('../assests/images/background.png')}
        resizeMode="cover">
        <TouchableOpacity
          style={{top: '23%', left: 10}}
          onPress={() => navigation.navigate('Login')}>
          <AntDesign name="arrowleft" size={40} color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.txtcontainer}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            Welcome ,
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              marginVertical: 5,
            }}>
            Sign Up here
          </Text>
        </View>

        <View style={styles.inputcontainers}>
          <Forminput
            labelvalue={Email}
            onChangeText={(useremail) => SetEmail(useremail)}
            placeholder="Email"
            icontype="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Forminput
            labelvalue={Password}
            onChangeText={(userpassword) => SetPassword(userpassword)}
            placeholder="Password"
            icontype="lock"
            secureTextEntry={true}
          />
          <Forminput
            labelvalue={Forgotpass}
            onChangeText={(forgotpassword) => SetForgotpass(forgotpassword)}
            placeholder="Password"
            icontype="lock"
            secureTextEntry={true}
          />
          <View>
            <Formbtn
              btntitle="Sign up"
              onPress={() => register(Email, Password)}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
  },
  txtcontainer: {
    top: '25%',
    left: 20,
  },
  maincontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputcontainers: {
    top: '30%',
    alignSelf: 'center',
  },
});
