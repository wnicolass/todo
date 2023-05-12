import React, { Component } from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoFooter from './TodoFooter';
import Footer from './Footer';

export default class Main extends Component {
  state = {
    todos: [],
    idx: -1,
    newTodo: '',
  };

  handleSubmit = () => {
    const { newTodo, idx } = this.state;
    if (!newTodo) {
      return;
    }
    const { todos } = this.state;

    if (todos.indexOf(newTodo) !== -1) {
      return;
    }

    if (idx !== -1) {
      const handledTodos = [...todos];
      handledTodos[idx] = newTodo;

      return this.setState({
        todos: [...handledTodos],
        newTodo: '',
        idx: -1,
      });
    }

    const newTodos = [...todos, newTodo];

    this.setState({
      todos: [...newTodos],
      newTodo: '',
    });
  };

  handleEdit = (todoIndex) => {
    const { todos } = this.state;

    this.setState({
      idx: todoIndex,
      newTodo: todos[todoIndex],
    });
  };

  handleDelete = (todoIndex) => {
    const { todos } = this.state;
    const handledTodos = [...todos];
    handledTodos.splice(todoIndex, 1);

    this.setState({
      todos: [...handledTodos],
    });
  };

  handleInputChange = (input) => {
    this.setState({
      newTodo: input.value,
    });
  };

  componentDidUpdate(_, prevState) {
    console.log(prevState);
  }

  render() {
    const { todos, newTodo, idx } = this.state;
    return (
      <main className="main">
        <Form
          data={newTodo}
          onSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
        />
        <Todo
          data={todos}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
        <TodoFooter />
        <Footer />
      </main>
    );
  }
}
