import React from 'react';
import { ListView, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Row data (hard-coded)
const rows = {
  'Basic Components': [
    { id: 1, text: 'View', navigation: 'View' },
    { id: 2, text: 'Flexbox', navigation: 'Flexbox' },
    { id: 3, text: 'Text', navigation: 'Text' },
    { id: 4, text: 'Image', navigation: 'Image' },
    { id: 5, text: 'ScrollView', navigation: 'ScrollView' }
  ],
  'List Components': [
    { id: 6, text: 'FlatList', navigation: 'FlatList' },
    {
      id: 7.1,
      text: 'HomogenousSectionList',
      navigation: 'HomogenousSectionList'
    },
    {
      id: 7.2,
      text: 'HeterogenousSectionList',
      navigation: 'HeterogenousSectionList'
    },
    { id: 8, text: 'ListView', navigation: 'ListView' }
  ]
};

// Row and section comparison functions
const rowHasChanged = (r1, r2) => r1.id !== r2.id;
const sectionHeaderHasChanged = (s1, s2) => s1 !== s2;

// DataSource template object
const ds = new ListView.DataSource({ rowHasChanged, sectionHeaderHasChanged });

export default class CoreComponentScreen extends React.Component {
  static navigationOptions = {
    title: 'Components'
  };

  state = {
    dataSource: ds.cloneWithRowsAndSections(rows)
  };

  renderRow = rowData => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(rowData.navigation);
        }}
        style={styles.rowLink}
      >
        <Text style={styles.rowLinkText}>
          {rowData.id}. {rowData.text}
        </Text>
      </TouchableOpacity>
      // <Button
      //   style={styles.row}
      //   title={rowData.text}
      //   onPress={() => {
      //     this.props.navigation.navigate('Home');
      //   }}
      // >
      // </Button>
    );
  };

  renderSectionHeader = (sectionRows, sectionId) => {
    return (
      <Text style={styles.header}>
        {sectionId} ({sectionRows.length})
      </Text>
    );
  };

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    padding: 5,
    paddingLeft: 10,
    marginBottom: 1,
    backgroundColor: 'skyblue'
  },
  header: {
    padding: 5,
    marginBottom: 1,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold'
  },

  rowLink: {
    paddingVertical: 3,
    paddingLeft: 10
  },
  rowLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});
