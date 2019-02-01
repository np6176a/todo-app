import React, { Component, PropTypes } from 'react'
import { StyleSheet, TextInput } from 'react-native'

class Input extends Component {
  state = {
    text: ''
  }
  render () {
    const {addItem, handleChange, currentItem, inputElement} = this.props
    return (
      <TextInput
        style={styles.input}
        placeholder= 'Enter your task'
        ref={inputElement}
        onChange={handleChange}
        value={currentItem.text}
        onSubmitEditing={addItem}
        blurOnSubmit={false}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fdfdfd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'row',
    height: 60,
    width: '100%',
    color: '#000'
  }
})

export default Input
