/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Restaurantes'} />
  </View>
);

export default App;