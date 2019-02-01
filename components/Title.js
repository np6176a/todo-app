import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Title extends PureComponent {
  render () {
    return (
      <View style={styles.title}>
        <Text style={styles.text}>Todo App Niya Style</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#3d5ffa',
    paddingTop: 30,
    paddingLeft:10,
    paddingRight: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default Title
