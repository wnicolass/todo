import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default class Todo extends Component {
  render() {
    return (
      <ul id="TodoList">
        <li>
          <span className="circle">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          Dummy Data
        </li>
        <li className="active">
          <span className="circle">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          Dummy Data
        </li>
      </ul>
    );
  }
}
