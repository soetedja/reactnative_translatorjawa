import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

export default class DictionarySuggestionItem extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.layout}>
          <Text style={styles.word}>{this.props.item.shown}</Text>
          <Text style={styles.language}>{this.props.item.language_name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 7,
    borderBottomColor: '#fff',
    borderBottomWidth: 1
  },
  word: {
    fontWeight: 'normal',
    marginLeft: 7
  },
  language: {
    fontWeight: 'bold',
    color: Colors.tintColor
  }
});
