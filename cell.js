/**
 * Created by Orz on 2018/5/5.
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import style from './styles'

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      len: this.props.len?this.props.len:100,
      bold: this.props.bold,
    }
  }

  render() {
    let body
    if(typeof this.state.data === 'string' || typeof this.state.data === 'number'){
      body = <Text style={[style.font, this.state.bold?style.bold:'']}>
        { this.state.data }
      </Text>
    } else {
      body = this.state.data
    }
    return(
      <View style={[style.cell, style.center, {width: this.state.len}]}>
        { body }
      </View>
    )
  }
}
