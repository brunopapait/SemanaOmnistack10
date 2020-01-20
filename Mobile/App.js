import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';


export default function App() {
  console.disableYellowBox = true;

  return (
    <>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='#7d40e7'/>
    </>
  );
}
