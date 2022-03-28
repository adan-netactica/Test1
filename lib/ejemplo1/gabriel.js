import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
 
var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;
 
export default class GabrielList extends Component {
    render() {
      return (
        <View style={styles.wrapper}>
          <View style={styles.container}>
              <View style={[styles.box, styles.box1]}></View>
              <View style={[styles.box, styles.box2]}></View>
              <View style={[styles.box, styles.box3]}></View>
          </View>
          <View style={styles.container2}>
              <View style={[styles.box, styles.box1]}></View>
              <View style={[styles.box, styles.box2]}></View>
              <View style={[styles.box, styles.box3]}></View>
          </View>
        </View>
      );
    }
  }
 
const styles = StyleSheet.create({
wrapper: {
        flex: 1
    },
  container: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
//header
//header
box1: {
    flex: 2,
    backgroundColor: '#2196F3'
},
//content
box2: {
    flex: 10,
    backgroundColor: '#8BC34A'
},
//footer
box3: {
    flex: .5,
    backgroundColor: '#e3aa1a'
}
});