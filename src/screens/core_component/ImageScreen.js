import React, { Component } from 'react';
import { Image, StyleSheet , View} from 'react-native';

export default class ImageScreen extends Component {
  static navigationOptions = {
    title: 'Image',
  }

  render() {
    return (
      <View 
        style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
