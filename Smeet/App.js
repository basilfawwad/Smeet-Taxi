import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
 
import Root from './src/main.js';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Root {...this.props}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
 });
