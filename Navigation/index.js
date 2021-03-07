import React from 'react';
import Routes from './Routes';
import {Authprovider} from './Authprovider';
const Provider = () => {
  return (
    //routes
    <Authprovider>
      <Routes />
    </Authprovider>
  );
};

export default Provider;
