import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Forminput from '../component/Forminput';
import Formbtn from '../component/Formbtn';
import {Authcontext} from '../Navigation/Authprovider';
export default function LoginScreenn({navigation}) {
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();

  const {login} = useContext(Authcontext);

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.img}
        source={require('../assests/images/background.png')}
        resizeMode="cover">
        <View style={styles.txtcontainer}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            Hey,
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              marginVertical: 5,
            }}>
            Login Now
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
          <View>
            <Formbtn
              btntitle="Sign in"
              onPress={() => login(Email, Password)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{top: '45%', alignSelf: 'center'}}
          onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={{color: '#fff', fontSize: 18}}>
            Don't have account?{' '}
            <Text style={{color: '#FA5805'}}> Create here</Text>
          </Text>
        </TouchableOpacity>
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
    top: '30%',
    left: 20,
  },
  maincontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputcontainers: {
    top: '35%',
    alignSelf: 'center',
  },
});
