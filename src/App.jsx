import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './styles/App.css';
import './styles/Header.css';
import './styles/Main.css';

export default function App() {
  return (
    <>
      <div className="banner">
        <div className="banner-backdrop"></div>
      </div>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </>
  );
}
