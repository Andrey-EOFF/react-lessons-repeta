import React, { Component } from "react";
import "./TodoEditor.css";

class TodoEditor extends Component {
  state = {
    messaage: "",
  };

  handleChange = (e) => {
    this.setState({ messaage: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
      
      this.props.onSubmitProp(this.state.messaage)

      this.setState({ messaage: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.messaage}
          onChange={this.handleChange}
        ></textarea>

        <button type="submit" className="TodoEditor__button">
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
