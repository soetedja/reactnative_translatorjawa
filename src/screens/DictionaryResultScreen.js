import React from 'react';
import {ScrollView, View, Text, Clipboard, StyleSheet} from 'react-native';
import {Languages} from '../constants/Languages';
import {connect} from 'react-redux';
import Colors from '../constants/Colors';
import {Chip} from 'react-native-paper';

class DictionaryResultScreen extends React.Component {
  state = {};

  renderLang = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        {this.renderResult(item.id)}
      </View>
    );
  };
  renderItem = it => {
    if (it > 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.language}>{Languages[it].name}</Text>
          <View style={styles.wordResult}>
            {this.props.result[it].map((res, idx) => {
              return (
                <Chip
                  key={idx}
                  // icon='info'
                  onPress={() => {
                    Clipboard.setString(res);
                  }}>
                  {res}
                </Chip>
                // <Text style={styles.resultText} key={res}>
                //   {(idx ? ', ' : '') + res}
                // </Text>
              );
            })}
            {/* <IconButton
              icon='content-copy'
              color={Colors.cardResultColor}
              // style={{ marginRight: -5, marginBottom: -5 }}
              // size={20}
              onPress={() => {
                Clipboard.setString(this.props.result);
                this.setState({ snackBarVisible: true });
              }}
            /> */}
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView>
        <View>
          {Object.keys(this.props.result).map(it => (
            <View key={it}>{this.renderItem(it)}</View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  language: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.lightGrayColor,
    color: Colors.tintColor,
    marginVertical: 10,
  },
  wordResult: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 3,
    marginHorizontal: 10,
  },
  resultText: {
    fontSize: 16,
  },
  snackBar: {
    position: 'absolute',
    bottom: 5,
  },
});

const mapStateToProps = state => ({
  result: state.dictionary.result,
});

export default connect(
  mapStateToProps,
  null,
)(DictionaryResultScreen);
