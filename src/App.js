import React, { Component } from "react";
// import Counter from "./components/Counter";
// import DropDown from "./components/DropDown/DropDown";
// import "./index.css";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
import TodoList from "./components/TodoList";
import initialTodos from './todos.json'

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
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter />
      <DropDown />
      <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} />
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
