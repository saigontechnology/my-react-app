import {createStore, applyMiddleware, compose} from 'redux'
import todoReducer from './reducer.js'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(todoReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));