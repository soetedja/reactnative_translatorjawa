import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Clipboard,
  Animated,
  Easing,
} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  IconButton,
  Card,
  Colors as PaperColors,
  Snackbar,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../constants/Colors';
import {Directions} from '../constants/Languages';
import {swapLanguages} from '../actions/languageActions';
import {translate} from '../actions/translateActions';
import {StatusBar} from 'react-native';

import _ from 'lodash';

const SCREEN_WIDTH = Dimensions.get('window').width;

class TranslateScreen extends React.Component {
  state = {
    snackBarVisible: false,
  };

  constructor() {
    super();
    this.state = {
      text: 'Pergi ke pasar',
    };
    // Delay action 1 seconds
    this.onChangeDebounced = _.debounce(this.onChangeDebounced, 1000);
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.fromLanguage.id !== this.props.fromLanguage.id ||
      prevProps.toLanguage.id !== this.props.toLanguage.id
    ) {
      this.translate();
    }
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);

    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  componentDidMount() {
    this.props.translate(this.state.text);
  }

  onChangeText = text => {
    this.setState({text});
    this.onChangeDebounced(text);
  };

  onChangeDebounced = text => {
    // Delayed logic goes here
    this.props.translate(text);
  };

  translate = () => {
    this.props.translate(this.state.text);
  };
  s;

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    const {snackBarVisible} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Color.secondaryTintColor}
        />
        <View style={styles.containerLanguage}>
          <View style={styles.languages}>
            <View style={[styles.language, styles.fromLanguage]}>
              <TouchableOpacity
                style={styles.langDropdown}
                activeOpacity={0.7}
                onPress={() =>
                  this.props.navigation.push('ChooseLanguage', {
                    type: Directions.from,
                  })
                }>
                <Text
                  style={[{color: this.props.color}, styles.dropdownTextStyle]}>
                  {this.props.fromLanguage.name}
                </Text>
                <Icon
                  style={styles.dropdownTextStyle}
                  name={'arrow-drop-down'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <Animated.View
              style={[
                styles.swap,
                {
                  transform: [{rotate: RotateData}],
                },
              ]}
              // style={styles.swap}
            >
              {/* <Animated.Image
                style={{
                  width: 200,
                  height: 200,
                  transform: [{ rotate: RotateData }]
                }}
                source={{
                  uri:
                    'https://aboutreact.com/wp-content/uploads/2018/08/logo1024.png'
                }}
              /> */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  this.props.swapLanguages();
                  this.translate();
                  this.StartImageRotateFunction();
                }}>
                <Icon
                  name={'swap-horiz'}
                  size={20}
                  color={Color.lightTintColor}
                />
              </TouchableOpacity>
            </Animated.View>
            <View style={[styles.language, styles.toLanguage]}>
              <TouchableOpacity
                style={styles.langDropdown}
                activeOpacity={0.7}
                onPress={() =>
                  this.props.navigation.push('ChooseLanguage', {
                    type: Directions.to,
                  })
                }>
                <Text
                  style={[{color: this.props.color}, styles.dropdownTextStyle]}>
                  {this.props.toLanguage.name}
                </Text>
                <Icon
                  style={styles.dropdownTextStyle}
                  name={'arrow-drop-down'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Card style={styles.cards}>
          <Card.Content>
            <TextInput
              placeholder="Masukkan kata/kalimat..."
              value={this.state.text}
              multiline
              style={styles.input}
              onChangeText={this.onChangeText}
            />
          </Card.Content>
        </Card>

        <Card style={[styles.cards, styles.cardResult]}>
          <Card.Content>
            <View>
              <Text style={styles.cardResultText}>{this.props.result}</Text>
            </View>
            <View style={styles.resultFooterContainer}>
              <IconButton
                icon="content-copy"
                color={Color.cardResultColor}
                style={{marginRight: -5, marginBottom: -5}}
                size={20}
                onPress={() => {
                  Clipboard.setString(this.props.result);
                  this.setState({snackBarVisible: true});
                }}
              />
              <IconButton
                icon="share"
                color={PaperColors.white}
                size={20}
                disabled={true}
                style={{marginRight: -5, marginBottom: -5}}
                onPress={() => console.log('share')}
              />
            </View>
          </Card.Content>
        </Card>
        <Snackbar
          duration={2000}
          visible={snackBarVisible}
          onDismiss={() => this.setState({snackBarVisible: false})}
          style={styles.snackBar}>
          Copied to Clipboard
        </Snackbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  containerLanguage: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  langDropdown: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  dropdownTextStyle: {
    color: Color.secondaryTintColor,
  },
  languages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  language: {
    width: SCREEN_WIDTH / 2 - 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fromLanguage: {
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  toLanguage: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  swap: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: Color.secondaryTintColor,
  },
  input: {
    color: Color.darkTintColor,
  },
  cards: {
    marginBottom: 0,
  },
  cardResult: {
    margin: 8,
    backgroundColor: Color.lightTintColor,
  },
  cardResultText: {
    color: Color.cardResultColor,
    fontSize: 17,
    // fontWeight: 'bold',
    // fontFamily: 'Pacifico-Regular'
  },
  resultFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 60,
  },
  snackBar: {},
});

TranslateScreen.propTypes = {
  swapLanguages: PropTypes.func.isRequired,
  fromLanguage: PropTypes.object.isRequired,
  toLanguage: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  language: state.language,
  fromLanguage: state.language.fromLanguage,
  toLanguage: state.language.toLanguage,
  result: state.translate.result,
});

export default connect(
  mapStateToProps,
  {swapLanguages, translate},
)(TranslateScreen);
