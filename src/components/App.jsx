// import Counter from "./Counter/Counter";
// import Dropdown from "./Dropdown/Dropdown";
// import ColorPicker from "./ColorPicker/ColorPicker";
import { Component } from 'react';
import TodoList from './TodoList/TodoList';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Learn React basic', completed: false },
      { id: 'id-2', text: 'React Router', completed: false },
      { id: 'id-3', text: 'Redux', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: true },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <div>
        <h1>State of component</h1>
        {/* <Counter initialValue={10}/> */}
        {/* <Dropdown/> */}
        {/* <ColorPicker options={colorPickerOptions}/> */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <div>
          <p>Total todos: {todos.length}</p>
          <p>Amount complited todos: {completedTodosCount}</p>
        </div>
      </div>
    );
  }
}
