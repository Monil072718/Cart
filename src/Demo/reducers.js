// reducers.js
const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload.text }],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      case 'UPDATE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
          ),
        };
      case 'FETCH_TODOS':
        // Implement fetching todos from an API or any data source
        // For simplicity, we'll just return the state as is
        return state;
      default:
        return state;
    }
  };
  
  export default todoReducer;
  