import React, { Component, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class Form extends Component {
  state = {
    newTodo: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit: handleForm } = this.props;
    const { newTodo } = this.state;
    handleForm(newTodo);
    this.setState({
      newTodo: '',
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      newTodo: target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="#">
        <input
          placeholder="Create a new todo..."
          type="text"
          onChange={this.handleChange}
        />
        <button>
          <FontAwesomeIcon icon={faPlus} className="PlusIcon" />
        </button>
      </form>
    );
  }
}
