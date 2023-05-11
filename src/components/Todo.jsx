import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export default class Todo extends Component {
  render() {
    const { data: todos } = this.props;
    return (
      <ul id="TodoList">
        {todos.map((todo, idx) => (
          <li key={todo}>
            <span className="circle">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <div suppressContentEditableWarning={true} contentEditable="true">
              {todo}
            </div>
            <FontAwesomeIcon icon={faXmark} />
          </li>
        ))}
      </ul>
    );
  }
}
