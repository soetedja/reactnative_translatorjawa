import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TouchableOpacityIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        activeOpacity={0.7}
        onPress={this.props.onPress}
      >
        <Icon name={this.props.icon} size={20} color={this.props.color} />
        <Text style={[{ color: this.props.color }, styles.textStyle]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'center'
  },
  // button: {
  //   alignItems: 'flex-start',
  //   backgroundColor: '#fff',
  //   padding: 10
  // },
  textStyle: {
    // color: '#EE4B28',
    fontWeight: 'bold',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  }
});
