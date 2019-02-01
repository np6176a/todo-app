import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

class Checkbox extends Component {
  render () {
    const {toggleCompleted, isChecked} = this.props
    return(
      <TouchableOpacity onPress={toggleCompleted}>
        <View style={styles.box}>
          { isChecked && <View style={styles.inner}/> }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: 'rgba(0,0,0,0.8)'
  }
})

export default Checkbox
