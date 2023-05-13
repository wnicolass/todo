import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  state = {
    currentIcon: faSun,
    theme: 'dark',
  };

  handleClickOnIcon = () => {
    document.body.classList.toggle('light');
    const { currentIcon: currIcon } = this.state;
    const isSun = currIcon === faSun;
    this.setState({
      currentIcon: isSun ? faMoon : faSun,
      theme: isSun ? 'dark' : 'light',
    });
  };

  componentDidMount() {
    const theme = JSON.parse(localStorage.getItem('theme')) ?? 'dark';

    if (theme) {
      document.body.classList.add(theme);
    }

    this.setState({
      currentIcon: theme === 'dark' ? faSun : faMoon,
      theme,
    });
  }

  componentDidUpdate() {
    const isLightTheme = document.body.classList.contains('light');
    localStorage.setItem(
      'theme',
      JSON.stringify(isLightTheme ? 'light' : 'dark'),
    );
  }

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
