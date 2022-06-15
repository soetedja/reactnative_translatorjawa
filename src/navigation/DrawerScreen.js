import React, {Component} from 'react';
import {NavigationActions} from '@react-navigation/native';
import PropTypes from 'prop-types';
import TouchableOpacityIcon from '../components/TouchableOpacityIcon';
import {Avatar} from 'react-native-paper';
import {ScrollView, View, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/drawer';
import Color from '../constants/Colors';
// import { Button } from 'react-native-paper';
// import styles from '../../styles/index';

class DrawerScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.topImage}>
            <Avatar.Image
              size={75}
              source={require('../assets/images/user.jpg')}
            />
          </View>
          <View style={styles.container}>
            <TouchableOpacityIcon
              style={styles.button}
              text="Beranda"
              color={Color.tintColor}
              icon="home"
              onPress={this.navigateToScreen('Home')}
            />
            <TouchableOpacityIcon
              style={styles.button}
              text="Kamus"
              icon="chrome-reader-mode"
              onPress={this.navigateToScreen('Dictionary')}
            />
            {/* <TouchableOpacityIcon
              style={styles.button}
              text='Pengaturan'
              icon='settings'
              onPress={this.navigateToScreen('Setting')}
            /> */}

            <TouchableOpacityIcon
              style={styles.button}
              text="Bantuan & Umpan balik"
              icon="help-outline"
              onPress={this.navigateToScreen('HelpAndFeedback')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  menuItem: {
    padding: 10,
  },
  button: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
  },
  topImage: {
    height: 150,
    backgroundColor: '#EFF0F1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d5d5',
  },
});

export default DrawerScreen;
