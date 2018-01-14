/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import CategoriesList from './src/components/CategoriesList';
import RestaurantList from './src/components/RestaurantList';
import restaurants from './src/assets/restaurants.json';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Restaurantes'} />
    <CategoriesList categories={restaurants.categories} />
    <RestaurantList list={restaurants.list} />
  </View>
);


export default App;