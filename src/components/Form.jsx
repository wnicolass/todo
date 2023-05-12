import React, { Component, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit: handleForm } = this.props;
    handleForm();
  };

  handleChange = ({ target }) => {
    const { onInputChange: inputHandler } = this.props;
    inputHandler(target);
  };

  render() {
    const { data: newTodo } = this.props;
    return (
      <form onSubmit={this.handleSubmit} action="#">
        <input
          placeholder="Create a new todo..."
          type="text"
          onChange={this.handleChange}
          value={newTodo}
        />
        <button>
          <FontAwesomeIcon icon={faPlus} className="PlusIcon" />
        </button>
      </form>
    );
  }
}
