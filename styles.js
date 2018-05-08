/**
 * Created by Orz on 2018/5/5.
 */
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  cell: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFF',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  font: {
    color: '#797979',
    fontSize: 13,
  },
  bold: {
    fontWeight: 'bold'
  },
})