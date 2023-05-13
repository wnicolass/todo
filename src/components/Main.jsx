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
    todosLeft: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newTodo, idx } = this.state;
    if (!newTodo) {
      return;
    }
    const { todos } = this.state;
    const todosTextArray = todos.map((todo) => todo.todoText);
    if (todosTextArray.indexOf(newTodo) !== -1) {
      return;
    }

    if (idx !== -1) {
      const handledTodos = [...todos];
      handledTodos[idx] = { todoText: newTodo, isCompleted: false };

      return this.setState({
        todos: [...handledTodos],
        newTodo: '',
        idx: -1,
      });
    }
    const todoObj = {
      todoText: newTodo,
      isCompleted: false,
    };
    const newTodos = [...todos, todoObj];

    this.setState({
      todos: [...newTodos],
      newTodo: '',
    });
  };

  handleClickOnTodoItem = ({ target }) => {
    if (target.nodeName !== 'LI') return;
    const { todos } = this.state;
    const todoIndex = target.dataset.index;
    const currentTodos = [...todos];
    const isTodoCompleted = currentTodos[todoIndex].isCompleted;
    if (!isTodoCompleted) {
      currentTodos[todoIndex].isCompleted = true;
      target.classList.add('completed');

      this.setState({
        todos: [...currentTodos],
      });
      return;
    }
    currentTodos[todoIndex].isCompleted = false;
    target.classList.remove('completed');
    this.setState({
      todos: [...currentTodos],
    });
  };

  handleEdit = (todoIndex) => {
    const { todos } = this.state;

    this.setState({
      idx: todoIndex,
      newTodo: todos[todoIndex].todoText,
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

  handleDeleteCompleted = () => {
    const { todos } = this.state;
    const handledTodos = todos.filter((todo) => !todo.isCompleted);

    this.setState({
      todos: [...handledTodos],
    });
  };

  handleInputChange = ({ target }) => {
    this.setState({
      newTodo: target.value,
    });
  };

  componentDidMount() {
    const { todos } = JSON.parse(localStorage.getItem('todos')) ?? [];

    if (!todos || !todos.length) {
      return;
    }

    this.setState({
      todos,
    });
  }

  componentDidUpdate(_, prevState) {
    const { todos } = this.state;

    if (todos === prevState.todos) {
      return;
    }
    const todosLeft = todos.filter((todo) => !todo.isCompleted);
    localStorage.setItem('todos', JSON.stringify({ todos }));
    this.setState({
      todosLeft: todosLeft.length,
    });
  }

  render() {
    const { todos, newTodo, todosLeft } = this.state;
    return (
      <main className="main">
        <Form
          newTodo={newTodo}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleInputChange}
        />
        <Todo
          todos={todos}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleClick={this.handleClickOnTodoItem}
        />
        <TodoFooter
          todosLeft={todosLeft}
          handleClick={this.handleDeleteCompleted}
        />
        <Footer />
      </main>
    );
  }
}
