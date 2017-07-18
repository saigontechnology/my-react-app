import React, { Component } from 'react';
import './App.css';
import {addTodo, removeItem,editTodo} from './redux/actions.js'
import {connect} from 'react-redux'
import TodoList from './TodoList.js'
import Input from './Input.js'

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
  render() {
    return (
      <div>
        <Input newTodo={this.state.newTodo} onChangeTodo={this.onChangeTodo} add={this.add}/>
        <TodoList todos={this.props.todos} removeItem={this.removeItem} onChangeTodo={this.editTodo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps)(App);
