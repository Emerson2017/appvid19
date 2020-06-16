import React from 'react';
import { StatusBar} from 'react-native';

import Start from './src/pages/Start'
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      {/* <Start/> */}
      <Login/>
      {/* <Cadastro/> */}
    </>
  );
}