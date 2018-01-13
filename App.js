/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import CategoriesList from './src/components/CategoriesList'
import restaurants from './src/assets/restaurants.json';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Restaurantes'} />
    <CategoriesList style={styles.categoriesStyle} categories={restaurants.categories} />
  </View>
);

const styles = StyleSheet.create({
    categoriesStyle: {
      flex: 1
    }
});


export default App;