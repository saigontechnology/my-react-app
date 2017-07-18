export function addTodo(newTodo){
    return {
      type: 'ADD_TODO',
      newTodo: newTodo
    }
}
export function removeItem(i) {
    return {
        type:'REMOVE_TODO',
        i:i
    }
}
export function editTodo(value,index){
    return{
        type:'EDIT_TODO',
        value:value,
        i:index
    }
}