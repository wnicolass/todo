import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faPen } from '@fortawesome/free-solid-svg-icons';

export default function Todo({ todos, handleEdit, handleDelete, handleClick }) {
  return (
    <ul id="TodoList">
      {todos.map((todo, idx) => (
        <li
          key={todo.todoText}
          onClick={(event) => handleClick(event)}
          data-index={idx}
          className={todo.isCompleted ? 'completed' : ''}
        >
          <div>
            <span className="circle">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            {todo.todoText}
          </div>
          <div className="Actions">
            <FontAwesomeIcon icon={faPen} onClick={() => handleEdit(idx)} />
            <FontAwesomeIcon icon={faXmark} onClick={() => handleDelete(idx)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
