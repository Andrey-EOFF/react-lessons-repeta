import React, { Component } from "react";
import shortid from "shortid";
// import Counter from "./components/Counter";
// import DropDown from "./components/DropDown/DropDown";
// import "./index.css";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
import TodoList from "./components/TodoList";
import initialTodos from "./todos.json";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import Filter from "./components/TodoEditor/FilterTodo";
import LoginForm from "./components/LoginForm/LoginForm";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    console.log("App componentDidMount");
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("App componentWillUnmount");
  }

  render() {
    console.log("App render");
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    const normalizedFilter = this.state.filter.toLowerCase();
    const filterTodos = this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter />
      <DropDown />
      <ColorPicker options={colorPickerOptions} /> */}
        <TodoEditor onSubmitProp={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненых:{completedTodoCount} </p>
        </div>
        <TodoList
          todos={filterTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <LoginForm />
      </>
    );
  }
}

// const App = () => {
//   return (
//     <>
//       <h1>Состояние компонента</h1>
//       {/* <Counter />
//       <DropDown />
//       <ColorPicker options={colorPickerOptions} /> */}
//       <TodoList />
//     </>
//   );
// };

export default App;
