import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26,
  },
  completed: {
    backgroundColor: 'whitesmoke',
  },
})

class List extends Component {
  renderItem = (item) => {
    const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item
    return (
      <View key={item.id} style={itemStyle}>
        <Text>{item.text}</Text>
        <View style={styles.rightSection}>
          <Checkbox
            toggleCompleted={() => this.props.toggleCompleted(item.id)}
            isChecked={item.completed}
          />
          <TouchableOpacity onPress={() => this.props.deleteItem(item.id)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render () {
    const { data } = this.props
    return (
      <ScrollView>
        {data.map(this.renderItem)}
      </ScrollView>
    )
  }
}

export default List
