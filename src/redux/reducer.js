const initial = {todos: ['Learn React', 'Learn Redux']}

export default function todoReducer(state = initial, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.newTodo]
            }
        case 'REMOVE_TODO':
            return{
                todos:[
                        ...state.todos.slice(0,action.i),
                        ...state.todos.slice(action.i+1,state.todos.length)]
            }
        case 'EDIT_TODO':
            return{
                todos:[
                        ...state.todos.slice(0,action.i),
                        action.value,
                        ...state.todos.slice(action.i+1,state.todos.length)
                ]
            }
        default: return state
    }
}