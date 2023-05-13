import React from 'react';
import PropTypes from 'prop-types';

export default function TodoFooter({ todosLeft, handleClick }) {
  return (
    <div className="ListFooter">
      <span id="TotalLeft">{todosLeft} items left</span>
      <span id="Clear" onClick={handleClick}>
        Clear Completed
      </span>
    </div>
  );
}

TodoFooter.propTypes = {
  todosLeft: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
