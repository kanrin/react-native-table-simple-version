/**
 * Created by Orz on 2018/4/28.
 */
import React, { Component } from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'
import Cell from './cell'
import style from './styles'

let {width} = Dimensions.get('window')

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: this.props.header?this.props.header:[],
      body: this.props.body?this.props.body:[],
      height: this.props.height?this.props.height:17,
      width: this.props.width,
    }
  }

  render() {
    let header = this.state.header
    let body = this.state.body
    let len = this.state.width?this.state.width:Math.round(width / header.length)
    let key = 0
    let H = header.map((h) => {
      return(<Cell key={key++} data={h} len={len} bold={true}/>)
    })
    let B = body.map((b) => {
      let a = b.map((b) => {
        return(<Cell key={key++} data={b} len={len}/>)
      })
      return(<View key={key++} style={[style.row, {height: this.state.height}]}>{a}</View>)
    })
    return(
      <ScrollView>
        <View style={style.col}>
          <View style={[style.row, {height: this.state.height}]}>
            {H}
          </View>
          <View style={style.col}>
            {B}
          </View>
        </View>
      </ScrollView>
    )
  }
}
