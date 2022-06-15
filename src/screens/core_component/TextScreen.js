import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class TextScreen extends Component {
  static navigationOptions = {
    title: 'Text',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
});

