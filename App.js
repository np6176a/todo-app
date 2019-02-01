import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import find from 'lodash/find'
import unionBy from 'lodash/unionBy'
import Title from './components/Title'
import Input from './components/Input'
import List from './components/List'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      currentItem: {
        text: '',
        id: '',
        completed: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  inputElement = React.createRef()

  handleChange (e) {
    const t = e.nativeEvent.text
    const newItem = { text: t, id: Date.now(), completed: false }
    this.setState({ currentItem: newItem })
  }

  addItem (e) {
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const data = [...this.state.data, newItem]
      this.setState({
        data: data,
        currentItem: {
          text: '',
          id: '',
          completed: false
        }
      })
    }
  }

  toggleCompleted (id) {
    const item = find(this.state.data, { id })
    const modifiedItem = { ...item, completed: !item.completed }
    const data = unionBy([modifiedItem], this.state.data, 'id')
    this.setState({ data })

  }

  deleteItem (id) {
    const filteredItems = this.state.data.filter(item => {
      return item.id != id
    })
    this.setState({ data: filteredItems })
  }

  render () {
    const { currentItem, inputElement, data } = this.state
    return (
      <View style={styles.container}>
        <Title/>
        <Input
          inputElement={this.inputElement}
          currentItem={currentItem}
          addItem={this.addItem}
          handleChange={this.handleChange}
        />
        <List data={data} deleteItem={this.deleteItem} toggleCompleted={this.toggleCompleted}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
})

export default App
