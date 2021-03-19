/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
/* eslint-disable no-shadow */
import React, {useState, useContext, useEffect} from 'react';

import auth from '@react-native-firebase/auth';

import {NavigationContainer} from '@react-navigation/native';
import {Authcontext} from './Authprovider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const {User, SetUser} = useContext(Authcontext);

  const [intializing, setintializing] = useState(true);

  const onAuthStateChanged = (User) => {
    SetUser(User);
    if (intializing) setintializing(false);
  };

  //from react-native-firebase documentation
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (intializing) return null;

  return (
    <NavigationContainer>
      {User ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

//we will display the MainScreens on the condition like
// if user is present or sign in then and then only we can display the AppStack otherwise we will display the Authstack
