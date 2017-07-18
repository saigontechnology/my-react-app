export default class TodoList extends Component{
  renderTodos(todos){
    return todos.map((todo, i) => <li key={i}>
      <input value={todo} onChange={(e) => this.props.onChangeTodo(e,i)}/>

      <a onClick={() => this.props.removeItem(i)}>[Remove]</a></li>)
  }
  render(){
    return <ul>
      {this.renderTodos(this.props.todos)}
    </ul>
  }
}