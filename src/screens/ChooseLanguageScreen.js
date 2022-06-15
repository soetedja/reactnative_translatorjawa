import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SearchLanguage from '../components/SearchLanguage';
import Colors from '../constants/Colors';
import {Directions} from '../constants/Languages';
import {setFromLanguage, setToLanguage} from '../actions/languageActions';

const extractKey = ({id}) => id;

class ChooseLanguageScreen extends React.Component {
  static navigationOptions = ({route, navigation}) => {
    let type = route.type ?? Directions.from;

    return {
      headerTitle: () => <SearchLanguage type={type} />,
      headerStyle: {
        height: 45,
        backgroundColor: Colors.tintColor,
      },
      headerTintColor: Colors.headerColor,
      // headerRight: (
      //   <IconButton
      //     icon='search'
      //     color='#000'
      //     size={20}
      //     onPress={() => console.log('Pressed')}
      //   />
      // )
    };
  };

  renderItem = ({item}) => {
    const {goBack} = this.props.navigation;
    let type = this.props.route.params?.type ?? Directions.from;

    return (
      <TouchableOpacity
        onPress={() => {
          if (type === Directions.from) {
            this.props.setFromLanguage(item);
          } else {
            this.props.setToLanguage(item);
          }
          goBack();
        }}
        style={styles.rowLink}>
        <Text style={styles.row}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  renderLangs() {
    const {languages} = this.props;
    if (languages) {
      return (
        <FlatList
          data={languages}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Semua bahasa</Text>
        {this.renderLangs()}
      </View>
    );
  }
}

ChooseLanguageScreen.propTypes = {
  setFromLanguage: PropTypes.func.isRequired,
  setToLanguage: PropTypes.func.isRequired,
  languages: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  languages: state.language.languages,
});

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.darkTintColor,
  },
  row: {
    paddingLeft: 20,
    marginBottom: 10,
    color: Colors.darkTintColor,
  },
});

export default connect(
  mapStateToProps,
  {setFromLanguage, setToLanguage},
)(ChooseLanguageScreen);
