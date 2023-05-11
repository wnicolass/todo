import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  state = {
    currentIcon: faSun,
  };

  handleClickOnIcon = () => {
    const { currentIcon: currIcon } = this.state;
    this.setState({
      currentIcon: currIcon === faSun ? faMoon : faSun,
    });
  };

  render() {
    const { currentIcon } = this.state;
    return (
      <header>
        <h1>TODO</h1>
        <FontAwesomeIcon icon={currentIcon} onClick={this.handleClickOnIcon} />
      </header>
    );
  }
}
