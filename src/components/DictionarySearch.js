import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSuggestionWordDictionary} from '../actions';
import Color from '../constants/Colors';

class DictionarySearch extends React.Component {
  state = {
    text: '',
    lang: 'semua bahasa',
  };

  constructor() {
    super();
    this.state = {
      text: '',
    };
    // Delay action 1 seconds
    this.onChangeDebounced = _.debounce(this.onChangeDebounced, 1000);
  }

  onChangeText = text => {
    this.setState({text});
    this.onChangeDebounced(text);
  };

  onChangeDebounced = text => {
    this.props.getSuggestionWordDictionary(text, 0);
  };

  renderItem = ({item}) => {
    return <Text style={styles.row}>{item.text}</Text>;
  };

  render() {
    return (
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Cari.."
          // placeholder={`Cari (${this.state.lang})`}
          onChangeText={this.onChangeText}
          ref={input => {
            this.searchInput = input;
          }}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.placeholderColor}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.searchInput.focus()}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color={Colors.placeholderColor}
          />
        </TouchableOpacity>

        {/* <Icon
          style={{ paddingRight: 8, paddingLeft: 10 }}
          name='caret-down'
          size={10}
          color={Colors.placeholderColor}
        /> */}
        {/* <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.searchInput.focus()}
        >
          <Icon
            style={[styles.searchIcon, { paddingLeft: 0 }]}
            name='language'
            size={20}
            color={Colors.placeholderColor}
          />
        </TouchableOpacity> */}
      </View>
      // <View style={styles.container}>
      //   <TextInput
      //     style={{
      //       height: 40,
      //       width: 400,
      //       borderWidth: 1,
      //       color: Colors.headerColor
      //     }}
      //     onChangeText={text => this.setState({ text })}
      //     placeholder='Masukkan kata'
      //     value={this.state.text}
      //   />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  // title: {
  //   fontWeight: 'bold',
  //   fontSize: 14,
  //   color: Colors.headerColor
  // },
  searchSection: {
    backgroundColor: Color.tintColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    flex: 1,
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: Color.tintColor,
    color: Colors.headerColor,
    fontSize: 17,
  },
});

DictionarySearch.propTypes = {
  getSuggestionWordDictionary: PropTypes.func.isRequired,
};

export default connect(
  null,
  {getSuggestionWordDictionary},
)(DictionarySearch);
