import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect} from 'react-redux';
import {Appbar} from 'react-native-paper';
import ChooseLanguageScreen from '../screens/ChooseLanguageScreen';
import TranslateScreen from '../screens/TranslateScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  const _handleMore = () => console.log('Shown more');
  return (
    <HomeStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: Colors.headerColor,
        header: ({scene, previous, navigation}) => {
          const {options} = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;
          const subtitle =
            options.subtitle !== undefined
              ? options.subtitle
              : options.title !== undefined
              ? options.title
              : '';

          return (
            <Appbar.Header>
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={Colors.headerColor}
                />
              ) : (
                <Appbar.Action
                  icon="dots-vertical"
                  onPress={navigation.openDrawer}
                  color={Colors.headerColor}
                  // disabled
                />
              )}
              <Appbar.Content
                title={title}
                subtitle={subtitle}
                color={Colors.headerColor}
              />
              {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
            </Appbar.Header>
          );
        },
      }}>
      <HomeStack.Screen
        name="Mongosilakan"
        component={TranslateScreen}
        options={{headerTitle: 'Mongosilakan', subtitle: 'Translator Jawa'}}
      />
      <HomeStack.Screen
        options={{headerTitle: 'Pilih Bahasa'}}
        name="ChooseLanguage"
        component={ChooseLanguageScreen}
      />
    </HomeStack.Navigator>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(HomeStackScreen);
