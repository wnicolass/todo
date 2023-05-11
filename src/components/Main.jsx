import React, { Component } from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoFooter from './TodoFooter';
import Footer from './Footer';

export default class Main extends Component {
  state = {
    todos: [],
  };

  handleSubmit = (newTodo) => {
    if (!newTodo) {
      return;
    }
    const { todos } = this.state;

    if (todos.indexOf(newTodo) !== -1) {
      return;
    }

    const newTodos = [...todos, newTodo];

    this.setState({
      todos: [...newTodos],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <main className="main">
        <Form onSubmit={this.handleSubmit} />
        <Todo data={todos} />
        <TodoFooter />
        <Footer />
      </main>
    );
  }
}
