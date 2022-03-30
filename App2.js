import React from 'react';
import { YellowBox } from 'react-native';
//import ItemList from './lib/ListItem/ItemList';
//import LoginScreen from './lib/Screen/LoginScreen';

import { StackNavigator } from 'react-navigation';
import LoginScreen from './lib/Auth/LoginScreen';
import ListItem from './lib/ListItem/ItemList';

export default class App extends React.Component {
  render() {
    return (
      <LoginScreen />
      
    );
  }
}
