import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  componentDidMount() {
    let items;
    // Populate list from localStorage
    if (typeof localStorage === 'object' && typeof localStorage.toDoItems !== 'undefined') {
      items = JSON.parse(localStorage.toDoItems);
    } else {
      items = [];
    }
    this.setState({ items });
  }

  componentDidUpdate() {
    // Update localStorage whenever the state updates
    if (typeof localStorage === 'object') {
      localStorage.setItem('toDoItems', JSON.stringify(this.state.items));
    }
  }

  addItem() {
    const text = document.getElementById('todo-input').value;
    const timestamp = new Date().valueOf();
    const items = this.state.items;
    items.push({timestamp, text, checked: false});
    document.getElementById('todo-input').value = '';
    this.setState({ items });
  }

  deleteCompletedItems() {
    const items = this.state.items.filter(item => !item.checked);
    this.setState({ items });
  }

  // This is so we can submit the text on 'Enter'
  onKeyDown(e) {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (document.getElementById('todo-input').value.length > 0) {
        this.addItem();
      }
    }
  }

  toggleChecked(key) {
    const items = this.state.items;
    const item = this.state.items[key];
    item.checked = !item.checked;
    items[key] = item;
    this.setState({ items });
  }

  render() {
    const toDoList = this.state.items.map((item, index) => (
      <Todo
        id={item.timestamp}
        key={item.timestamp}
        text={item.text}
        checked={item.checked}
        toggleChecked={this.toggleChecked}
        position={index}
       />
    ));

    return (
      <section className="todos">
        <h4>Hello Todo</h4>
        <button className="remove-completed" onClick={()=>this.deleteCompletedItems()}>
          Remove Completed Items
        </button> 
        <textarea
          id="todo-input"
          name="todo-input"
          maxLength="200"
          rows="3"
          onKeyDown={e => this.onKeyDown(e)}
        />
        <button className="add-item" onClick={()=>this.addItem()}>Add Item</button>
        <ul id="todo-list">
          {toDoList}
        </ul>
      </section>
    );
  }
}

export default TodoList;
