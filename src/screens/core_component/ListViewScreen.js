import React, { Component } from 'react';
import { ListView, Text, StyleSheet } from 'react-native';

// Row data (hard-coded)
const rows = {
  'Basic Components': [
    {id: 0, text: 'View'},
    {id: 1, text: 'Text'},
    {id: 2, text: 'Image'},
  ],
  'List Components': [
    {id: 3, text: 'ScrollView'},
    {id: 4, text: 'ListView'},
  ],
};

// Row and section comparison functions
const rowHasChanged = (r1, r2) => r1.id !== r2.id;
const sectionHeaderHasChanged = (s1, s2) => s1 !== s2;

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged});

export default class ListViewScreen extends Component {

  state = {
    dataSource: ds.cloneWithRowsAndSections(rows)
  }

  renderRow = (rowData) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    );
  }

  renderSectionHeader = (sectionRows, sectionId) => {
    return (
      <Text style={styles.header}>
        {sectionId} ({sectionRows.length})
      </Text>
    );
  }

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
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
});

