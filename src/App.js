import React, { Component } from "react";
// import shortid from "shortid";
// import Counter from "./components/Counter";
// import DropDown from "./components/DropDown/DropDown";
// import "./index.css";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import TodoList from "./components/TodoList";
// import initialTodos from "./todos.json";
// import TodoEditor from "./components/TodoEditor/TodoEditor";
// import Filter from "./components/TodoEditor/FilterTodo";
// import LoginForm from "./components/LoginForm/LoginForm";
// import Modal from './components/Modal/Modal'

import { Player } from './components/Player/Player';
import videos from './components/videos.json';
import { VideoList } from './components/VideoList/VideoList'

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  // state = {
  //   todos: initialTodos,
  //   filter: "",
  // };

  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  // addTodo = (text) => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState((prevState) => ({
  //     todos: [todo, ...prevState.todos],
  //   }));
  // };

  // deleteTodo = (todoId) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => todo.id !== todoId),
  //   }));
  // };

  // toggleCompleted = (todoId) => {
  //   console.log(todoId);
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.map((todo) => {
  //       if (todo.id === todoId) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     }),
  //   }));
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // LESSONS 3 HOMEBOOK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // LESSONS 3 HOMEBOOK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // LESSONS 3 HOMEBOOK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // componentDidMount() {
  //   const todos = localStorage.getItem("todos");
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.todos !== prevState.todos) {
  //   }
  //   localStorage.setItem("todos", JSON.stringify(this.state.todos));
  // }

  // LESSONS 3 HOMEBOOK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // LESSONS 3 HOMEBOOK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // LESSONS 3 HOMEBOOK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  render() {
    // console.log("App render");
    // const { todos, filter } = this.state;
    // const totalTodoCount = todos.length;

    // const completedTodoCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );

    // const normalizedFilter = this.state.filter.toLowerCase();
    // const filterTodos = this.state.todos.filter((todo) =>
    //   todo.text.toLowerCase().includes(normalizedFilter)
    // );

    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter />
      <DropDown />
      <ColorPicker options={colorPickerOptions} /> */}
        {/* <TodoEditor onSubmitProp={this.addTodo} />

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

        
        <Modal /> */}
         <div style={{ padding: 24 }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
      </div>
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
