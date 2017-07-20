import React, { Component } from 'react';
import './App.css';
import {addTodo, removeItem,editTodo, changeCheckBox } from './redux/actions.js'
import {connect} from 'react-redux'
import TodoList from './TodoList.js'
import Input from './Input.js'
import Filter from './Filter.js'



class App extends Component {
  state = {
    newTodo: 'abc',
  };// immutable
  add = () => {
    this.props.dispatch(addTodo(this.state.newTodo))
  }
  onChangeTodo = e => {
    const value = e.target.value
    this.setState({
      newTodo: value
    })
  }

  removeItem = i => {
    this.props.dispatch(removeItem(i))
  }
  editTodo = (e,i) => {
    const value = e.target.value
    this.props.dispatch(editTodo(value,i))
  }
  checkValue = (e,i) => {
    const type = e.target.checked
    this.props.dispatch(changeCheckBox(type, i))
  }

  render() {
    return (
      <div>
        <Input newTodo={this.state.newTodo} onChangeTodo={this.onChangeTodo} add={this.add}/>
        <Filter/>
        <TodoList 
          removeItem={this.removeItem} 
          onChangeTodo={this.editTodo} 
          checkValue={this.checkValue} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}
export default connect(mapStateToProps)(App);
