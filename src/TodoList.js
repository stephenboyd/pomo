import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <section className="todos">
        <h4>Hello Todo</h4>
        <textarea id="todo-input" name="todo-input" maxlength="200"></textarea>
      </section>
    );
  }
}

export default TodoList;
