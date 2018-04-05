import React, { Component } from 'react';

class Todo extends Component {
    render() {

        return (
            <li
                className={`todo-item ${this.props.checked? 'checked' : ''}`}
                id={this.props.id}
                onClick={() => this.props.toggleChecked(this.props.position)}
            >
                <input
                    className="todo-toggle"
                    type="checkbox"
                    checked={this.props.checked}
                />
                <div className="todo-text">{this.props.text}</div>
            </li>
        );
    }
}

export default Todo;