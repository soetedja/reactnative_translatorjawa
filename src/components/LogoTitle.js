import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../constants/Colors';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <View>
        <Text>ADSFSDFSDFSD</Text>
      </View>
      // <View style={styles.container}>
      //   <Text style={[styles.text, styles.textBold]}>Mongo</Text>
      //   <Text style={[styles.text, styles.textLight]}>silakan</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -35,
  },
  text: {
    color: Color.headerColor,
    fontSize: 22,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textLight: {
    fontWeight: '100',
  },
});
