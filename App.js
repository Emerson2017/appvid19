import React from 'react';
import { StatusBar} from 'react-native';

import Start from './src/pages/Start'
import Login from './src/pages/Login';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      <Start/>
    </>
  );
}