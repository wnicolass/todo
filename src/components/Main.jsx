import React, { Component } from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoFooter from './TodoFooter';

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <Form />
        <Todo />
        <TodoFooter />
      </main>
    );
  }
}
