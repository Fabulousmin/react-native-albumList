import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//Create a component
const App = () => (
  <View style={{ flex:1 }}>
    <Header headerText={'Albums'}/>
    <AlbumList/>
  </View>
);

//Render it to the device
AppRegistry.registerComponent('tutorial1', () => App);