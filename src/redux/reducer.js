const initial = {
    todos: [],
    filter: 'All'
}

export default function todoReducer(state = initial, action){
    switch(action.type){
        case 'REQUEST_TODO_SUCCESS':
            return {
                ...state,
                todos: action.todos
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.newTodo]
            }
        case 'REMOVE_TODO':
            return{
                ...state,
                todos:[
                    ...state.todos.slice(0,action.i),
                    ...state.todos.slice(action.i+1,state.todos.length)
                ]
            }
        case 'EDIT_TODO':
            return{
                ...state,
                todos:[
                        ...state.todos.slice(0,action.i),
                        action.value,
                        ...state.todos.slice(action.i+1,state.todos.length)
                ]
            }
        case 'CHANGE_CHECKBOX':
            return{
                ...state,
                todos:[
                        ...state.todos.slice(0,action.i),
                        {
                            ...state.todos[action.i], 
                            check : action.checked
                        },
                        ...state.todos.slice(action.i+1, state.todos.length)
                ]
            }
        case 'FILTER_TODO':
            return{
                ...state,
                filter: action.filterType
            }
        default: return state
    }
}