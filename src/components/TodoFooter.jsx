import React, { Component } from 'react';

export default class TodoFooter extends Component {
  render() {
    return (
      <div className="ListFooter">
        <span id="TotalLeft">5 items left</span>
        <ul className="ListFooterOptions">
          <li className="active">All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
        <span id="Clear">Clear Completed</span>
      </div>
    );
  }
}
