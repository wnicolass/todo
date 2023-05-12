import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faPen } from '@fortawesome/free-solid-svg-icons';

export default class Todo extends Component {
  handleEdit = (event, idx) => {
    const { onEdit: editTodo } = this.props;
    editTodo(idx);
  };

  handleDelete = ({ target }, idx) => {
    const { onDelete: deleteTodo } = this.props;
    deleteTodo(idx);
  };

  render() {
    const { data: todos } = this.props;
    return (
      <ul id="TodoList">
        {todos.map((todo, idx) => (
          <li key={todo}>
            <div>
              <span className="circle">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {todo}
            </div>
            <div className="Actions">
              <FontAwesomeIcon
                icon={faPen}
                onClick={(event) => this.handleEdit(event, idx)}
              />
              <FontAwesomeIcon
                icon={faXmark}
                onClick={(event) => this.handleDelete(event, idx)}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
