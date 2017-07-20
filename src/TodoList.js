import React from 'react'
import {connect} from 'react-redux'
import {requestTodos} from './redux/actions.js'

class TodoList extends React.Component{
  componentDidMount(){
    this.props.dispatch(requestTodos())
  }
  renderTodos(todos){
    return todos.map((todo, i) => <li key={i}>
      <input type="checkbox" checked={todo.check} onChange={(e) => this.props.checkValue(e,i)} />
      <input value={todo.value} onChange={(e) => this.props.onChangeTodo(e,i)}/>

      <a onClick={() => this.props.removeItem(i)}>[Remove]</a></li>)
  }
  render(){
    return <ul>
      {this.renderTodos(this.props.todos)}
    </ul>
  }
}

function filterTodos(todos, filter){
  return todos.filter(todo => {
    if (filter === 'Done'){
      return todo.check
    }else if (filter === 'Undone'){
      return !todo.check
    }else{
      return true
    }
  })
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
    todos: filterTodos(state.todos, state.filter)
  }
}
export default connect(mapStateToProps)(TodoList)