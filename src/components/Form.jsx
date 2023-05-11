import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class Form extends Component {
  state = {
    newTodo: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      newTodo: target.value,
    });
  };

  render() {
    return (
      <form action="#">
        <input
          placeholder="Create a new todo..."
          type="text"
          onChange={this.handleChange}
        />
        <FontAwesomeIcon icon={faPlus} className="PlusIcon" />
      </form>
    );
  }
}
