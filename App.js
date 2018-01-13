/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import CategoriesList from './src/components/CategoriesList'
import restaurants from './src/restaurants.json';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Restaurantes'} />
    <CategoriesList style={{height: 100}}categories={restaurants.categories} />
  </View>
);

export default App;