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
export function changeCheckBox(checked,i) {
    return {
        type: 'CHANGE_CHECKBOX',
        checked,
        i
    }
}
export function filterFunc(filterType) {
    return {
        type: 'FILTER_TODO',
        filterType
    }
}

function requestTodoSuccess(todos){
    return {
        type: "REQUEST_TODO_SUCCESS",
        todos
    }
}

export function requestTodos(){
    return (dispatch) => {
        fetch('https://raw.githubusercontent.com/rudyhuynh/front-end-note/master/data.json')
        .then(response => response.json())
        .then(json => {
            dispatch(requestTodoSuccess(json.todos))
        })
    }
}