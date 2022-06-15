import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {Directions} from '../constants/Languages';

export default class SearchLanguage extends React.Component {
  render() {
    const {type} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {type === Directions.from ? 'Terjemahkan dari' : 'Terjemahkan ke'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.headerColor,
  },
});
