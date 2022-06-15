import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect} from 'react-redux';
import DictionarySearch from '../components/DictionarySearch';
import DictionaryScreen2 from '../screens/DictionaryScreen2';
import DictionaryResultScreen from '../screens/DictionaryResultScreen';
import Colors from '../constants/Colors';

const DictionaryStack = createStackNavigator();

const DictionaryStackScreen = () => {
  return (
    <DictionaryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.tintColor,
        },
        headerTintColor: Colors.headerColor,
      }}>
      <DictionaryStack.Screen
        name="Mongosilakan"
        component={DictionaryScreen2}
        options={{
          headerTitle: prps => <DictionarySearch {...prps} />,
        }}
      />
      <DictionaryStack.Screen
        name="DictionaryResult"
        options={({route}) => ({title: 'Arti "' + route.params.title + '"'})}
        component={DictionaryResultScreen}
      />
    </DictionaryStack.Navigator>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(DictionaryStackScreen);
