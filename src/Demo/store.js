// store.js
import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers';

const rootReducer = combineReducers({
  todos: todoReducer,
  // Add more reducers if needed
});

const store = createStore(rootReducer);

export default store;
