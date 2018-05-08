/**
 * Created by Orz on 2018/5/08.
 */
import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Table from '../index.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: ['id', 'name'],
      body: [[1, 'apple'], [2, 'banana'], [3, 'pineapple']],
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <Table header={this.state.header} body={this.state.body}/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
})
