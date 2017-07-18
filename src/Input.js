export default class Input extends Component {
  render() {
    return <div>
          <input value={this.props.newTodo} onChange={this.props.onChangeTodo}/> 
          <button onClick={this.props.add}>Add</button>
        </div>
  }
}