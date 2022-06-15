import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import DictionarySearch from '../components/DictionarySearch';
import DictionarySuggestionItem from '../components/DictionarySuggestionItem';
import Colors from '../constants/Colors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getDictionaryResult} from '../actions/dictionaryActions';

const extractKey = ({id}) => id.toString();

class DictionaryScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: () => <DictionarySearch />,
      headerStyle: {
        height: 45,
        backgroundColor: Colors.tintColor,
      },
      headerTintColor: Colors.headerColor,
      // headerRight: (
      //   <IconButton
      //     icon='search'
      //     color={Colors.headerColor}
      //     size={20}
      //     onPress={() => console.log('Pressed')}
      //   />
      // )
    };
  };

  renderItem = ({item}) => {
    return (
      <DictionarySuggestionItem
        item={item}
        onPress={() => {
          this.props.getDictionaryResult(item.id);
          this.props.navigation.navigate('DictionaryResult', {
            word: item.shown,
          });
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.props.wordSuggestions}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

DictionaryScreen.propTypes = {
  wordSuggestions: PropTypes.array,
  getDictionaryResult: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wordSuggestions: state.dictionary.wordSuggestions,
});

export default connect(
  mapStateToProps,
  {getDictionaryResult},
)(DictionaryScreen);
