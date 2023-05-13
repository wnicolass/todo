import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Form({ newTodo, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit} action="#">
      <input
        placeholder="Create a new todo..."
        type="text"
        onChange={handleChange}
        value={newTodo}
      />
      <button>
        <FontAwesomeIcon icon={faPlus} className="PlusIcon" />
      </button>
    </form>
  );
}

Form.propTypes = {
  newTodo: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
