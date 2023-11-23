// TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo, fetchTodos } from './action';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.props.updateTodo(todo.id, 'Updated Text')}>
                Update
              </button>
              <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.props.addTodo('New Todo')}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  updateTodo,
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
 