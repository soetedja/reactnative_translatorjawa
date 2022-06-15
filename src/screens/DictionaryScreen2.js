import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import DictionarySearch from '../components/DictionarySearch';
import DictionarySuggestionItem from '../components/DictionarySuggestionItem';
import Colors from '../constants/Colors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getDictionaryResult} from '../actions/dictionaryActions';

const extractKey = ({id}) => id.toString();

class DictionaryScreen2 extends React.Component {
  renderItem = ({item}) => {
    return (
      <DictionarySuggestionItem
        item={item}
        onPress={() => {
          this.props.getDictionaryResult(item.id);
          this.props.navigation.navigate('DictionaryResult', {
            word: item.shown,
            title: item.shown,
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

DictionaryScreen2.propTypes = {
  wordSuggestions: PropTypes.array,
  getDictionaryResult: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wordSuggestions: state.dictionary.wordSuggestions,
});

export default connect(
  mapStateToProps,
  {getDictionaryResult},
)(DictionaryScreen2);
