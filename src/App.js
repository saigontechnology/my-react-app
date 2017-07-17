import React, { Component } from 'react';
import './App.css';

class TodoList extends Component{
  renderTodos(todos){
    return todos.map((todo, i) => <li key={i}>{todo}</li>)
  }
  render(){
    return <ul>
      {this.renderTodos(this.props.todos)}
    </ul>
  }
}

class Input extends Component {
  render() {
    return <div>
          <input value={this.props.newTodo} onChange={this.props.onChangeTodo}/> 
          <button onClick={this.props.add}>Add</button>
        </div>
  }
}

class App extends Component {
  state = {
    newTodo: 'abc',
    todos: ['Learn React', 'Learn Redux']
  };// immutable
  
  add = () => {
    this.setState({
      todos: [this.state.newTodo, ...this.state.todos]
    })
  }
  onChangeTodo = e => {
    const value = e.target.value
    this.setState({
      newTodo: value
    })
  }
  render() {
    return (
      <div>
        <Input newTodo={this.state.newTodo} onChangeTodo={this.onChangeTodo} add={this.add}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
